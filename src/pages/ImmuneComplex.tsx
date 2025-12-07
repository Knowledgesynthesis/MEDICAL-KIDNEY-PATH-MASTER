import { ModuleContent } from '@/components/ModuleContent'
import { immuneComplexContent } from '@/data/content'

export function ImmuneComplex() {
  return (
    <ModuleContent
      title={immuneComplexContent.title}
      description={immuneComplexContent.description}
      sections={immuneComplexContent.sections}
      pitfalls={immuneComplexContent.pitfalls}
      glossary={immuneComplexContent.glossary}
    />
  )
}
