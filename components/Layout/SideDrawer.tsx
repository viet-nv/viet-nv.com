import React from 'react'
import cx from 'classnames'
import Link from 'next/link'
import { Routes } from 'types/routes'
import { useRouter } from 'next/router'

type Props = {
  show: boolean
  toggleSideDrawer: () => void
}

const SideDrawer: React.FC<Props> = ({ show, toggleSideDrawer }: Props) => {
  const { pathname } = useRouter()

  const navClass = 'text-gray-700 hover:text-black'
  const activeClass = 'font-bold text-black'

  return (
    <div
      className={cx(
        'fixed top-0 left-0 bg-white h-screen shadow transition-transform duration-300 z-50',
        {
          'transform -translate-x-full': !show,
          'transform -transform-x-0': show,
        }
      )}
      style={{ width: '300px' }}
    >
      <div className="h-16 flex justify-between items-center border-b px-4 ">
        <img src="/assets/logo.png" alt="Logo" className="h-5" />

        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1.5rem"
          width="1.5rem"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleSideDrawer}
          className="cursor-pointer"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>

      <div className="pt-12 px-4">
        {Object.keys(Routes).map((route) => {
          const path = (Routes as any)[route]
          return (
            <Link href={path} key={route}>
              <a
                className={path === pathname ? activeClass : navClass}
                onClick={toggleSideDrawer}
              >
                <div className="pb-8">{route}</div>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SideDrawer
