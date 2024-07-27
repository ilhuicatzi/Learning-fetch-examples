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

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

interface DrinkInfo {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  [key: string]: string;
}

function CocktailPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [drinkInfo, setDrinkInfo] = useState<DrinkInfo[]>([]);
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
        setDrinks(result.drinks);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const fetchDrinkInfo = async (id: string) => {
    setLoadingInfo(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setDrinkInfo(result.drinks);
      onOpen(); // Abrir el modal después de cargar la información
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingInfo(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <CircularProgress aria-label="Loading..." />
      </div>
    );
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <main className="flex justify-start items-center flex-col mt-10">
      <div className="flex justify-center sm:justify-between items-end sm:flex-row flex-col sm:w-3/4 mb-10">
        <h1 className="flex-1 text-center text-5xl font-bold text-yellow-500">
          Cocktails
        </h1>
        <Button
          size="sm"
          variant="flat"
          onClick={() => navigate("/cocktail/code")}
        >
          Ver código
        </Button>
      </div>
      <section>
        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 m-5 place-items-center">
          {drinks.map((drink: Drink) => (
            <Card key={drink.idDrink} isFooterBlurred radius="lg" className="border-none">
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
                  onPress={() => fetchDrinkInfo(drink.idDrink)}
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
                  Información de la Bebida
                </ModalHeader>
                <ModalBody>
                  {loadingInfo ? (
                    <div className="flex justify-center items-center">
                      <CircularProgress aria-label="Loading..." />
                    </div>
                  ) : (
                    drinkInfo.map((drink: DrinkInfo) => (
                      <div key={drink.idDrink} className="flex flex-col items-center gap-2">
                        <Image
                          isBlurred
                          src={drink.strDrinkThumb}
                          alt={drink.strDrink}
                          width={200}
                          height={250}
                          className="object-cover"
                        />
                        <p className="text-lg font-bold">{drink.strDrink}</p>
                        <p className="text-sm text-center">{drink.strInstructions}</p>
                        <p className="text-sm font-bold">Ingredients</p>
                        <ul>
                          {Object.keys(drink)
                            .filter((key) => key.includes("strIngredient") && drink[key])
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
