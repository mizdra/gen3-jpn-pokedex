# gen3-jpn-pokedex
Node.jsで作られた日本語ポケモン図鑑のクラスです。


## インストール
```bash
$ npm install @mizdra/gen3-jpn-pokedex
```

```js
// ES5 import
var pokedex = require('@mizdra/gen3-jpn-pokedex');

// ES6 import
import pokedex from '@mizdra/gen3-jpn-pokedex';

let poke = pokedex.filter(poke => poke.nationalId === 1);
console.log(poke[0].name); // => 'フシギダネ'
```


## ビルド
```bash
$ git clone https://github.com/mizdra/gen3-jpn-pokedex.git
$ cd gen3-jpn-pokedex
$ npm install -g  mocha gulp dtsm
$ npm install
$ dtsm install
$ gulp
```

### テスト
```bash
$ npm test
```

# 依存モジュール
- [@mizdra/gen3-poke-data](https://github.com/mizdra/gen3-poke-data)
