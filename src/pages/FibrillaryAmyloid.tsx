import { ModuleContent } from '@/components/ModuleContent'
import { fibrillaryAmyloidContent } from '@/data/content'

export function FibrillaryAmyloid() {
  return (
    <ModuleContent
      title={fibrillaryAmyloidContent.title}
      description={fibrillaryAmyloidContent.description}
      sections={fibrillaryAmyloidContent.sections}
      differentialTable={fibrillaryAmyloidContent.differentialTable}
      glossary={fibrillaryAmyloidContent.glossary}
    />
  )
}
