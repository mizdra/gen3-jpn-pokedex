'use asm';

import PokeData from '@mizdra/gen3-poke-data';
let json = require('./pokedex.json');

const pokedex = json.map(d => new PokeData(d));
export default pokedex;
