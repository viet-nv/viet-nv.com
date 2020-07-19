import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Meta from 'components/Meta'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
