import React from 'react'
import type { PropsWithChildren } from 'react'

import styles from './index.module.css'

const Box: React.FC<PropsWithChildren> = ({ children, ...rest }) => {
  return (
    <div className={styles.box} {...rest}>
      {children}
    </div>
  )
}

export default Box
