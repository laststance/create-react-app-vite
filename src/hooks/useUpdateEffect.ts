import { useRef, useEffect } from 'react'
/**
 * Simulate componentDidUpdate() method of Class Component
 * https://reactjs.org/docs/react-component.html#componentdidupdate
 */
const useUpdateEffect = (
  effect: AnyFunction,
  deps: any[] | undefined = undefined,
): void => {
  const mounted = useRef<boolean>(false)
  useEffect(() => {
    if (!mounted.current) {
      // fire componentDidMount
      mounted.current = true
    } else {
      effect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- intentional: deps are passed dynamically to simulate componentDidUpdate
  }, deps)
}

export default useUpdateEffect
