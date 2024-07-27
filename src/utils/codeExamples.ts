export const CocktailCode = `
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { CircularProgress } from "@nextui-org/progress";
import { useNavigate } from "react-router-dom";

interface Drinks {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface InfoDrink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  [key: string]: string;
}

function CocktailPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [data, setData] = useState<Drinks[]>([]);
  const [infoDrink, setInfoDrink] = useState([]);
  const [loadingInfo, setLoadingInfo] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        const { drinks } = result;
        setData(drinks);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const onClickInfo = async (id: string) => {
    setLoadingInfo(true);
    try {
      const response = await fetch(
        \`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=\${id}\`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      const { drinks } = result;
      setInfoDrink(drinks);
    } catch (error) {
      console.log(error);
    }
    setLoadingInfo(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <main className="flex justify-start items-center flex-col mt-10">
      <div className="flex justify-center sm:justify-between items-end sm:flex-row flex-col sm:w-3/4 mb-10">
        <h1 className=" flex-1 text-center text-5xl font-bold text-yellow-500">Cocteles</h1>
        <Button size="sm" variant="flat" onClick={()=> navigate("/cocktail/codepage")}>
          Ver código
        </Button>
      </div>
      <section>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 m-5 place-items-center">
          {data.map((drink: Drinks) => (
            <Card
              key={drink.idDrink}
              isFooterBlurred
              radius="lg"
              className="border-none"
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  width={200}
                  height={250}
                  className="object-cover"
                />
              </CardBody>
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 px-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny font-medium text-white/80">
                  {drink.strDrink}
                </p>
                <Button
                  onPress={onOpen}
                  onClick={() => onClickInfo(drink.idDrink)}
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  Info
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col text-center gap-1">
                  Informacion de la Bebida{" "}
                </ModalHeader>
                <ModalBody>
                  {loadingInfo ? (
                    <div className="flex justify-center items-center">
                      <CircularProgress aria-label="Loading..." />
                    </div>
                  ) : (
                    infoDrink.map((drink: InfoDrink) => (
                      <div
                        key={drink.idDrink}
                        className="flex flex-col items-center gap-2"
                      >
                        <Image
                          isBlurred
                          src={drink.strDrinkThumb}
                          alt={drink.strDrink}
                          width={200}
                          height={250}
                          className="object-cover"
                        />
                        <p className="text-lg font-bold">{drink.strDrink}</p>
                        <p className="text-sm text-center">
                          {drink.strInstructions}
                        </p>
                        <p className="text-sm font-bold">Ingredients</p>
                        <ul>
                          {Object.keys(drink)
                            .filter(
                              (key) =>
                                key.includes("strIngredient") && drink[key]
                            )
                            .map((key) => (
                              <li key={key}>{drink[key]}</li>
                            ))}
                        </ul>
                      </div>
                    ))
                  )}
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </section>
    </main>
  );
}

export default CocktailPage;
`

