
import { useContext } from "react"
import { ThemeProviderContext } from "../contexts/ThemeProvider"

// Definimos un hook personalizado 
export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  // Si el contexto es indefinido, lanzamos un error
  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  // Devolvemos el contexto
  return context
}
