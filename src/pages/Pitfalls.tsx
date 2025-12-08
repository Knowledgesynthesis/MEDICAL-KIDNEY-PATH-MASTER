import { ModuleContent } from '@/components/ModuleContent'
import { pitfallsContent } from '@/data/content'

export function Pitfalls() {
  return (
    <ModuleContent
      title={pitfallsContent.title}
      description={pitfallsContent.description}
      sections={pitfallsContent.sections}
      glossary={pitfallsContent.glossary}
    />
  )
}
