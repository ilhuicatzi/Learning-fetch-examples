import { Link } from "react-router-dom";
import DarkButton from "./DarkButton";
import { GithubIcon } from "../../assets/icons/GithubIcon";
import { Hamburger } from "@/assets/icons/Hamburger";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center sm:px-16 px-4 py-3">
      <Link to="/">
        <h2 className="text-3xl font-medium hover:underline">Z@o</h2>
      </Link>
      <div className="flex items-center gap-3">
        <ul className="hidden sm:flex items-center gap-2">
          <li className="px-4 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800">
            <Link to="/about">About</Link>
          </li>

          <li className="px-4 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800">
            <Dropdown>
              <DropdownTrigger>
                <p className="cursor-pointer">Ejemplos</p>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="users">
                  <Link to="/random-users">Random Users</Link>
                </DropdownItem>
                <DropdownItem key="cocktail">
                  <Link to="/cocktail">Mis Cocteles</Link>
                </DropdownItem>
                <DropdownItem key="rick">
                  <Link to="/rick-morty">Rick & Morty</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </li>

          <li className="mr-2 p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800">
            <button
              className="flex items-center"
              onClick={() =>
                window.open("https://github.com/ilhuicatzi/use-fetch-examples", "_blank")
              }
            >
              <GithubIcon className="text-xl" />
            </button>
          </li>
          <li className="rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors p-0.5">
            <DarkButton />
          </li>
        </ul>
        <button className="flex sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Hamburger className="w-8 h-8 p-1 rounded-lg hover:bg-muted" />
        </button>
      </div>
      {isOpen && (
        <ul className="flex sm:hidden flex-col items-center gap-2 absolute top-16 right-4 bg-white dark:bg-black p-4 rounded-lg shadow-lg w-full z-30">
          <li className="w-full">
            <Link
              onClick={() => setIsOpen(false)}
              className="hover:bg-muted w-full flex justify-center items-center p-1 rounded-md"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="w-full">
            <Link
              onClick={() => setIsOpen(false)}
              className="hover:bg-muted w-full flex justify-center items-center p-1 rounded-md"
              to="/random-users"
            >
              Random Users
            </Link>
          </li>
          <li className="w-full">
            <Link
              onClick={() => setIsOpen(false)}
              className="hover:bg-muted w-full flex justify-center items-center p-1 rounded-md"
              to="/cocktail"
            >
              Mis Cocteles
            </Link>
          </li>
          <li className="w-full">
            <Link
              onClick={() => setIsOpen(false)}
              className="hover:bg-muted w-full flex justify-center items-center p-1 rounded-md"
              to="/rick-morty"
            >
              Rick & Morty
            </Link>
          </li>
          <li className="w-full">
            <button
              className="hover:bg-muted w-full flex justify-center items-center p-1 rounded-md"
              onClick={() => {
                setIsOpen(false);
                window.open("https://github.com/ilhuicatzi/use-fetch-examples", "_blank");
              }}
            >
              <GithubIcon className="text-xl" />
            </button>
          </li>
          <li className="w-full">
            <p onClick={() => setIsOpen(false)} className="hover:bg-muted w-full flex justify-center items-center rounded-md">
              <DarkButton />
            </p>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
