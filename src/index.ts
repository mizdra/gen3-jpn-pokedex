/// <reference path='../typings/node/node.d.ts'/>

'use strict';

import {PokeData, JSONSchema} from '@mizdra/gen3-poke-data';
const json: JSONSchema[] = require('./pokedex.json');

const pokedex = json.map(d => new PokeData(d));
export default pokedex;
