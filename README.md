# vite-react-ts-extended [*![*Typecheck*](https://github.com/laststance/vite-react-ts-extended/actions/workflows/typecheck.yml/badge.svg)*](https://github.com/laststance/vite-react-ts-extended/actions/workflows/typecheck.yml) [*![*Test*](https://github.com/laststance/vite-react-ts-extended/actions/workflows/test.yml/badge.svg)*](https://github.com/laststance/vite-react-ts-extended/actions/workflows/test.yml) [*![*Build*](https://github.com/laststance/vite-react-ts-extended/actions/workflows/build.yml/badge.svg)*](https://github.com/laststance/vite-react-ts-extended/actions/workflows/build.yml) [*![*Lint*](https://github.com/laststance/vite-react-ts-extended/actions/workflows/lint.yml/badge.svg)*](https://github.com/laststance/vite-react-ts-extended/actions/workflows/lint.yml) [*![*Depfu*](https://badges.depfu.com/badges/6c7775918ccc8647160750e168617a65/overview.svg)*](https://depfu.com/github/laststance/vite-react-ts-extended?project_id=32682)

> My CRA alternative.  
> Create plain and lightweight React+TS programming environment with familiar pre-setup tooling  
> `eslint/prettier`, `jest/TS/react-testing-library/msw`, `unocss`, CI.

## [_Trying this online!_](https://stackblitz.com/github/laststance/vite-react-ts-extended?file=src%2FApp.tsx)

!(https://digital3.nyc3.cdn.digitaloceanspaces.com/ext.png)

This is the official [_Vite_](https://vitejs.dev/) template(`npm init vite@latest myapp -- --template react-ts`) and some extended setup.

-   [_eslint-typescript_](https://github.com/typescript-eslint/typescript-eslint) and [_Prettier_](https://prettier.io/) integration. Rules are 100% my personal setup 💅
-   [_jest_](https://jestjs.io/), [_React Testing Library_](https://testing-library.com/docs/react-testing-library/intro/), [_react-hooks-testing-library_](https://github.com/testing-library/react-hooks-testing-library), [_MSW_](https://mswjs.io/)
-   [_unocss_](https://unocss.antfu.me/)
-   [_Github Actions_](https://github.com/features/actions)

All npm package are keeping least release version powered by [_Depfu_](https://depfu.com/).

# Installation

```
npx degit laststance/vite-react-ts-extended myapp
cd myapp
npm install
npm run dev
```

# Background

The evolution of the React framework is accelerating more than ever before.  
[_Next.js_](https://nextjs.org/), [_Remix_](https://remix.run/), [_RedwoodJS_](https://redwoodjs.com/), [_Gatsby_](https://www.gatsbyjs.com/), [_Blitz_](https://blitzjs.com/) etc...

Ahthough I still need plain React programming starter some reason. (.e.g Demo, Experiment like Deep Dive React Core.)  
So far, [_create-react-app_](https://github.com/facebook/create-react-app) **was** it.  
In short, [_create-react-app_](https://github.com/facebook/create-react-app) development couldn't say active. Please read the [_Issue_](https://github.com/facebook/create-react-app/issues/11180) in details.

So I created an alternative to [_create-react-app_](https://github.com/facebook/create-react-app) for myself, based on [_Vite_](https://github.com/facebook/create-react-app).  
This project contains my very opinionted setup,  
but I hope it will be a useful tool for people who have similar needs to mine! 😀

# License

MIT

## Contributors ✨

Thanks goes to these wonderful people ([_emoji key_](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
    <tr>
        <td align="center"><a href="http://ryota-murakami.github.io/"><img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4?s=100" width="100px;" alt=""/><br /><sub><b>ryota-murakami</b></sub></a><br /><a href="https://github.com/laststance/vite-react-ts-extended/laststance/vite-react-ts-extended/commits?author=ryota-murakami" title="Code">💻</a> <a href="https://github.com/laststance/vite-react-ts-extended/laststance/vite-react-ts-extended/commits?author=ryota-murakami" title="Documentation">📖</a> <a href="https://github.com/laststance/vite-react-ts-extended/laststance/vite-react-ts-extended/commits?author=ryota-murakami" title="Tests">⚠️</a></td>
    </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [_all-contributors_](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
