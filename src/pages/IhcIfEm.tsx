import { ModuleContent } from '@/components/ModuleContent'
import { ihcIfEmContent } from '@/data/content'

export function IhcIfEm() {
  return (
    <ModuleContent
      title={ihcIfEmContent.title}
      description={ihcIfEmContent.description}
      sections={ihcIfEmContent.sections}
      glossary={ihcIfEmContent.glossary}
    />
  )
}
