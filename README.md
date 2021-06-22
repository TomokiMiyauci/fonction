<p align="center">
  <img alt="logo image" src="docs/public/icon.gif"  />
  <h1 align="center">fonction</h1>
</p>

<p align="center">
 A modern practical functional library
</p>

<div align="center">

[![test](https://github.com/TomokiMiyauci/fonction/actions/workflows/test.yml/badge.svg)](https://github.com/TomokiMiyauci/fonction/actions/workflows/test.yml)
[![GitHub release](https://img.shields.io/github/release/TomokiMiyauci/fonction.svg)](https://github.com/TomokiMiyauci/fonction/releases)
[![deno land](http://img.shields.io/badge/available%20on-deno.land/x-lightgrey.svg?logo=deno&labelColor=black)](https://deno.land/x/fonction)
[![nest badge](https://nest.land/badge.svg)](https://nest.land/package/fonction)
[![deno version](https://img.shields.io/badge/deno-^1.6.0-lightgrey?logo=deno)](https://github.com/denoland/deno)
![node support version](https://img.shields.io/badge/node-%5E14.16.0-yellow)
![bundle size](https://img.shields.io/bundlephobia/min/fonction)
![npm download](https://img.shields.io/npm/dw/fonction?color=blue)

[![dependencies Status](https://status.david-dm.org/gh/TomokiMiyauci/fonction.svg)](https://david-dm.org/TomokiMiyauci/fonction)
[![codecov](https://codecov.io/gh/TomokiMiyauci/fonction/branch/main/graph/badge.svg?token=SPAi5Pv2wd)](https://codecov.io/gh/TomokiMiyauci/fonction)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/f43b1c317e11445399d85ce6efc06504)](https://www.codacy.com/gh/TomokiMiyauci/fonction/dashboard?utm_source=github.com&utm_medium=referral&utm_content=TomokiMiyauci/fonction&utm_campaign=Badge_Grade)
![npm type definitions](https://img.shields.io/npm/types/arithmetic4)
![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)
![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat)
![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B26231%2Fgithub.com%2FTomokiMiyauci%2Ffonction.svg?type=small)](https://app.fossa.com/projects/custom%2B26231%2Fgithub.com%2FTomokiMiyauci%2Ffonction?ref=badge_small)

</div>

---

## :sparkles: Features

- :green_heart: Friendly type definition
- :earth_americas: Universal functions providing ESM and UMD
- :package: Optimized, super slim size
- :page_facing_up: TSDoc-style comments
- :1234: Bigint support
- 🦕 Deno support

Fonction (French word for "function", not typo:sweat_smile:) is modern practical functional library.
Special attention is paid to bundle size and strict type definitions. Therefore, you can take out and use only what you want to use without worrying about the size.

## :memo: Docs

[Read the Docs to Learn More.](https://tomokimiyauci.github.io/fonction/)

## :green_heart: Supports

The TypeScript version must be `4.1.0` or higher.

This project provide `ES modules` and `UMD`. The range supported by both is different.

### ES modules

Limit support to the latest environment to reduce the bundle size.

| <img width="30px" height="30px" alt="Deno" src="https://res.cloudinary.com/dz3vsv9pg/image/upload/v1620998361/logos/deno.svg"></br>Deno | <img width="24px" height="24px" alt="Node.js" src="https://res.cloudinary.com/dz3vsv9pg/image/upload/v1620998361/logos/nodejs.svg"></br>Node.js | <img width="24px" height="24px" alt="IE / Edge" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png"></br>Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /></br>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /></br>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /></br>Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" /></br>iOS Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" /></br>Samsung | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" /></br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| ^1.6.0                                                                                                                                  | ^14.16.0                                                                                                                                        | last version                                                                                                                                         | last version                                                                                                                                                  | last version                                                                                                                                              | last version                                                                                                                                              | last version                                                                                                                                                              | last version                                                                                                                                                                    | last version                                                                                                                                          |

### UMD

Browser is supporting since IE11.

| <img width="24px" height="24px" alt="Node.js" src="https://res.cloudinary.com/dz3vsv9pg/image/upload/v1620998361/logos/nodejs.svg"></br>Node.js | <img width="24px" height="24px" alt="IE / Edge" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png"></br>IE / Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /></br>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /></br>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /></br>Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" /></br>iOS Safari | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" /></br>Samsung | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" /></br>Opera |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| ^6.17.0                                                                                                                                         | IE11 / ^16                                                                                                                                                | ^60                                                                                                                                                           | ^61                                                                                                                                                       | ^10.1                                                                                                                                                     | ^10.3                                                                                                                                                                     | ^8.2                                                                                                                                                                            | ^48                                                                                                                                                   |

Compared to `ES modules`, `UMD` has a bundle size increase of about 2.5x. Recommend using `ES modules` as much as possible.

## :dizzy: Usage

`fonction` provides multi platform modules.

You can see all the functions [here](https://tomokimiyauci.github.io/fonction/api/).

### 🦕 Deno

#### deno.land

```ts
import { add } from 'https://deno.land/x/fonction/mod.ts'

add(1, 2) // 3
```

#### nest.land

```ts
import { add } from 'https://x.nest.land/fonction@1.5.0/mod.ts'

add(1, 2) // 3
```

### :package: Node.js

#### Install

```bash
npm i fonction
or
yarn add fonction
```

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

### :globe_with_meridians: CDN

#### ESM

```html
<script type="module">
  import { add } from 'https://unpkg.com/fonction?module'
  console.log(add(1, 2)) // 3
</script>
```

#### UMD

> The global object is `F`.

```html
<script src="https://unpkg.com/fonction"></script>

<script>
  console.log(F.add(1, 2)) // 3
</script>
```

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
import { _ } from 'https://deno.land/x/fonction@VERSION/mod.ts'
```

`@VERSION` format is like `v1.5.0-beta.1`.

## :handshake: Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues](https://github.com/TomokiMiyauci/fonction/issues).

## :seedling: Show your support

Give a ⭐️ if this project helped you!

<a href="https://www.patreon.com/tomoki_miyauci">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## :bulb: License

Copyright © 2021-present [TomokiMiyauci](https://github.com/TomokiMiyauci).

Released under the [MIT](./LICENSE) license

[![FOSSA Status](https://app.fossa.com/api/projects/custom%2B26231%2Fgithub.com%2FTomokiMiyauci%2Ffonction.svg?type=large)](https://app.fossa.com/projects/custom%2B26231%2Fgithub.com%2FTomokiMiyauci%2Ffonction?ref=badge_large)
