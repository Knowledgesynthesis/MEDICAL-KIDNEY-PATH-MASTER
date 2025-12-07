import { ModuleContent } from '@/components/ModuleContent'
import { mpgnC3gContent } from '@/data/content'

export function MpgnC3g() {
  return (
    <ModuleContent
      title={mpgnC3gContent.title}
      description={mpgnC3gContent.description}
      sections={mpgnC3gContent.sections}
      pitfalls={mpgnC3gContent.pitfalls}
      glossary={mpgnC3gContent.glossary}
    />
  )
}
