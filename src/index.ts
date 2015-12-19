/// <reference path='../typings/bundle.d.ts'/>

import {PokeData} from '@mizdra/gen3-poke-data';
const json: any[] = require('./pokedex.json');

const pokedex = json.map(d => new PokeData(d));
export default pokedex;
