import { GithubIcon } from "../../assets/icons/GithubIcon"
import { Linkedin } from "../../assets/icons/Linkedin"
function Footer() {
  return (
    <footer className="bg-zitext-zinc-50 dark:bg-zinc-950 w-full flex justify-center px-10 mt-20">
  <section className="container my-5 flex justify-between sm:flex-row flex-col items-center">
    <article>
        <p className="text-xs font-extralight dark:text-zinc-500 text-zinc-500  mb-1"> <code>g.ilhuicatzi@gmail.com</code></p>
        <p className="flex gap-3 items-center justify-center mb-2">
          <button
            onClick={() =>window.open("https://github.com/ilhuicatzi", "_blank")}>
          <GithubIcon className="w-5 h-5 text-zinc-700 hover:text-zinc-900 dark:text-zinc-700 hover:dark:text-zinc-300  dark:hover:scale-125 hover:scale-125  inline-block transition duration-300" />
          </button>
          <button
          onClick={() =>window.open("https://www.linkedin.com/in/gonzalo-ilhuicatzi-787a901a1", "_blank")}>
          <Linkedin className="w-5 h-5 text-zinc-700 hover:text-zinc-900 dark:text-zinc-700 hover:dark:text-zinc-300  dark:hover:scale-125 hover:scale-125  inline-block transition duration-300" />
          </button>
        </p>
    </article>
    <article className="text-sm font-light dark:text-zinc-50">
      Copyright © 2024 Gonzalo
    </article>
  </section>
</footer>
  )
}

export default Footer