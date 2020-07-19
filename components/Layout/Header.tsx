import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Routes } from 'types/routes'
import cx from 'classnames'
import { useRouter } from 'next/router'
import Container from 'components/Container'

const Header: React.FC = () => {
  const { pathname } = useRouter()

  const [showShadow, setShowShadow] = useState(false)

  const navClass = 'text-gray-700 hover:text-black p-4'
  const activeClass = 'font-medium text-black p-4'

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (!showShadow && window.scrollY > 50) setShowShadow(true)
      else setShowShadow(false)
    })
    return () =>
      window.removeEventListener('scroll', () => {
        //
      })
  }, [])

  return (
    <div className={cx('sticky top-0 bg-white', { shadow: showShadow })}>
      <Container className="flex justify-between items-center h-12 sm:h-16 md:h-20">
        <div className="block md:hidden cursor-pointer p-3">
          <svg
            className="fill-current w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </div>

        <Link href="/">
          <a>
            <img src="/assets/logo.png" alt="Logo" className="h-5 sm:h-6" />
          </a>
        </Link>

        <div className="flex items-center">
          <div className="hidden md:flex mr-4">
            {Object.keys(Routes).map((route) => {
              const path = (Routes as any)[route]
              return (
                <Link href={path} key={route}>
                  <a className={path === pathname ? activeClass : navClass}>
                    {route}
                  </a>
                </Link>
              )
            })}
          </div>

          <div className="p-3 cursor-pointer">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="23px"
              width="23px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M443.5 420.2L336.7 312.4c20.9-26.2 33.5-59.4 33.5-95.5 0-84.5-68.5-153-153.1-153S64 132.5 64 217s68.5 153 153.1 153c36.6 0 70.1-12.8 96.5-34.2l106.1 107.1c3.2 3.4 7.6 5.1 11.9 5.1 4.1 0 8.2-1.5 11.3-4.5 6.6-6.3 6.8-16.7.6-23.3zm-226.4-83.1c-32.1 0-62.3-12.5-85-35.2-22.7-22.7-35.2-52.9-35.2-84.9 0-32.1 12.5-62.3 35.2-84.9 22.7-22.7 52.9-35.2 85-35.2s62.3 12.5 85 35.2c22.7 22.7 35.2 52.9 35.2 84.9 0 32.1-12.5 62.3-35.2 84.9-22.7 22.7-52.9 35.2-85 35.2z"></path>
            </svg>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
