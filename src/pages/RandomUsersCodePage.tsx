import CodeComponent from "@/components/code/CodeComponent"
import { RandomUsersCode } from "@/utils/codeExamples"
import { BackIcon } from "@/assets/icons/BackIcon"
import { Link } from "react-router-dom"

function RandomUsersCodePage() {
  return (
    <section className="mt-5 w-11/12 px-10">
    <div className="flex items-center gap-3">
        <Link to="/random-users" className="flex items-center text-sky-500 hover:bg-accent p-1 rounded-lg">
            <BackIcon className="text-2xl" />
        </Link>
        <h2 className="text-3xl marker:font-mono text-sky-500"> Código de la página Random Users</h2>
    </div>
    <CodeComponent codeString={ RandomUsersCode } />
    </section>
  )
}

export default RandomUsersCodePage