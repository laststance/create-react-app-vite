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