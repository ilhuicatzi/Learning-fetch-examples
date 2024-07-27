import CodeComponent from "../code/CodeComponent"
import { fetchExample1 } from "../../utils/fetchEjemplos"

function ExampleFetch() {
  return (
    <section className="mt-5 w-11/12">
    <p className="text-foreground my-5">
    Fetch es una API moderna para realizar solicitudes HTTP en JavaScript. Puede manejar solicitudes GET, POST, PUT, DELETE y otras.
    </p>
    <CodeComponent codeString={ fetchExample1 } />
  </section>
  )
}

export default ExampleFetch