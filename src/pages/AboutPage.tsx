function AboutPage() {
  return (
    <main className="container">
      <div className="px-4 sm:px-20 md:w-3/4 w-full mt-10">
        <h1 className="text-center text-4xl font-medium mb-10">About This Project</h1>
        <p className="mb-10">
          This project demonstrates various ways to perform HTTP requests
          (fetch) in JavaScript. It provides examples using different methods
          and libraries to help developers understand and apply them in various
          development contexts.
        </p>

        <h2 className="text-3xl font-medium mb-5">Included Methods</h2>
        <ul className="px-5 flex flex-col items-start gap-3 mb-10">
          <li>
            <strong>Native Fetch:</strong> Basic usage of the built-in fetch
            method in JavaScript.
          </li>
          <li>
            <strong>Fetch with Async/Await:</strong> Improved readability and
            promise handling with async/await.
          </li>
          <li>
            <strong>Fetch in React:</strong> Implementation of fetch in React
            functional components.
          </li>
          <li>
            <strong>Fetch with Axios in React:</strong> Usage of Axios library
            to simplify HTTP requests in React.
          </li>
          <li>
            <strong>Fetch with React Query:</strong> Advanced data handling in
            React using React Query to manage request state and cache.
          </li>
        </ul>

        <h2 className="text-3xl font-medium mb-5">Examples</h2>
        <h3 className="text-2xl">Random User</h3>
        <p className="text-muted-foreground">
          This example shows how to perform a fetch in a React project, display
          the data in a table, and add filtering and pagination functionalities.
        </p>
        <ul className="px-5 flex flex-col items-start gap-3 mb-10">
          <li>Table to display users.</li>
          <li>Country filter.</li>
          <li>Pagination to navigate through pages of results.</li>
        </ul>

        <h3 className="text-2xl">Cocktail</h3>
        <p className="text-muted-foreground">
          In this example, a fetch is performed in a React project to display a
          list of cocktails in cards, and a modal is used to show additional
          details for each cocktail.
        </p>
        <ul className="px-5 flex flex-col items-start gap-3 mb-10">
          <li>Data presentation in cards.</li>
          <li>Modals to show detailed information about the cocktails.</li>
          <li>Usage of state and effect hooks.</li>
        </ul>

        <h3 className="text-2xl">Rick and Morty</h3>
        <p className="text-muted-foreground">
          This example uses React Query to handle HTTP requests and data state.
          Additionally, it implements infinite scroll using Intersection
          Observer.
        </p>
        <ul className="px-5 flex flex-col items-start gap-3 mb-10">
          <li>Data handling with React Query.</li>
          <li>
            Infinite scroll to load more characters as the user scrolls down.
          </li>
          <li>Cards to display Rick and Morty characters.</li>
        </ul>

        <div>
          <p>Author: Gonzalo Ilhuicatzi Netzahualcoyotl</p>
          <p>
            Email:{" "}
            <a href="mailto:g.ilhuicatzi@gmail.com">g.ilhuicatzi@gmail.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutPage;
