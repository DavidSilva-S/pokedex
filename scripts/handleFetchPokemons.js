const url = "https://pokeapi.co/api/v2/pokemon/";


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
  fetchPokemonsAll
}

