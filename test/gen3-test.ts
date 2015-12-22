import assert from 'power-assert';
import {フシギダネ, ピカチュウ, マダツボミ, ハピナス, セレビィ, デオキシス, デオキシス攻, デオキシス守, デオキシス速} from './sample-poke-data';
import pokedex from '../';
import {PokeData} from '@mizdra/gen3-poke-data';

describe('pokedex', () => {

    it('id', () => {
        let actual = pokedex.filter(p => p.id === 416);
        let expect = [デオキシス];
        assert.deepEqual(actual, expect);
    });

    it('nationalId', () => {
        let actual = pokedex.filter(p => p.nationalId === 386);
        let expect = [デオキシス, デオキシス攻, デオキシス守, デオキシス速];
        assert.deepEqual(actual, expect);
    });

    it('name', () => {
        let actual = pokedex.filter(p => p.name === 'フシギダネ');
        let expect = [フシギダネ];
        assert.deepEqual(actual, expect);
    });

    it('formName', () => {
        let actual = pokedex.filter(p => p.formName === 'ノーマルフォルム');
        let expect = [デオキシス];
        assert.deepEqual(actual, expect);
    });

    it('height', () => {
        let actual = pokedex.filter(
            p => p.height === 7 && p.types.includes('くさ')
        );
        let expect = [フシギダネ, マダツボミ];
        assert.deepEqual(actual, expect);
    });

    it('weight', () => {
        let actual = pokedex.filter(poke =>
            poke.weight === 608
        );
        let expect = [デオキシス, デオキシス攻, デオキシス守, デオキシス速];
        assert.deepEqual(actual, expect);
    });

    it('types', () => {
        let actual = pokedex.find(p => p.types.includes('でんき'));
        let expect = ピカチュウ;
        assert.deepEqual(actual, expect);
    });

    it('baseStats', () => {
        let actual = pokedex.filter(p =>
            p.baseStats[0] >= 200 && p.baseStats[1] >= 10
        );
        let expect = [フシギダネ];
        assert.deepEqual(actual, expect);
    });

    it('genderThreshold', () => {
        let actual = pokedex
            .filter(p => p.genderThreshold === 0)
            .map(p => p.name);
        let expect = [
            'ニドラン♂',
            'ニドリーノ',
            'ニドキング',
            'サワムラー',
            'エビワラー',
            'ケンタロス',
            'バルキー',
            'カポエラー',
            'バルビート',
            'ラティオス'
        ];
        assert.deepEqual(actual, expect);
    });

    it('catchRate', () => {
        let actual = pokedex
            .filter(p => p.catchRate === 3)
            .map(p => p.name);
        let expect = [
            'フリーザー',
            'サンダー',
            'ファイヤー',
            'ミュウツー',
            'ライコウ',
            'エンテイ',
            'スイクン',
            'ルギア',
            'ホウオウ',
            'ダンバル',
            'メタング',
            'メタグロス',
            'レジロック',
            'レジアイス',
            'レジスチル',
            'ラティアス',
            'ラティオス',
            'レックウザ',
            'ジラーチ',
            'デオキシス',
            'デオキシス',
            'デオキシス',
            'デオキシス'
        ];
        assert.deepEqual(actual, expect);
    });

    it('heldItems', () => {
        let actual = pokedex
            .filter(p => p.heldItems.frlg.rarely === 'りゅうのウロコ')
            .map(p => p.name);
        let expect = ['キングドラ', 'タツベイ', 'コモルー', 'ボーマンダ'];
        assert.deepEqual(actual, expect);
    });

    it('abilities', () => {
        let actual = pokedex
            .filter(p => p.abilities[0] === 'しぜんかいふく' && p.abilities[1] === 'てんのめぐみ')
            .map(p => p.name);
        let expect = ['ラッキー', 'ハピナス'];
        assert.deepEqual(actual, expect);
    });
});
