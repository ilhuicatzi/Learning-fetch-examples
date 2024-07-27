import {
  Introduction,
  ExampleAsync,
  ExampleAxios,
  ExampleFetch,
  ExampleQuery,
  ExampleReact,
} from "../components/body/index";
import { Accordion, AccordionItem } from "@nextui-org/react";

function HomePage() {
  return (
    <main className="px-4 sm:px-16 ">
      <Introduction />
      <section className="sm:w-3/4">
        <Accordion>
          <AccordionItem
            title="Usando Fetch"
            classNames={{ title: "text-2xl" }}
          >
            <ExampleFetch />
          </AccordionItem>

          <AccordionItem
            title="Usando Async/Await"
            classNames={{ title: "text-2xl" }}
          >
            <ExampleAsync />
          </AccordionItem>

          <AccordionItem
            title="Usando React"
            classNames={{ title: "text-2xl" }}
          >
            <ExampleReact />
          </AccordionItem>

          <AccordionItem
            title="Usando Axios"
            classNames={{ title: "text-2xl" }}
          >
            <ExampleAxios />
          </AccordionItem>

          <AccordionItem
            title="Usando React Query"
            classNames={{ title: "text-2xl" }}
          >
            <ExampleQuery />
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}

export default HomePage;
