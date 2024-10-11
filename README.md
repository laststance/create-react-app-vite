# Create React App Vite [![Typecheck](https://github.com/laststance/create-react-app-vite/actions/workflows/typecheck.yml/badge.svg)](https://github.com/laststance/vite-react-ts-alter/actions/workflows/typecheck.yml) [![Test](https://github.com/laststance/create-react-app-vite/actions/workflows/test.yml/badge.svg)](https://github.com/laststance/create-react-app-vite/actions/workflows/test.yml) [![Build](https://github.com/laststance/create-react-app-vite/actions/workflows/build.yml/badge.svg)](https://github.com/laststance/create-react-app-vite/actions/workflows/build.yml) [![Lint](https://github.com/laststance/create-react-app-vite/actions/workflows/lint.yml/badge.svg)](https://github.com/laststance/create-react-app-vite/actions/workflows/lint.yml)

> Simple CRA style Vite teimpate.  
> Create plain and lightweight React+TS programming environment.  
> And a easy migration base for create-react-app to Vite.

## [Try this Online!](https://codesandbox.io/p/github/laststance/create-react-app-vite/main?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522clfgsr6q10016g2hjg3xq06lt%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522spaces%2522%253A%257B%2522clfgsra1u000x3b6mbdjl3ahb%2522%253A%257B%2522key%2522%253A%2522clfgsra1u000x3b6mbdjl3ahb%2522%252C%2522name%2522%253A%2522Default%2522%252C%2522devtools%2522%253A%255B%257B%2522key%2522%253A%2522clfgsra1u000y3b6meoz3zcev%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522key%2522%253A%2522clfgss4o700dz3b6mz869sru3%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522key%2522%253A%2522clfgss3ug00ba3b6mpaataz0k%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D%257D%252C%2522currentSpace%2522%253A%2522clfgsra1u000x3b6mbdjl3ahb%2522%252C%2522spacesOrder%2522%253A%255B%2522clfgsra1u000x3b6mbdjl3ahb%2522%255D%252C%2522hideCodeEditor%2522%253Afalse%257D)

This is a Vite template top of the official [Vite](https://vitejs.dev/) [react-ts](https://stackblitz.com/edit/vitejs-vite-is3dmk?file=index.html&terminal=dev) template(`npm init vite@latest myapp -- --template react-ts`) and some extended setup.  
I'd like to keep CRA like experience as much as possible, So improving/adding feature Rull Request is really welcome!

- Support CRA's [Custom Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/) like `REACT_APP_`.
- [eslint-config-ts-prefixer](https://github.com/laststance/eslint-config-ts-prefixer). Specialized fixable(`--fix` option) rule sets. Zero extend any recommended for confortable DX.
- [Vitest](https://vitest.dev/), [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/), [MSW](https://mswjs.io/)
- [tailwindcss](https://tailwindcss.com/)
- [Github Actions](https://github.com/features/actions)

All npm package are keeping least release version powered by [Dependabot](https://github.com/dependabot).

# Installation

```
npx degit laststance/create-react-app-vite myapp
```

### pnpm

```sh
cd myapp
pnpm install
pnpm validate
pnpm start
```

If you don't need TailwindCSS, run `pnpm remove:tailwind` after npm installed.

### Commands

```sh
pnpm dev             # start development server
pnpm start           # start development server
pnpm validate        # run test,lint,build,typecheck concurrently
pnpm test            # run jest
pnpm lint            # run eslint
pnpm lint:fix        # run eslint with --fix option
pnpm typecheck       # run TypeScript compiler check
pnpm build           # build production bundle to 'dist' directly
pnpm prettier        # run prettier for json|yml|css|md|mdx files
pnpm clean           # remove 'node_modules' 'yarn.lock' 'dist' completely
pnpm serve           # launch server for production bundle in local
pnpm remove:tailwind # remove TailwindCSS
```

# CRA to Vite migration guides

- [Migrate to Vite from Create React App (CRA)](https://www.robinwieruch.de/vite-create-react-app/)
- [Migrating from Create React App (CRA) to Vite](https://cathalmacdonnacha.com/migrating-from-create-react-app-cra-to-vite)
- [Migrating a Create React App (CRA) application to Vite](https://www.darraghoriordan.com/2021/05/16/migrating-from-create-react-app-to-vite)

# Background

Simply put, CRA development has stopped as of 2023.
This has sparked a discussion about replacing CRA with Vite for official documentation recommendations.
[Replace Create React App recommendation with Vite](https://github.com/reactjs/react.dev/pull/5487)
Dan Abramov offered some plans for the future of the CRA in his comments, but no direct answers were given.
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
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://ryota-murakami.github.io/"><img src="https://avatars1.githubusercontent.com/u/5501268?s=400&u=7bf6b1580b95930980af2588ef0057f3e9ec1ff8&v=4?s=100" width="100px;" alt="ryota-murakami"/><br /><sub><b>ryota-murakami</b></sub></a><br /><a href="https://github.com/laststance/create-react-app-vite/commits?author=ryota-murakami" title="Code">💻</a> <a href="https://github.com/laststance/create-react-app-vite/commits?author=ryota-murakami" title="Documentation">📖</a> <a href="https://github.com/laststance/create-react-app-vite/commits?author=ryota-murakami" title="Tests">⚠️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://hung.dev"><img src="https://avatars.githubusercontent.com/u/8603085?v=4?s=100" width="100px;" alt="Hung Viet Nguyen"/><br /><sub><b>Hung Viet Nguyen</b></sub></a><br /><a href="https://github.com/laststance/create-react-app-vite/commits?author=nvh95" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/shayc"><img src="https://avatars.githubusercontent.com/u/6969966?v=4?s=100" width="100px;" alt="Shay Cojocaru"/><br /><sub><b>Shay Cojocaru</b></sub></a><br /><a href="https://github.com/laststance/create-react-app-vite/commits?author=shayc" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/NateAGeek"><img src="https://avatars.githubusercontent.com/u/1813055?v=4?s=100" width="100px;" alt="NateAGeek"/><br /><sub><b>NateAGeek</b></sub></a><br /><a href="https://github.com/laststance/create-react-app-vite/issues?q=author%3ANateAGeek" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
