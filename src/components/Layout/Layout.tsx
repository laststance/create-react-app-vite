import type { PropsWithChildren } from 'react'
import React, { memo } from 'react'

import styles from './Layout.module.css'

const Layout: React.FC<PropsWithChildren> = memo(({ children, ...rest }) => {
  return (
    <main className={styles.layout} {...rest}>
      <div className={styles.container}>{children}</div>
    </main>
  )
})
Layout.displayName = 'Layout'

export default Layout
