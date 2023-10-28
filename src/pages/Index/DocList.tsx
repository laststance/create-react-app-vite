import fetch from 'cross-fetch'
import React, { memo, use } from 'react'

import styles from './DocList.module.css'
interface Props {}

const DocList: React.FC<Props> = memo(() => {
  const docList: DocList = use(
    fetch('http://localhost:3000/api/doclist').then(async (res) => res.json()),
  )

  return (
    <>
      <section className={styles.documentList}>
        {docList.map((doc, i) => (
          <a key={i} className={styles.button} href={doc.url} target="_blank">
            {doc.name}
          </a>
        ))}
      </section>
    </>
  )
})
DocList.displayName = 'DocList'

export default DocList
