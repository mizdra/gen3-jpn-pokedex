'use asm';
import should from 'should';
import assert from 'assert';
import pokedex from '../dist';
import PokeData from '@mizdra/gen3-poke-data';
import {フシギダネ, ピカチュウ, ハピナス, デオキシス} from './test-object';

describe('pokedex', () => {

    let customPokedex = pokedex.filter(poke =>
        poke.name === フシギダネ.name
        || poke.name === ピカチュウ.name
        || poke.name === ハピナス.name
        || poke.name === デオキシス.name
    );

    it('filter', () => {
        let actual = customPokedex.filter(poke =>
            poke.name === フシギダネ.name
        );
        let expect = [フシギダネ];
        assert.deepEqual(actual, expect);
    });

    it('not filter', () => {
        let actual = customPokedex.filter(poke =>
            poke.name === ピカチュウ.name
        );
        let expect = [フシギダネ];
        assert.notDeepEqual(actual, expect);
    });

    it('複数に合致するfilter', () => {
        let actual = customPokedex.filter(poke =>
            poke.heldItems.rse.rarely !== null
        );
        let expect = [ピカチュウ, ハピナス];
        assert.deepEqual(actual, expect);
    });

    it('複雑なfilter1', () => {
        let actual = customPokedex.filter(poke =>
            poke.formName === null && poke.abilities.length === 1
        );
        let expect = [フシギダネ, ピカチュウ];
        assert.deepEqual(actual, expect);
    });

    it('複雑なfilter2', () => {
        let actual = customPokedex.filter(poke =>
            poke.height > 10
            && poke.weight > 10
            && poke.catchRate >10
        );
        let expect = [ハピナス];
        assert.deepEqual(actual, expect);
    });

    it('find', () => {
        let actual = customPokedex.find(poke =>
            poke.name === フシギダネ.name
        );
        let expect = フシギダネ;
        assert.deepEqual(actual, expect);
    });

    it('not find', () => {
        let actual = customPokedex.find(poke =>
            poke.name === ピカチュウ.name
        );
        let expect = フシギダネ;
        assert.notDeepEqual(actual, expect);
    });

    it('複数に合致するfind', () => {
        let actual = customPokedex.find(poke =>
            poke.heldItems.rse.rarely !== null
        );
        let expect = ピカチュウ;
        assert.deepEqual(actual, expect);
    });

    it('複雑なfilter', () => {
        let actual = customPokedex.find(poke =>
            poke.formName === null && poke.abilities.length === 1
        );
        let expect = フシギダネ;
        assert.deepEqual(actual, expect);
    });
});
