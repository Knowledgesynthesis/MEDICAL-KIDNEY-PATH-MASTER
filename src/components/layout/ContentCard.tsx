import type { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ContentCardProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
  icon?: ReactNode
}

export function ContentCard({ title, description, children, className, icon }: ContentCardProps) {
  return (
    <Card className={cn('', className)}>
      <CardHeader>
        <div className="flex items-start gap-3">
          {icon && (
            <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
          )}
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            {description && (
              <CardDescription className="mt-1">{description}</CardDescription>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
