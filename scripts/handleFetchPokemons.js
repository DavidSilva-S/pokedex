const url = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonByItsName = async (name) => {
  try {
    const response = await fetch(url + name.toLowerCase())
    const json = await response.json();
    return json;
  } catch (error) {
    alert("Not Found!")
    console.error("ERROR:" + error)
  }
}

const getPokemonById = async (id) => {
  try {
    const response = await fetch(url + id);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Failure fetching: " + error);
  }
};

export {
  getPokemonById,
  getPokemonByItsName
}

