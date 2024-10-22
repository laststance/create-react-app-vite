import React, { useEffect, useState } from 'react'

import Spinner from '@/components/Spinner'

import styles from './DocList.module.css'
interface Props {}

const DocList: React.FC<Props> = () => {
  const [docList, setDocList] = useState<DocList>([])

  useEffect(() => {
    fetch('/api/doclist')
      .then(async (res) => res.json())
      .then((data) => setDocList(data))
  }, [])

  return (
    <>
      <section className={styles.documentList}>
        {docList.length === 0 ? (
          <Spinner />
        ) : (
          docList.map((doc, i) => (
            <a key={i} className={styles.button} href={doc.url} target="_blank">
              {doc.name}
            </a>
          ))
        )}
      </section>
    </>
  )
}
DocList.displayName = 'DocList'

export default DocList
