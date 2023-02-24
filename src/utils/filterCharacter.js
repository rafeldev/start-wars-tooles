export function filterCharacters(characters, filter, searchTerm, sortOrder) {
  let filteredCharacters = characters;
  if (searchTerm) {
    filteredCharacters = filteredCharacters.filter((character) =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  if (filter) {
    filteredCharacters = filteredCharacters?.filter(
      (character) => character.gender === filter
    );
  }
  if (sortOrder === "asc") {
    filteredCharacters = filteredCharacters?.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  } else if (sortOrder === "desc") {
    filteredCharacters = filteredCharacters?.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    filteredCharacters.reverse();
  }
  switch (filter) {
    default:
      return filteredCharacters;
  }
}
