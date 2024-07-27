import CodeComponent from "@/components/code/CodeComponent"
import { RickMortyCode } from "@/utils/codeExamples"
import { BackIcon } from "@/assets/icons/BackIcon"

function RickMortyCodePage() {
  return (
    <section className="mt-5 w-11/12 px-10">
    <div className="flex items-center gap-3">
        <a href="/rick-morty" className="flex items-center text-green-500 hover:bg-accent p-1 rounded-lg">
            <BackIcon className="text-2xl" />
        </a>
        <h2 className="text-3xl marker:font-mono text-green-500"> Código de la página Rick & Morty</h2>
    </div>
    <CodeComponent codeString={ RickMortyCode } />
    </section>
  )
}

export default RickMortyCodePage