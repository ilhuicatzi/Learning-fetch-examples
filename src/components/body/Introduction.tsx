
function Introduction() {
  return (
    <section className="sm:w-3/4 my-10">
    <h1 className="text-5xl my-16">¿Cómo hacer un <code className="bg-muted rounded-lg px-1">fetch</code>? </h1>
    <div className="flex justify-between items-center">
    <p className="text-foreground flex-1 text-pretty text-lg">
    En el contexto de desarrollo web, hacer un <code>`fetch`</code>  se refiere a realizar una solicitud HTTP para obtener o enviar datos a un servidor. <code>`fetch`</code> es una API nativa de JavaScript que proporciona una manera moderna y flexible de realizar solicitudes HTTP, reemplazando las antiguas técnicas basadas en XMLHttpRequest.
    </p>
    <figure className="mx-5 overflow-hidden rounded-full p-1 hidden md:flex ">
      <img className="w-64 h-64 object-cover rounded-full hover:scale-110 transition duration-300" src="/img/fetch-logo.jpeg" alt="imagen logo de fetch api" />
    </figure>
    </div>
  </section>
  )
}

export default Introduction