import React, { useEffect, useState } from 'react'

import Spinner from '@/components/Spinner'

import styles from './DocList.module.css'
interface Props {}

const DocList: React.FC<Props> = () => {
  const [docList, setDocList] = useState<DocList>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    fetch('/api/doclist', { signal: controller.signal })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`)
        }

        return res.json()
      })
      .then((data: DocList) => setDocList(data))
      .catch(() => {
        if (!controller.signal.aborted) {
          setHasError(true)
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      })

    return (): void => controller.abort()
  }, [])

  return (
    <>
      <section className={styles.documentList}>
        {hasError ? (
          <p role="alert">Unable to load the document list.</p>
        ) : isLoading ? (
          <Spinner />
        ) : docList.length === 0 ? (
          <p>No documents available.</p>
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
