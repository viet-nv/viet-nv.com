import React from 'react'
import styles from './SectionTitle.module.scss'

export type SectionTitleProps = {
  title: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
}: SectionTitleProps) => {
  return <div className={styles.title}>{title}</div>
}

export default SectionTitle
