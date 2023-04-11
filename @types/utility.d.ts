import type { Dispatch, SetStateAction } from 'react'

declare global {
  type AnyFunction = (...args: any[]) => any
}

declare module 'react' {
  type SetState<S> = Dispatch<SetStateAction<S>>
}
