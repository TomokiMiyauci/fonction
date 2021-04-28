<div align="center">

![logo image](docs/public/icon.gif)
![npm version](https://img.shields.io/npm/v/fonction.svg?style=flat)
![bundle size](https://img.shields.io/bundlephobia/min/fonction)
![npm download](https://img.shields.io/npm/dw/fonction?color=blue)
[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno&labelColor=black)](https://deno.land/x/fonction)
[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/fonction)
[![dependencies Status](https://status.david-dm.org/gh/TomokiMiyauci/fonction.svg)](https://david-dm.org/TomokiMiyauci/fonction)
[![codecov](https://codecov.io/gh/TomokiMiyauci/fonction/branch/main/graph/badge.svg?token=SPAi5Pv2wd)](https://codecov.io/gh/TomokiMiyauci/fonction)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/f43b1c317e11445399d85ce6efc06504)](https://www.codacy.com/gh/TomokiMiyauci/fonction/dashboard?utm_source=github.com&utm_medium=referral&utm_content=TomokiMiyauci/fonction&utm_campaign=Badge_Grade)
![npm type definitions](https://img.shields.io/npm/types/arithmetic4)
![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat)
![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)

</div>

# fonction

> A modern practical functional library

## :sparkles: Feature

- :green_heart: Friendly type definition
- :earth_americas: Universal functions providing ESM and UMD
- :package: Optimized, super slim size
- :page_facing_up: TSDoc-style comments
- :1234: Bigint support
- 🦕 Deno support

Fonction (French word for "function", not typo:sweat_smile:) is modern practical functional library.
Special attention is paid to bundle size and strict type definitions. Therefore, you can take out and use only what you want to use without worrying about the size.

## 📝 Docs

[Read the Docs to Learn More.](https://tomokimiyauci.github.io/fonction/)

## :truck: Install

```bash
npm i fonction
or
yarn add fonction
```

## :dizzy: Usage

`fonction` provides multi platform modules.

### 🦕 Deno

<details>
<summary>Click to toggle contents of `code` </summary>

#### deno.land

```ts
import { add } from 'https://deno.land/x/fonction@v1.3.0/mod.ts'

add(1, 2) // 3
```

#### nest.land

```ts
import { add } from 'https://x.nest.land/fonction@1.3.0/mod.ts'

add(1, 2) // 3
```

</details>

### :package: NPM

<details>
<summary>Click to toggle contents of `code` </summary>

#### ESM

```ts
import { add } from 'fonction'

add(1, 2) // 3
```

#### UMD

```ts
const { add } = require('fonction')

add(1, 2) // 3
```

</details>

### :globe_with_meridians: CDN

<details>
<summary>Click to toggle contents of `code` </summary>

#### ESM

```html
<script type="module">
  import { add } from 'https://unpkg.com/fonction?module'
  console.log(add(1, 2)) // 3
</script>
```

#### UMD

```html
<script src="https://unpkg.com/fonction"></script>

<script>
  console.log(F.add(1, 2)) // 3
</script>
```

</details>

## :world_map: Loadmap

For the time being, my goal is to implement the functions implemented in the great starting projects ([lodash](https://github.com/lodash/lodash), [ramda](https://github.com/ramda/ramda), [rambda](https://github.com/ramda/ramda), ... etc).

The release will be a public release when it is fully tested in the `beta` release and then merged into the main branch.

You can check the implementation status of all functions [here](https://tomokimiyauci.github.io/fonction/api/).

You can also try all the features including the `beta` version with the following command or URL.

```bash
npm i fonction@beta
or
yarn add fonction@beta
```

```ts
// deno.land
import {} from 'https://deno.land/x/fonction@v1.3.0-beta.x/mod.ts'
```

## :bulb: License

[MIT](./LICENSE)
