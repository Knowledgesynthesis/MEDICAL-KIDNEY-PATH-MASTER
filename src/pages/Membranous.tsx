import { ModuleContent } from '@/components/ModuleContent'
import { membranousContent } from '@/data/content'

export function Membranous() {
  return (
    <ModuleContent
      title={membranousContent.title}
      description={membranousContent.description}
      sections={membranousContent.sections}
      glossary={membranousContent.glossary}
    />
  )
}
