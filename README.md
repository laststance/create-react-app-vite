# vite-react-ts-extended [![Typecheck](https://github.com/laststance/vite-react-ts-extended/actions/workflows/typecheck.yml/badge.svg)](https://github.com/laststance/vite-react-ts-extended/actions/workflows/typecheck.yml) [![Test](https://github.com/laststance/vite-react-ts-extended/actions/workflows/test.yml/badge.svg)](https://github.com/laststance/vite-react-ts-extended/actions/workflows/test.yml) [![Build](https://github.com/laststance/vite-react-ts-extended/actions/workflows/build.yml/badge.svg)](https://github.com/laststance/vite-react-ts-extended/actions/workflows/build.yml) [![Lint](https://github.com/laststance/vite-react-ts-extended/actions/workflows/lint.yml/badge.svg)](https://github.com/laststance/vite-react-ts-extended/actions/workflows/lint.yml) [![Depfu](https://badges.depfu.com/badges/6c7775918ccc8647160750e168617a65/overview.svg)](https://depfu.com/github/laststance/vite-react-ts-extended?project_id=32682)

> My CRA alternative.  
> Create plain and lightweight React+TS programming environment with familiar pre-setup tooling  
> eslint/prettier, jest/TS/react-testing-library/msw, tailwindcss, CI.

## [Trying this Online!](https://codesandbox.io/s/vite-react-ts-extended-cbgyfz?file=/src/App.tsx)

<img src="https://digital3.nyc3.cdn.digitaloceanspaces.com/ext.png" />

This is the official [Vite](https://vitejs.dev/) template(`npm init vite@latest myapp -- --template react-ts`) and some extended setup.

- [eslint-typescript](https://github.com/typescript-eslint/typescript-eslint) and [Prettier](https://prettier.io/) integration. Rules are 100% my personal setup 💅
- [jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library), [MSW](https://mswjs.io/)
- [tailwindcss](https://tailwindcss.com/)
- [Github Actions](https://github.com/features/actions)

All npm package are keeping least release version powered by [Depfu](https://depfu.com/).

# Installation

```
npx degit laststance/vite-react-ts-extended myapp
```

### yarn

```sh
cd myapp
yarn install
yarn validate # The installation was successful if no error occurs after running 'validate'.
yarn dev
```

### npm

```sh
cd myapp
npm install
npm run validate # The installation was successful if no error occurs after running 'validate'.
npm run dev
```

### Commands

```sh
yarn dev       # start development server
yarn validate  # run test,lint,build,typecheck concurrently
yarn test      # run jest
yarn lint      # run eslint
yarn lint:fix  # run eslint with --fix option
yarn typecheck # run TypeScript compiler check
yarn build     # build production bundle to 'dist' directly
yarn prettier  # run prettier for json|yml|css|md|mdx files
yarn clean     # remove 'node_modules' 'yarn.lock' 'dist' completely
yarn serve     # launch server for production bundle in local
```


# Background

The evolution of the React framework is accelerating more than ever before.  
[Next.js](https://nextjs.org/), [Remix](https://remix.run/), [RedwoodJS](https://redwoodjs.com/), [Gatsby](https://www.gatsbyjs.com/), [Blitz](https://blitzjs.com/) etc...

Ahthough I still need plain React programming starter some reason. (.e.g Demo, Experiment like Deep Dive React Core.)  
So far, [create-react-app](https://github.com/facebook/create-react-app) **was** it.  
In short, [create-react-app](https://github.com/facebook/create-react-app) development couldn't say active. Please read the [Issue](https://github.com/facebook/create-react-app/issues/11180) in details.

So I created an alternative to [create-react-app](https://github.com/facebook/create-react-app) for myself, based on [Vite](https://github.com/facebook/create-react-app).  
This project contains my very opinionted setup,  
but I hope it will be a useful tool for people who have similar needs to mine! 😀

# License

MIT

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

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

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
