import { ModuleContent } from '@/components/ModuleContent'
import { normalAnatomyContent } from '@/data/content'

export function NormalAnatomy() {
  return (
    <ModuleContent
      title={normalAnatomyContent.title}
      description={normalAnatomyContent.description}
      sections={normalAnatomyContent.sections}
      glossary={normalAnatomyContent.glossary}
    />
  )
}
