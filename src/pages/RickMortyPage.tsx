/* eslint-disable @typescript-eslint/no-unused-vars */
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
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
      `https://rickandmortyapi.com/api/character?page=${pageParam}`
    );
    const data = await response.json();
    const maxPages = 10;
    return {
      characters: data.results,
      nextCursor:
        data.info.next && pageParam < maxPages ? pageParam + 1 : undefined,
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
      <div className="flex justify-center my-10 sm:justify-between lg:items-end md:flex-row flex-col sm:w-3/4 pb-10">
        <h1 className="text-center flex-1 text-5xl text-green-500 font-medium">
          Rick & Morty Api
        </h1>
        <div className="flex justify-end px-4">
          <Button
            size="sm"
            variant="flat"
            onClick={() => navigate("/rick-morty/code")}
          >
            Ver código
          </Button>
        </div>
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
