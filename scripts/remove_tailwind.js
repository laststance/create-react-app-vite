#!/usr/bin/env node

import { execSync } from 'node:child_process'
import { existsSync, readFileSync, unlinkSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const packageJson = JSON.parse(
  readFileSync(path.join(rootDir, 'package.json'), 'utf8'),
)
const dependencies = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies,
}
const tailwindPackages = Object.keys(dependencies).filter((name) =>
  name.includes('tailwind'),
)

for (const packageName of tailwindPackages) {
  if (!/^(?:@[a-z0-9][a-z0-9._-]*\/)?[a-z0-9][a-z0-9._-]*$/.test(packageName)) {
    throw new Error(`Invalid package name in package.json: ${packageName}`)
  }
}

function removeCssBlock(css, rule) {
  let start = css.indexOf(rule)
  if (start === -1) return css

  if (rule === '@layer base') {
    const commentStart = css.lastIndexOf('/*', start)
    const commentEnd = css.indexOf('*/', commentStart)
    if (
      commentStart !== -1 &&
      commentEnd !== -1 &&
      css.slice(commentEnd + 2, start).trim() === ''
    ) {
      start = commentStart
    }
  }

  const openingBrace = css.indexOf('{', start)
  if (openingBrace === -1) {
    throw new Error(`Could not parse ${rule} in src/global.css`)
  }

  let depth = 0
  for (let index = openingBrace; index < css.length; index += 1) {
    if (css[index] === '{') depth += 1
    if (css[index] === '}') depth -= 1
    if (depth === 0) {
      return css.slice(0, start) + css.slice(index + 1)
    }
  }

  throw new Error(`Could not parse ${rule} in src/global.css`)
}

const globalCssPath = path.join(rootDir, 'src/global.css')
let globalCss = existsSync(globalCssPath)
  ? readFileSync(globalCssPath, 'utf8')
  : undefined
if (globalCss !== undefined) {
  globalCss = globalCss
    .replace(/^@import\s+['"]tailwindcss['"];\s*/m, '')
    .replace(/^@plugin\s+['"]@tailwindcss\/[^'"]+['"];\s*/gm, '')
  globalCss = removeCssBlock(globalCss, '@theme')
  globalCss = removeCssBlock(globalCss, '@layer base')

  if (
    /@(?:import\s+['"]tailwindcss|plugin\s+['"]@tailwindcss|theme\b|layer\s+base)/.test(
      globalCss,
    )
  ) {
    throw new Error(
      'Remove remaining Tailwind directives from src/global.css manually.',
    )
  }
}

const postcssConfigPath = path.join(rootDir, 'postcss.config.js')
let removePostcssConfig = false
if (existsSync(postcssConfigPath)) {
  const postcssConfig = readFileSync(postcssConfigPath, 'utf8')
  if (postcssConfig.includes('@tailwindcss/postcss')) {
    const normalizedConfig = postcssConfig.replace(/\s+/g, '')
    const isTailwindOnlyConfig = [
      "exportdefault{plugins:{'@tailwindcss/postcss':{},},}",
      'exportdefault{plugins:{"@tailwindcss/postcss":{},},}',
      "exportdefault{plugins:{'@tailwindcss/postcss':{}}}",
      'exportdefault{plugins:{"@tailwindcss/postcss":{}}}',
    ].includes(normalizedConfig)

    if (!isTailwindOnlyConfig) {
      throw new Error(
        'Remove the Tailwind plugin from postcss.config.js manually before continuing.',
      )
    }
    removePostcssConfig = true
  }
}

if (tailwindPackages.length > 0) {
  const packageManager = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
  execSync(`${packageManager} remove ${tailwindPackages.join(' ')}`, {
    cwd: rootDir,
    stdio: 'inherit',
  })
} else {
  console.log('TailwindCSS dependencies have already been removed.')
}

if (globalCss !== undefined) {
  writeFileSync(globalCssPath, globalCss)
}

for (const configPath of [
  path.join(rootDir, 'tailwind.config.js'),
  ...(removePostcssConfig ? [postcssConfigPath] : []),
]) {
  try {
    unlinkSync(configPath)
  } catch (error) {
    if (error.code !== 'ENOENT') throw error
  }
}

console.log('Completed TailwindCSS removal.')