export const RandomUsersCode = `
import { useState, useEffect, useRef, useMemo } from "react";
import {
  Avatar,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Input,
  CircularProgress,
  Pagination,
} from "@nextui-org/react";
import { type Users } from "@/types/usersRandom";
import { useNavigate } from "react-router-dom";

function RandomUsersPage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<Users[]>([]);
  const [loading, setLoading] = useState(false);
  const [striped, srtStriped] = useState(false);
  const [sortByContry, setSortByContry] = useState(false);
  const [filterCountry, setFilterCountry] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const originalUsers = useRef<Users[]>([]);

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?seed=zao&results=20&page=" + currentPage
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data.results);
        originalUsers.current = data.results;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [currentPage]);

  // Filter users by country
  const filterUsers = useMemo(() => {
    return filterCountry
      ? users.filter((user) =>
          user.location.country
            .toLowerCase()
            .includes(filterCountry.toLowerCase())
        )
      : users;
  }, [users, filterCountry]);

  // Sort users by country
  const sortedUsers = useMemo(() => {
    return sortByContry
      ? filterUsers.toSorted((a, b) =>
          a.location.country.localeCompare(b.location.country)
        )
      : filterUsers;
  }, [filterUsers, sortByContry]);

  // Update users
  const handleReset = () => {
    setUsers(originalUsers.current);
  };

  // Sort by country
  const handleSortByCountry = () => {
    setSortByContry(!sortByContry);
  };

  // Delete user
  const handleDelete = (uuid: string) => {
    const filterUsers = users.filter((users) => users.login.uuid !== uuid);
    setUsers(filterUsers);
  };

  return (
    <main className="container">
      <div className="flex justify-center sm:justify-between items-end sm:flex-row flex-col sm:w-3/4 mb-10">
        <h1 className="text-center text-4xl text-sky-500 font-medium my-10">
          Random Users
        </h1>
        <Button
          size="sm"
          variant="flat"
          onClick={() => navigate("/random-users/code")}
        >
          Ver código
        </Button>
      </div>

      <header>
        <div className="flex justify-center items-center mb-5 gap-4">
          <Button
            color="primary"
            variant="light"
            className="mr-4"
            onClick={() => srtStriped(!striped)}
          >
            striped
          </Button>
          <Button color="warning" variant="light" onClick={handleSortByCountry}>
            {sortByContry ? "No ordenar por país " : "Ordenar por país"}
          </Button>
          <Button color="success" variant="light" onClick={handleReset}>
            Reset
          </Button>
          <Input
            size="sm"
            label="Filtrar por país"
            onChange={(e) => setFilterCountry(e.target.value)}
            className="w-52"
          />
        </div>
      </header>
      {loading ? (
        <div className="flex justify-center items-center">
          <CircularProgress aria-label="Loading..." />
        </div>
      ) : (
        <section className="flex justify-center flex-col gap-y-4 items-center md:px-20 px-4">
          <Table
            isStriped={striped}
            aria-label="Random users"
            className="max-w-4xl"
          >
            <TableHeader>
              <TableColumn>FOTO</TableColumn>
              <TableColumn>NOMBRE</TableColumn>
              <TableColumn>APELLIDO</TableColumn>
              <TableColumn>PAÍS</TableColumn>
              <TableColumn>ACCIONES</TableColumn>
            </TableHeader>
            <TableBody>
              {sortedUsers.map((user: Users) => (
                <TableRow key={user.login.uuid}>
                  <TableCell>
                    <Avatar
                      src={user.picture.thumbnail}
                      alt={user.name.first}
                    />
                  </TableCell>
                  <TableCell>{user.name.first}</TableCell>
                  <TableCell>{user.name.last}</TableCell>
                  <TableCell>{user.location.country}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      color="danger"
                      variant="faded"
                      onClick={() => {
                        handleDelete(user.login.uuid);
                      }}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Pagination
            showControls
            total={10}
            initialPage={1}
            page={currentPage}
            onChange={(page) => setCurrentPage(page)}
          />
        </section>
      )}
    </main>
  );
}

export default RandomUsersPage;
`

export const RickMortyCode = `
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useInfiniteQuery } from "@tanstack/react-query";
import {useEffect } from "react";
import { type Character } from "../types/RickMorty";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  CircularProgress,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

function RickMortyPage() {
  const fetchProjects = async ({ pageParam = 1 }) => {
    const response = await fetch(
      \`https://rickandmortyapi.com/api/character?page=\${pageParam}\`
    );
    const data = await response.json();
    const maxPages = 10;
    return {
      characters: data.results,
      nextCursor: data.info.next && pageParam < maxPages ? pageParam + 1 : undefined,
    };
  };
  const { ref, inView } = useInView();
  const navigate = useNavigate();
  const { data, error, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  console.log(data);
  const characters: Character[] =
    data?.pages.flatMap((page) => page.characters) || [];

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  if (error) return <p>Error: {error.message}</p>;
  return (
    <main className="container">
      <div className="flex justify-center my-10 sm:justify-between items-end sm:flex-row flex-col sm:w-3/4 pb-10">
        <h1 className="text-center flex-1 text-5xl text-green-500 font-medium">
          Random Users
        </h1>
        <Button
          size="sm"
          variant="flat"
          onClick={() => navigate("/random-users/code")}
        >
          Ver código
        </Button>
      </div>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <CircularProgress aria-label="Loading..." />
        </div>
      ) : (
        <section className="flex flex-col justify-center items-center">
          <article className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 m-5 place-items-center px-10">
            {characters?.map((character: Character) => (
              <Card key={character.id}>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={character.image}
                    width={180}
                  />
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <p className="text-tiny uppercase font-bold w-40 ">
                    {character.origin.name}
                  </p>
                  <small className="text-default-500">{character.status}</small>
                  <h4 className="font-bold text-large w-40">
                    {character.name}
                  </h4>
                </CardBody>
              </Card>
            ))}
          </article>
            <div ref={ref}></div>
        </section>
      )}
    </main>
  );
}

export default RickMortyPage;
`