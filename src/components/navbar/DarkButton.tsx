import { useTheme } from "../../hooks/useTheme"
import { MoonIcon } from "../../assets/icons/MoonIcon"
import { SunIcon } from "../../assets/icons/SunIcon"

function DarkButton() {
    // Usamos el hook useTheme para acceder al contexto
    const { theme, setTheme } = useTheme()
  return (
    <button className="flex items-center justify-center w-8 h-8 rounded-full dark:bg-zinc-950 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-lg"
            onClick={() => {
            // Cambiamos el tema según el tema actual
            setTheme(theme === "dark" ? "light" : "dark")
            }}
        >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
  )
}

export default DarkButton