import { Link } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/stores/themeStore'
import { useState } from 'react'

export function Header() {
  const { theme, toggleTheme } = useThemeStore()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">K</span>
          </div>
          <span className="hidden font-bold sm:inline-block">
            Medical Kidney Path Master
          </span>
          <span className="font-bold sm:hidden">
            MKPM
          </span>
        </Link>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <nav className="border-t bg-background md:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/assessment"
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                Assessment
              </Link>
              <Link
                to="/cases"
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                Cases
              </Link>
              <Link
                to="/settings"
                className="rounded-md px-3 py-2 text-sm font-medium hover:bg-accent"
                onClick={() => setMobileMenuOpen(false)}
              >
                Settings
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
