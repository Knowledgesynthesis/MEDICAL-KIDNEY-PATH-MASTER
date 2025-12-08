import { useState } from 'react'
import { ChevronDown, ChevronUp, BookOpen, AlertTriangle, List } from 'lucide-react'
import { ModulePage, ContentCard } from '@/components/layout'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface Section {
  id: string
  title: string
  content: string
  keyPoints?: string[]
}

interface Pitfall {
  title: string
  description: string
}

interface GlossaryItem {
  term: string
  definition: string
}

interface ModuleContentProps {
  title: string
  description: string
  sections: Section[]
  pitfalls?: Pitfall[]
  glossary?: GlossaryItem[]
  differentialTable?: Array<{ pattern?: string; feature?: string; conditions?: string[]; [key: string]: string | string[] | undefined }>
}

export function ModuleContent({
  title,
  description,
  sections,
  pitfalls,
  glossary,
  differentialTable
}: ModuleContentProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>([sections[0]?.id || ''])

  const toggleSection = (id: string) => {
    setExpandedSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const expandAll = () => {
    setExpandedSections(sections.map((s) => s.id))
  }

  const collapseAll = () => {
    setExpandedSections([])
  }

  const renderContent = (content: string) => {
    const lines = content.split('\n')
    const elements: React.ReactNode[] = []
    let currentList: string[] = []
    let listType: 'bullet' | 'numbered' | null = null

    const flushList = () => {
      if (currentList.length > 0) {
        const ListComponent = listType === 'numbered' ? 'ol' : 'ul'
        elements.push(
          <ListComponent
            key={elements.length}
            className={cn(
              'my-2 space-y-1 pl-4',
              listType === 'numbered' ? 'list-decimal' : 'list-disc'
            )}
          >
            {currentList.map((item, i) => (
              <li key={i} className="text-sm">{item}</li>
            ))}
          </ListComponent>
        )
        currentList = []
        listType = null
      }
    }

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()

      if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        flushList()
        elements.push(
          <h4 key={index} className="font-semibold mt-4 mb-2">
            {trimmedLine.slice(2, -2)}
          </h4>
        )
      } else if (trimmedLine.startsWith('- ')) {
        if (listType !== 'bullet') {
          flushList()
          listType = 'bullet'
        }
        currentList.push(trimmedLine.slice(2))
      } else if (/^\d+\.\s/.test(trimmedLine)) {
        if (listType !== 'numbered') {
          flushList()
          listType = 'numbered'
        }
        currentList.push(trimmedLine.replace(/^\d+\.\s/, ''))
      } else if (trimmedLine) {
        flushList()
        elements.push(
          <p key={index} className="text-sm text-muted-foreground mb-2">
            {trimmedLine}
          </p>
        )
      }
    })

    flushList()
    return elements
  }

  return (
    <ModulePage title={title} description={description}>
      {/* Controls */}
      <div className="flex gap-2 mb-4">
        <Button variant="outline" size="sm" onClick={expandAll}>
          <ChevronDown className="h-4 w-4 mr-1" />
          Expand All
        </Button>
        <Button variant="outline" size="sm" onClick={collapseAll}>
          <ChevronUp className="h-4 w-4 mr-1" />
          Collapse All
        </Button>
      </div>

      {/* Sections */}
      <div className="space-y-4">
        {sections.map((section) => (
          <Card key={section.id}>
            <CardHeader
              className="cursor-pointer"
              onClick={() => toggleSection(section.id)}
            >
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{section.title}</CardTitle>
                {expandedSections.includes(section.id) ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </div>
            </CardHeader>
            {expandedSections.includes(section.id) && (
              <CardContent>
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {renderContent(section.content)}
                </div>
                {section.keyPoints && section.keyPoints.length > 0 && (
                  <div className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <List className="h-4 w-4" />
                      Key Points
                    </h5>
                    <ul className="space-y-1">
                      {section.keyPoints.map((point, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {/* Differential Table */}
      {differentialTable && differentialTable.length > 0 && (
        <ContentCard
          title="Differential Diagnosis"
          icon={<BookOpen className="h-5 w-5" />}
          className="mt-6"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 font-semibold">
                    {differentialTable[0].pattern ? 'Pattern' : 'Feature'}
                  </th>
                  <th className="text-left py-2 font-semibold">
                    {differentialTable[0].conditions ? 'Conditions' : 'Details'}
                  </th>
                </tr>
              </thead>
              <tbody>
                {differentialTable.map((row, i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="py-2 pr-4 font-medium">
                      {row.pattern || row.feature}
                    </td>
                    <td className="py-2 text-muted-foreground">
                      {Array.isArray(row.conditions)
                        ? row.conditions.join(', ')
                        : Object.entries(row)
                            .filter(([k]) => !['pattern', 'feature'].includes(k))
                            .map(([k, v]) => `${k}: ${v}`)
                            .join(' | ')
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ContentCard>
      )}

      {/* Pitfalls */}
      {pitfalls && pitfalls.length > 0 && (
        <ContentCard
          title="Pitfalls & Cautions"
          icon={<AlertTriangle className="h-5 w-5" />}
          className="mt-6"
        >
          <div className="space-y-3">
            {pitfalls.map((pitfall, i) => (
              <div key={i} className="p-3 rounded-lg bg-destructive/5 border border-destructive/10">
                <h5 className="font-semibold text-sm mb-1">{pitfall.title}</h5>
                <p className="text-sm text-muted-foreground">{pitfall.description}</p>
              </div>
            ))}
          </div>
        </ContentCard>
      )}

      {/* Glossary */}
      {glossary && glossary.length > 0 && (
        <ContentCard
          title="Glossary"
          icon={<BookOpen className="h-5 w-5" />}
          className="mt-6"
        >
          <Accordion type="single" collapsible className="w-full">
            {glossary.map((item, i) => (
              <AccordionItem key={i} value={`glossary-${i}`}>
                <AccordionTrigger className="text-sm font-medium">
                  {item.term}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {item.definition}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ContentCard>
      )}
    </ModulePage>
  )
}
