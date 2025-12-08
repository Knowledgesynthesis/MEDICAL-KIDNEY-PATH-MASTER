import { ModuleContent } from '@/components/ModuleContent'
import { tinContent } from '@/data/content'

export function TIN() {
  return (
    <ModuleContent
      title={tinContent.title}
      description={tinContent.description}
      sections={tinContent.sections}
      glossary={tinContent.glossary}
    />
  )
}
