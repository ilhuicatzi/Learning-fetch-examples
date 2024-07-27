import CodeComponent from "../code/CodeComponent"
import { fetchExample4 } from "../../utils/fetchEjemplos"


function ExampleAxios() {
  return (
    <section className="mt-5 w-11/12">
    <p className="text-foreground my-5">
    Axios es una biblioteca popular para realizar solicitudes HTTP en JavaScript. Puede manejar solicitudes GET, POST, PUT, DELETE y otras.
    </p>
    <CodeComponent codeString={ fetchExample4 } />
    </section>
  )
}

export default ExampleAxios