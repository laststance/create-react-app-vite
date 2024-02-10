import type { Dispatch, SetStateAction } from 'react'

declare global {
  type _ = any

  // @see https://youtu.be/QSIXYMIJkQg?si=CyycYgaAGNZCEuYj&t=188
  type TODO = any

  type AnyFunction = (...args: any[]) => any

  type URLType = `http${'s' | ''}://${string}.${string}`

  // https://stackoverflow.com/a/69288824/8440230
  type Expand<T> = T extends (...args: infer A) => infer R
    ? (...args: Expand<A>) => Expand<R>
    : T extends infer O
      ? { [K in keyof O]: O[K] }
      : never

  type ExpandRecursively<T> = T extends (...args: infer A) => infer R
    ? (...args: ExpandRecursively<A>) => ExpandRecursively<R>
    : T extends object
      ? T extends infer O
        ? { [K in keyof O]: ExpandRecursively<O[K]> }
        : never
      : T
}

declare module 'react' {
  type SetState<S> = Dispatch<SetStateAction<S>>
}
