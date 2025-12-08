import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { BottomNav } from './BottomNav'

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6 pb-20 md:pb-6">
        <Outlet />
      </main>
      <BottomNav />
      <footer className="hidden md:block border-t py-4 text-center text-sm text-muted-foreground">
        <p>Educational use only. Not for diagnosis or clinical care.</p>
      </footer>
    </div>
  )
}
