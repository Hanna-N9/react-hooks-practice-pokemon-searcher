import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(setPokemons);
  }, []);

  const displayPokemonName = pokemons.filter(poke =>
    poke.name.toLowerCase().startsWith(search.toLowerCase()),
  );

  function handleAddPokemon(newPokemon) {
    setPokemons([...pokemons, newPokemon]);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search search={search} onSearchChange={setSearch} />
      <br />
      <PokemonCollection pokemons={displayPokemonName} />
    </Container>
  );
}

export default PokemonPage;
