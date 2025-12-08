import { ModuleContent } from '@/components/ModuleContent'
import { antiGBMContent } from '@/data/content'

export function AntiGBM() {
  return (
    <ModuleContent
      title={antiGBMContent.title}
      description={antiGBMContent.description}
      sections={antiGBMContent.sections}
      glossary={antiGBMContent.glossary}
    />
  )
}
