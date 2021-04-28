---
head:
  - - link
    - rel: canonical
      href: https://tomokimiyauci.github.io/fonction/guide/
  - - link
    - rel: alternate
      hreflang: en
      href: https://tomokimiyauci.github.io/fonction/guide/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://tomokimiyauci.github.io/fonction/guide/
---

## :seedling: Release Notes

Latest version: ![npm](https://img.shields.io/npm/v/fonction?color=blue)

Detailed release notes for each version are available on [GitHub](https://github.com/TomokiMiyauci/fonction/blob/main/CHANGELOG.md).

## :rocket: Getting Started

### CDN

`fonction` provides UMD and ESM.  
For prototyping and learning purposes, the latest version is available as follows:

#### UMD

```html
<script src="https://unpkg.com/fonction"></script>

<script>
  console.log(F.add(1, 2)) //=> 3
</script>
```

#### ESM

```html
<script type="module">
  import { add } from 'https://unpkg.com/fonction?module'
  console.log(add(1, 2)) //=> 3
</script>
```

### NPM

with Yarn

```bash
yarn add -D fonction
```

with NPM

```bash
npm i -D fonction
```
