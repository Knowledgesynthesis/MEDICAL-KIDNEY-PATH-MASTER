import { ModuleContent } from '@/components/ModuleContent'
import { vascularContent } from '@/data/content'

export function Vascular() {
  return (
    <ModuleContent
      title={vascularContent.title}
      description={vascularContent.description}
      sections={vascularContent.sections}
      glossary={vascularContent.glossary}
    />
  )
}
