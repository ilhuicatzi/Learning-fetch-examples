import { Link } from "react-router-dom";
import DarkButton from "./DarkButton";
import { GithubIcon } from "../../assets/icons/GithubIcon";

function Navbar() {
  return (
    <nav className="flex justify-between items-center sm:px-16 px-4 py-3">
      <Link to="/">
        <h2 className="text-3xl font-medium hover:underline">API</h2>
      </Link>
      <ul className="flex items-center gap-2">
        <li className="px-4 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800">
          <Link to="/about">About</Link>
        </li>
        <li className="mr-2 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800">
          <button
            className="flex items-center"
            onClick={() =>
              window.open("https://github.com/ilhuicatzi", "_blank")
            }
          >
            <GithubIcon className="text-xl" />
          </button>
        </li>
        <li>
          <DarkButton />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
