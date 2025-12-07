import { ModuleContent } from '@/components/ModuleContent'
import { diabeticContent } from '@/data/content'

export function Diabetic() {
  return (
    <ModuleContent
      title={diabeticContent.title}
      description={diabeticContent.description}
      sections={diabeticContent.sections}
      glossary={diabeticContent.glossary}
    />
  )
}
