const url = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonByItsname = async (name) => {
  try {
    const response = await fetch(url + name)
    const json = await response.json();
    return json;
  } catch (error) {
    alert("Not Found!")
    console.error(error)
  }
}

const fetchPokemonsAll = async _ => {

  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Failure fetching: " + error);
  }
}

const fetchPokemonsById = async (id) => {

  try {
    const response = await fetch(url + id);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Failure fetching: " + error);
  }
};

export {
  fetchPokemonsById,
  fetchPokemonsAll,
  getPokemonByItsname
}

