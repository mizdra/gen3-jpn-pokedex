import PokeData from '@mizdra/gen3-poke-data';
const json = require('./pokedex.json');

const pokedex = json.map(d => new PokeData(d));
export default pokedex;
