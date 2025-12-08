import { NavLink } from 'react-router-dom'
import { Home, BookOpen, ClipboardCheck, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/', icon: Home, label: 'Home' },
  { to: '/cases', icon: BookOpen, label: 'Cases' },
  { to: '/assessment', icon: ClipboardCheck, label: 'Quiz' },
  { to: '/settings', icon: Settings, label: 'Settings' },
]

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden safe-bottom">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              cn(
                'flex flex-col items-center px-3 py-1.5 text-xs transition-colors',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              )
            }
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
