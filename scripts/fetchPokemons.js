const buttonGetPokemons = document.querySelector(
  ".pokedex-container-bottom-green"
);
const url = "https://pokeapi.co/api/v2/pokemon/1";
const pokeGotFromApi = [];
const fetchPokemons = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Failure fetching: " + error);
  }
};

buttonGetPokemons.addEventListener("click", () => {
  fetchPokemons().then((pokemons) =>
    pokeGotFromApi.push(pokemons.sprites.other.dream_world.front_default)
  );
  console.log(pokeGotFromApi);
});

{
  /* < img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" style="object-fit: cover;width: 120px;"> */
}
