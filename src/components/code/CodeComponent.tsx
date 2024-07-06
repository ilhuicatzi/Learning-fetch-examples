
import hljs from "highlight.js";
import "highlight.js/styles/an-old-hope.css";
import javascript from "highlight.js/lib/languages/javascript";
import { CopyIcon } from "../../assets/icons/CopyIcon";
import { Toaster, toast } from 'sonner'

hljs.registerLanguage("javascript", javascript);

type Props = {
  codeString: string,
  size: string
}

function CodeComponent({ codeString, size} : Props) {
  const highlightedCode = hljs.highlight(codeString, {
    language: "javascript",
  }).value;

    const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    toast.success('Codigo copiado!')
  }
  return (
    <section className="mb-12 mt-8 rounded-xl relative">
      <div className="flex justify-end">
        <button 
        onClick={copyCode}
        className="bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 p-1.5 rounded-s-md absolute top-0">
          <CopyIcon />
        </button>
      </div>
      <div className={`w-full bg-zinc-100 dark:bg-zinc-900/70 rounded-lg overflow-auto h-[${size}]`}>
        <pre>
          <code
            className="block px-4 pb-4 text-sm language-javascript"
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          ></code>
        </pre>
      </div>
      <Toaster />
    </section>
  );
}

export default CodeComponent;
