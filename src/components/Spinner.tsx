import clsx from 'clsx'
import React from 'react'

import styles from './Spinner.module.css'

const sizes = {
  lg: styles.lg,
  md: styles.md,
  sm: styles.sm,
  xl: styles.xl,
}

const variants = {
  light: styles.light,
  primary: styles.primary,
}

export type SpinnerProps = {
  className?: string
  size?: keyof typeof sizes
  variant?: keyof typeof variants
}

const Spinner: React.FC<SpinnerProps> = ({
  className = '',
  size = 'md',
  variant = 'primary',
}: SpinnerProps) => {
  return (
    <>
      <svg
        className={clsx(
          styles.spinner,
          sizes[size],
          variants[variant],
          className,
        )}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        data-testid="loading"
      >
        <circle
          className={styles.circle}
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className={styles.path}
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span className={styles.srOnly}>Loading</span>
    </>
  )
}

Spinner.displayName = 'Spinner'

export default Spinner
