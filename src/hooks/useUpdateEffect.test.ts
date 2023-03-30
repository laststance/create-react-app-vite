import { renderHook } from '@testing-library/react'

import useUpdateEffect from './useUpdateEffect'

test('useUpdateEffect simulates componentDidUpdate', () => {
  const effect = vi.fn()
  const { rerender } = renderHook(() => useUpdateEffect(effect))

  expect(effect).toHaveBeenCalledTimes(0)
  rerender()
  expect(effect).toHaveBeenCalledTimes(1)
  rerender()
  expect(effect).toHaveBeenCalledTimes(2)
  rerender()
  expect(effect).toHaveBeenCalledTimes(3)
})
