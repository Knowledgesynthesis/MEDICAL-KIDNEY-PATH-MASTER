import { ModuleContent } from '@/components/ModuleContent'
import { podocytopathyContent } from '@/data/content'

export function Podocytopathy() {
  return (
    <ModuleContent
      title={podocytopathyContent.title}
      description={podocytopathyContent.description}
      sections={podocytopathyContent.sections}
      pitfalls={podocytopathyContent.pitfalls}
      glossary={podocytopathyContent.glossary}
    />
  )
}
