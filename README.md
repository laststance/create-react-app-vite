# Create React App Vite [![Typecheck](https://github.com/laststance/create-react-app-vite/actions/workflows/typecheck.yml/badge.svg)](https://github.com/laststance/vite-react-ts-alter/actions/workflows/typecheck.yml) [![Test](https://github.com/laststance/create-react-app-vite/actions/workflows/test.yml/badge.svg)](https://github.com/laststance/create-react-app-vite/actions/workflows/test.yml) [![Build](https://github.com/laststance/create-react-app-vite/actions/workflows/build.yml/badge.svg)](https://github.com/laststance/create-react-app-vite/actions/workflows/build.yml) [![Lint](https://github.com/laststance/create-react-app-vite/actions/workflows/lint.yml/badge.svg)](https://github.com/laststance/create-react-app-vite/actions/workflows/lint.yml)

> Simple CRA style Vite teimpate.  
> Create plain and lightweight React+TS programming environment.  
> And a easy migration base for create-react-app to Vite.

## [Try this Online!](https://codesandbox.io/p/github/laststance/create-react-app-vite/main?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfgsr6q10016g2hjg3xq06lt%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfgsra1u000x3b6mbdjl3ahb%2522%253A%257B%2522key%2522%253A%2522clfgsra1u000x3b6mbdjl3ahb%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfgsra1u000y3b6meoz3zcev%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522clfgss4o700dz3b6mz869sru3%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522clfgss3ug00ba3b6mpaataz0k%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfgsra1u000x3b6mbdjl3ahb%2522%252C%2522spacesOrder%2522%253A%255B%2522clfgsra1u000x3b6mbdjl3ahb%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)

<a href="https://codesandbox.io/p/github/laststance/create-react-app-vite/main?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfgsr6q10016g2hjg3xq06lt%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfgsra1u000x3b6mbdjl3ahb%2522%253A%257B%2522key%2522%253A%2522clfgsra1u000x3b6mbdjl3ahb%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfgsra1u000y3b6meoz3zcev%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522clfgss4o700dz3b6mz869sru3%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522clfgss3ug00ba3b6mpaataz0k%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfgsra1u000x3b6mbdjl3ahb%2522%252C%2522spacesOrder%2522%253A%255B%2522clfgsra1u000x3b6mbdjl3ahb%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D"><img src="https://digital3.nyc3.cdn.digitaloceanspaces.com/ext.png" /></a>

This is a Vite template top of the official [Vite](https://vitejs.dev/) [react-ts](https://stackblitz.com/edit/vitejs-vite-is3dmk?file=index.html&terminal=dev) template(`npm init vite@latest myapp -- --template react-ts`) and some extended setup.  
I'd like to keep CRA like experience as much as possible, So improving/adding feature Rull Request is really welcome!

- Support CRA's [Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/) like `REACT_APP_`.
- [eslint-typescript](https://github.com/typescript-eslint/typescript-eslint) and [Prettier](https://prettier.io/) integration. Rules are 100% my personal setup 💅
- [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [MSW](https://mswjs.io/)
- [tailwindcss](https://tailwindcss.com/)
- [Github Actions](https://github.com/features/actions)

All npm package are keeping least release version powered by [Renovate](https://docs.renovatebot.com/modules/manager/npm/).

# Installation

```
npx degit laststance/create-react-app-vite myapp
```

### npm

```sh
cd myapp
npm install
npm run validate
npm start
```

If you don't need TailwindCSS, run `npm run remove:tailwind` after npm installed.

### Commands

```sh
npm run dev             # start development server
npm run start           # start development server
npm run validate        # run test,lint,build,typecheck concurrently
npm run test            # run jest
npm run lint            # run eslint
npm run lint:fix        # run eslint with --fix option
npm run typecheck       # run TypeScript compiler check
npm run build           # build production bundle to 'dist' directly
npm run prettier        # run prettier for json|yml|css|md|mdx files
npm run clean           # remove 'node_modules' 'yarn.lock' 'dist' completely
npm run serve           # launch server for production bundle in local
npm run remove:tailwind # remove TailwindCSS
```

# CRA to Vite migration guide
- [Migrate to Vite from Create React App (CRA)](https://www.robinwieruch.de/vite-create-react-app/)


# Background

Simply put, CRA development has stopped as of 2023.
This has sparked a discussion about replacing CRA with Vite for official documentation recommendations.
[Replace Create React App recommendation with Vite](https://github.com/reactjs/react.dev/pull/5487)
Dan Avramov offered some plans for the future of the CRA in his comments, but no direct answers were given.
https://github.com/reactjs/react.dev/pull/5487#issuecomment-1409720741

 The React community is still buzzing around Server Component after May 2023, but there is still a high demand for the React SinglePageAplication starter that the CRA has served in the past, and I was one of the people who needed it, I was one of the people who needed it, so I decided to create a template in Vite that could be used as much as possible like CRA.




# License

MIT

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://ryota-murakami.github.io/"><img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4?s=100" width="100px;" alt=""/><br /><sub><b>ryota-murakami</b></sub></a><br /><a href="https://github.com/laststance/create-react-app-vite/commits?author=ryota-murakami" title="Code">💻</a> <a href="https://github.com/laststance/create-react-app-vite/commits?author=ryota-murakami" title="Documentation">📖</a> <a href="https://github.com/laststance/create-react-app-vite/commits?author=ryota-murakami" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://hung.dev"><img src="https://avatars.githubusercontent.com/u/8603085?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hung Viet Nguyen</b></sub></a><br /><a href="https://github.com/laststance/create-react-app-vite/commits?author=nvh95" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
