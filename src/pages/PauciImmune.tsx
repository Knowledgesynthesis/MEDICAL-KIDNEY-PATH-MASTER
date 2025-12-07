import { ModuleContent } from '@/components/ModuleContent'
import { pauciImmuneContent } from '@/data/content'

export function PauciImmune() {
  return (
    <ModuleContent
      title={pauciImmuneContent.title}
      description={pauciImmuneContent.description}
      sections={pauciImmuneContent.sections}
      glossary={pauciImmuneContent.glossary}
    />
  )
}
