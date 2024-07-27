import CodeComponent from "../code/CodeComponent"
import { fetchExample2 } from "../../utils/fetchEjemplos"


function ExampleAsunc() {
  return (
    <section className="mt-5 w-11/12">
    <p className="text-foreground my-5">
    El uso de <code>async/await</code> puede hacer que el código sea más legible y fácil de manejar:
    </p>
    <CodeComponent codeString={ fetchExample2 } />
  </section>
  )
}

export default ExampleAsunc