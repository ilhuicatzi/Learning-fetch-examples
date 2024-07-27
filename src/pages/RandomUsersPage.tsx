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
      <div className="flex justify-center sm:justify-between md:items-end sm:flex-row flex-col sm:w-3/4 mb-10">
        <h1 className="text-center flex-1 text-4xl text-sky-500 font-medium">
          Random Users
        </h1>
        <div className="flex justify-end px-4">
        <Button
          size="sm"
          variant="flat"
          onClick={() => navigate("/random-users/code")}
        >
          Ver código
        </Button>
        </div>
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
