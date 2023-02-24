import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Box,
  Button,
  Center,
  Container,
  SimpleGrid,
  Spinner,
  Text,
  // Text,
} from "@chakra-ui/react";
import Character from "./Character";
import { filterCharacters } from "./utils/filterCharacter";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import FormFilters from "./FormFilters";

function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ error: "" });
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Fetching data from the API
  async function fetchPeopleWars() {
    setLoading(true);
    const response = await fetch(`https://swapi.dev/api/people/?page=1`);
    const data = await response.json();
    if (data) {
      setLoading(false);
    }
    setPeople(data);
  }

  //paginacion next
  const handleNext = async () => {
    try {
      const urlNext = people && people.next;
      console.log("next", urlNext);
      setLoading(true);
      const response = await fetch(urlNext);
      const data = await response.json();
      if (data) {
        setLoading(false);
      }
      setPeople(data);
    } catch (error) {
      setError(error);
    }
  };
  //paginacion prev
  const handlePrev = async () => {
    try {
      const urlPrev = people && people.previous;
      console.log("next", urlPrev);
      setLoading(true);
      const response = await fetch(urlPrev);
      const data = await response.json();
      if (data) {
        setLoading(false);
      }
      setPeople(data);
    } catch (error) {
      setError(error);
    }
  };

  // Fetching data from the API on component mount
  useEffect(() => {
    try {
      fetchPeopleWars();
    } catch (error) {
      setError(error);
    }
  }, []);

  // Get the id from the url
  function getId(url) {
    return url.split("/")[url.split("/").length - 2];
  }

  // Handle the filter change
  function handleFilterChange(event) {
    setSelectedFilter(event.target.value);
  }

  // Handle the search input change
  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  // Handle the sort order change
  function handleSortAsc() {
    setSortOrder("asc");
  }

  // Handle the sort order change
  function handleSortDesc() {
    setSortOrder("desc");
  }

  // Filter the characters
  const filteredCharacters = filterCharacters(
    people.results,
    selectedFilter,
    searchTerm,
    sortOrder
  );

  return (
    <Box w={"100vw"} backgroundColor="#000000">
      <Container maxW="container.xl" h={"100vh"}>
        <FormFilters
          selectedFilter={selectedFilter}
          handleFilterChange={handleFilterChange}
          searchTerm={searchTerm}
          handleSearch={handleSearch}
          handleSortAsc={handleSortAsc}
          handleSortDesc={handleSortDesc}
        />
        <Center>
          <SimpleGrid
            columns={{ base: 1, sm: 1, md: 3, lg: 4, xl: 5 }}
            spacing={"90px"}
          >
            {!loading ? (
              filteredCharacters?.map((person) => {
                return (
                  <>
                    <Box w="100%" key={person.url}>
                      <Character character={person} getId={getId} />
                    </Box>
                  </>
                );
              })
            ) : (
              <Spinner color="#FFEE58" size="xl" />
            )}
            {filterCharacters?.length === 0 ||
              (error.error && (
                <Text color="#FFEE58" fontSize="2xl">
                  No results found
                </Text>
              ))}
          </SimpleGrid>
        </Center>
        <Box
          display={loading ? "none" : "flex"}
          justifyContent="flex-end"
          pt="2%"
        >
          <Button
            onClick={handlePrev}
            isDisabled={people?.next?.includes("2")}
            mr="5px"
          >
            <ArrowBackIcon />
          </Button>
          <Button onClick={handleNext}>
            <ArrowForwardIcon />
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
