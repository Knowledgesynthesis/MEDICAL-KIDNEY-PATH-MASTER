import { create } from 'zustand'

type Theme = 'dark' | 'light'

interface ThemeState {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const getInitialTheme = (): Theme => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme') as Theme | null
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'dark'
}

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: 'dark',
  setTheme: (theme: Theme) => {
    localStorage.setItem('theme', theme)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    set({ theme })
  },
  toggleTheme: () => {
    const newTheme = get().theme === 'dark' ? 'light' : 'dark'
    get().setTheme(newTheme)
  },
}))

// Initialize theme on app load
export const initializeTheme = () => {
  const theme = getInitialTheme()
  document.documentElement.classList.add(theme)
  useThemeStore.getState().setTheme(theme)
}
