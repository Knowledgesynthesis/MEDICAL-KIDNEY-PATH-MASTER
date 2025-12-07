import { Link } from 'react-router-dom'
import {
  Microscope, Circle, Shield, CircleSlash, Target, Footprints,
  Layers, GitBranch, Droplet, Zap, Cylinder, Activity,
  Heart, Sparkles, AlertTriangle, BookOpen, ClipboardCheck
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { modules, moduleCategories } from '@/data/modules'
import { cn } from '@/lib/utils'

const iconMap: Record<string, React.ReactNode> = {
  Microscope: <Microscope className="h-5 w-5" />,
  Circle: <Circle className="h-5 w-5" />,
  Shield: <Shield className="h-5 w-5" />,
  CircleSlash: <CircleSlash className="h-5 w-5" />,
  Target: <Target className="h-5 w-5" />,
  Footprints: <Footprints className="h-5 w-5" />,
  Layers: <Layers className="h-5 w-5" />,
  GitBranch: <GitBranch className="h-5 w-5" />,
  Droplet: <Droplet className="h-5 w-5" />,
  Zap: <Zap className="h-5 w-5" />,
  Cylinder: <Cylinder className="h-5 w-5" />,
  Activity: <Activity className="h-5 w-5" />,
  Heart: <Heart className="h-5 w-5" />,
  Sparkles: <Sparkles className="h-5 w-5" />,
  AlertTriangle: <AlertTriangle className="h-5 w-5" />,
}

const categoryColors: Record<string, string> = {
  foundations: 'bg-blue-500/10 text-blue-500 dark:bg-blue-500/20',
  glomerular: 'bg-purple-500/10 text-purple-500 dark:bg-purple-500/20',
  other: 'bg-green-500/10 text-green-500 dark:bg-green-500/20',
  advanced: 'bg-orange-500/10 text-orange-500 dark:bg-orange-500/20',
}

export function Home() {
  const groupedModules = Object.entries(moduleCategories).map(([key, category]) => ({
    ...category,
    key,
    modules: modules.filter((m) => m.category === key),
  }))

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center py-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Medical Kidney Path Master
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          A comprehensive educational platform for renal pathology. Learn systematic
          biopsy interpretation through LM, IF, and EM patterns.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            Practice Cases
          </Link>
          <Link
            to="/assessment"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <ClipboardCheck className="h-4 w-4" />
            Take Assessment
          </Link>
        </div>
      </div>

      {/* Disclaimer Banner */}
      <div className="p-4 rounded-lg bg-muted border">
        <p className="text-sm text-center text-muted-foreground">
          <strong>Educational use only.</strong> This content is synthetic and diagrammatic.
          Not for diagnosis or clinical care.
        </p>
      </div>

      {/* Module Categories */}
      {groupedModules.map((group) => (
        <section key={group.key} className="space-y-4">
          <div>
            <h2 className="text-xl font-semibold">{group.title}</h2>
            <p className="text-sm text-muted-foreground">{group.description}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {group.modules.map((module) => (
              <Link key={module.id} to={module.path}>
                <Card className="h-full hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className={cn('p-2 rounded-lg', categoryColors[module.category])}>
                        {iconMap[module.icon]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-base">{module.shortTitle}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="line-clamp-2">
                      {module.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <Link to="/cases">
          <Card className="hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Integrated Cases</CardTitle>
                  <CardDescription>
                    Practice with synthetic renal biopsy cases
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </Link>
        <Link to="/assessment">
          <Card className="hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <ClipboardCheck className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">Assessment</CardTitle>
                  <CardDescription>
                    Test your knowledge with MCQs
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        </Link>
      </section>
    </div>
  )
}
