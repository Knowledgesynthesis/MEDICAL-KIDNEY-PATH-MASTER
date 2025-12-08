import { ModuleContent } from '@/components/ModuleContent'
import { glomerularPatternsContent } from '@/data/content'

export function GlomerularPatterns() {
  return (
    <ModuleContent
      title={glomerularPatternsContent.title}
      description={glomerularPatternsContent.description}
      sections={glomerularPatternsContent.sections}
      differentialTable={glomerularPatternsContent.differentialTable}
      glossary={glomerularPatternsContent.glossary}
    />
  )
}
