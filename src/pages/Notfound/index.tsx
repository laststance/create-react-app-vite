import React, { memo } from 'react'

import styles from './index.module.css'

const Notfound: React.FC = memo(() => (
  <div className={styles.container}>
    <h1 className={styles.h1}>404: Page Not Found</h1>
  </div>
))
Notfound.displayName = 'Notfound'

export default Notfound
