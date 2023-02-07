# Create React App Alter [![Typecheck](https://github.com/laststance/create-react-app-alter/actions/workflows/typecheck.yml/badge.svg)](https://github.com/laststance/vite-react-ts-alter/actions/workflows/typecheck.yml) [![Test](https://github.com/laststance/create-react-app-alter/actions/workflows/test.yml/badge.svg)](https://github.com/laststance/create-react-app-alter/actions/workflows/test.yml) [![Build](https://github.com/laststance/create-react-app-alter/actions/workflows/build.yml/badge.svg)](https://github.com/laststance/create-react-app-alter/actions/workflows/build.yml) [![Lint](https://github.com/laststance/create-react-app-alter/actions/workflows/lint.yml/badge.svg)](https://github.com/laststance/create-react-app-alter/actions/workflows/lint.yml) [![Depfu](https://badges.depfu.com/badges/6c7775918ccc8647160750e168617a65/overview.svg)](https://depfu.com/github/laststance/create-react-app-alter?project_id=32682)

> My CRA alternative by Vite.  
> Create plain and lightweight React+TS programming environment with familiar pre-setup tooling  
> eslint/prettier, jest/TS/react-testing-library/msw, tailwindcss, CI.

## [Try this Online!](https://codesandbox.io/p/github/laststance/create-react-app-alter/main?file=%2Fsrc%2FApp.tsx&workspace=%257B%2522activeFileId%2522%253A%2522cldtstevg000rfthj6pib6s3c%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522cldtstq6700153b6km3j01jht%2522%253A%257B%2522key%2522%253A%2522cldtstq6700153b6km3j01jht%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522cldtstq6800163b6kywxlxk3l%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522cldtsua90007d3b6k4npjfl4m%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522cldtsu8jm005c3b6kschnif68%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522cldtstq6700153b6km3j01jht%2522%252C%2522spacesOrder%2522%253A%255B%2522cldtstq6700153b6km3j01jht%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)

<a href="https://codesandbox.io/p/github/laststance/create-react-app-alter/main?file=%2Fsrc%2FApp.tsx&workspace=%257B%2522activeFileId%2522%253A%2522cldtstevg000rfthj6pib6s3c%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522cldtstq6700153b6km3j01jht%2522%253A%257B%2522key%2522%253A%2522cldtstq6700153b6km3j01jht%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522cldtstq6800163b6kywxlxk3l%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522cldtsua90007d3b6k4npjfl4m%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522cldtsu8jm005c3b6kschnif68%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522cldtstq6700153b6km3j01jht%2522%252C%2522spacesOrder%2522%253A%255B%2522cldtstq6700153b6km3j01jht%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D"><img src="https://digital3.nyc3.cdn.digitaloceanspaces.com/ext.png" /></a>

This is a Vite template top of the official [Vite](https://vitejs.dev/) [react-ts](https://stackblitz.com/edit/vitejs-vite-is3dmk?file=index.html&terminal=dev) template(`npm init vite@latest myapp -- --template react-ts`) and some extended setup.  
I'd like to keep CRA like experience as much as possible, So improving/adding feature Rull Request is really welcome!

- [eslint-typescript](https://github.com/typescript-eslint/typescript-eslint) and [Prettier](https://prettier.io/) integration. Rules are 100% my personal setup 💅
- [Jest](https://jestjs.io/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [MSW](https://mswjs.io/)
- [tailwindcss](https://tailwindcss.com/)
- [Github Actions](https://github.com/features/actions)

All npm package are keeping least release version powered by [Depfu](https://depfu.com/).

# Installation

```
npx degit laststance/create-react-app-alter myapp
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
    <td align="center"><a href="http://ryota-murakami.github.io/"><img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4?s=100" width="100px;" alt=""/><br /><sub><b>ryota-murakami</b></sub></a><br /><a href="https://github.com/laststance/create-react-app-alter/commits?author=ryota-murakami" title="Code">💻</a> <a href="https://github.com/laststance/create-react-app-alter/commits?author=ryota-murakami" title="Documentation">📖</a> <a href="https://github.com/laststance/create-react-app-alter/commits?author=ryota-murakami" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://hung.dev"><img src="https://avatars.githubusercontent.com/u/8603085?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hung Viet Nguyen</b></sub></a><br /><a href="https://github.com/laststance/create-react-app-alter/commits?author=nvh95" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
