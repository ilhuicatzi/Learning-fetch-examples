// Importamos las funciones necesarias de React
import { createContext, useEffect, useState } from "react"

// Definimos los tipos del tema y las propiedades del proveedor de temas
type Theme = "dark" | "light" | "system"
type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}
type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

// Definimos el estado inicial para nuestro proveedor de temas
const initialState: ThemeProviderState = {
  theme: "system",
  setTheme: () => null,
}

// Creamos un contexto para nuestro proveedor de temas
export const 
      ThemeProviderContext = createContext<ThemeProviderState>(initialState)

// Definimos nuestro componente de proveedor de temas
export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}: ThemeProviderProps) {
  // Usamos el hook useState para manejar el estado del tema
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  // Usamos el hook useEffect para actualizar la clase 
  // del elemento raíz del documento cuando cambia el tema
  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  // Definimos el valor que se proporcionará a nuestro contexto
  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  // Devolvemos el proveedor de contexto con el valor y los hijos pasados
  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

