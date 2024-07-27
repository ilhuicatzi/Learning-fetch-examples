import CodeComponent from "../code/CodeComponent"
import { fetchExample5 } from "../../utils/fetchEjemplos"



function ExampleQuery() {
  return (
    <section className="mt-5 w-11/12">
    <p className="text-foreground my-5">
    React Query es una biblioteca que te ayuda a manejar los datos de tu aplicación de manera eficiente.
    </p>
    <CodeComponent codeString={ fetchExample5 } />
    </section>
  )
}

export default ExampleQuery