import { execSync } from 'node:child_process'
import { readFileSync, unlinkSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

try {
  unlinkSync(path.join(rootDir, 'tailwind.config.js'))
  console.log('remove tailwind.config.js\n')
} catch (error) {
  if (error.code === 'ENOENT') {
    console.log('tailwind.config.js has already been removed.\n')
  } else {
    throw error
  }
}

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

if (tailwindPackages.length === 0) {
  console.log('TailwindCSS has already been removed.\n')
  process.exit(0)
}

for (const packageName of tailwindPackages) {
  if (!/^(?:@[a-z0-9][a-z0-9._-]*\/)?[a-z0-9][a-z0-9._-]*$/.test(packageName)) {
    throw new Error(`Invalid package name in package.json: ${packageName}`)
  }
}

const packageManager = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
execSync(`${packageManager} remove ${tailwindPackages.join(' ')}`, {
  cwd: rootDir,
  stdio: 'inherit',
})

console.log(tailwindPackages.join('\n'))
console.log('Above packages uninstall has been successful.\n')
console.log('Completed remove TailwindCSS.\n')
