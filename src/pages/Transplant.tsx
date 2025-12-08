import { ModuleContent } from '@/components/ModuleContent'
import { transplantContent } from '@/data/content'

export function Transplant() {
  return (
    <ModuleContent
      title={transplantContent.title}
      description={transplantContent.description}
      sections={transplantContent.sections}
      glossary={transplantContent.glossary}
    />
  )
}
