#!/usr/bin/env node
/* eslint-disable no-console */

const { execSync } = require('node:child_process')
const fs = require('node:fs')
const path = require('node:path')
const { chdir, exit } = require('node:process')

const rootDir = path.join(__dirname, '..')

function removeTailwind() {
  try {
    fs.unlinkSync(rootDir + '/postcss.config.js')
    console.log('remove postcss.config.js')
    fs.unlinkSync(rootDir + '/tailwind.config.js')
    console.log('remove tailwind.config.js')
  } catch (e) {
    if (e.message.includes('no such file or directory'))
      console.log(
        'postcss.config.js/tailwind.config.js has already been removed.'
      )
  }

  // npm unlinstall
  const packageJson = require(rootDir + '/package.json')

  const dependencies = packageJson.dependencies || {}
  const devDependencies = packageJson.devDependencies || {}

  const tailwindPackages = []

  for (const dep in dependencies) {
    if (dep.includes('tailwind')) {
      tailwindPackages.push(dep)
    }
  }

  for (const dep in devDependencies) {
    if (dep.includes('tailwind')) {
      tailwindPackages.push(dep)
    }
  }

  tailwindPackages.push('postcss')
  if (tailwindPackages.length === 1) {
    console.log('TailwindCSS has already been removed.\n')
    exit()
  }

  const uninstallCommand = 'npm uninstall ' + tailwindPackages.join(' ')

  chdir(rootDir)
  // execSync return null when command successful
  const res = execSync(uninstallCommand, {
    stdio: [0, 1, 2],
  })

  if (res !== null && res.status !== 0)
    console.error('Command Failed: ' + uninstallCommand)

  console.log(tailwindPackages.join('\n'))
  console.log('Above packages uninstall has been successful.')
  console.log()
  console.log('Completed remove TailwindCSS.')
}

// run
removeTailwind()
