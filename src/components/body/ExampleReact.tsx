import CodeComponent from "../code/CodeComponent"
import { fetchExample3 } from "../../utils/fetchEjemplos"

function ExampleReact() {
  return (
    <section className="mt-5 w-11/12">
    <p className="text-foreground my-5">
    En React, puedes usar los hooks <code>`useState`</code> y <code>`useEffect`</code> para manejar el estado de tus componentes.
    </p>
    <CodeComponent codeString={ fetchExample3 } />  
    </section>
  )
}

export default ExampleReact