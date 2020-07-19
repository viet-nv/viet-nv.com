import React, { ReactNode } from 'react'

type Props = {
  className?: string
  children?: ReactNode
}

const Container: React.FC<Props> = ({ children, className = '' }: Props) => {
  return <div className={`container mx-auto px-5 ${className}`}>{children}</div>
}

export default Container
