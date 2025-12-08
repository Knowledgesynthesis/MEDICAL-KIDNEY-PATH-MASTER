import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ModulePageProps {
  title: string
  description?: string
  children: ReactNode
}

export function ModulePage({ title, description, children }: ModulePageProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link to="/">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold mb-2">{title}</h1>
        {description && (
          <p className="text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  )
}
