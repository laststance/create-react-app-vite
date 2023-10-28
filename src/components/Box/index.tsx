import React, { memo } from 'react'
import type { PropsWithChildren } from 'react'

import styles from './index.module.css'

const Box: React.FC<PropsWithChildren> = memo(({ children, ...rest }) => {
  return (
    <div className={styles.box} {...rest}>
      {children}
    </div>
  )
})
Box.displayName = 'Box'

export default Box
