import React, { useState } from 'react'
import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'

const handleScroll = (e) => {
  // first prevent the default behavior
  e.preventDefault()
  // get the href and remove everything before the hash (#)
  const href = e.currentTarget.href
  const targetId = href.replace(/.*\#/, '')
  // get the element by id and use scrollIntoView
  const elem = document.getElementById(targetId)
  window.scrollTo({
    top: elem?.getBoundingClientRect().top,
    behavior: 'smooth',
  })
}

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: 'linear',
        duration: 0.7,
        x: { duration: 1 },
      }}
      className="px-8 lg:px-24"
    >
      <Navbar />
      <div className="relative pt-[170px] pb-[60px] lg:pt-[200px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-5/12">
              <div className="hero-content">
                <AnimatedText
                  className="mb-3 lg:text-5xl text-3xl font-bold tracking-wider leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]"
                  text="Best IT Solution Company"
                />
                <p className="mb-6 max-w-[480px] text-lg text-dark tracking-wide">
                  We specialized in Computer Networking, Fibre Optic Services,
                  Network Auditing, Mikrotik Consulting & Deployment, Solution
                  Engineering and System Integration
                </p>
                <ul className="flex flex-wrap items-center">
                  <li>
                    <a
                      href="/#"
                      className="inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center text-light rounded-lg bg-secondary hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                    >
                      Read More
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                    alt="hero"
                    className="max-w-full lg:ml-auto"
                  />
                  <span className="absolute -left-8 -bottom-8 z-[-1]">
                    <svg
                      width="93"
                      height="93"
                      viewBox="0 0 93 93"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2.5" cy="2.5" r="2.5" fill="#CA8A04" />
                      <circle cx="2.5" cy="24.5" r="2.5" fill="#CA8A04" />
                      <circle cx="2.5" cy="46.5" r="2.5" fill="#CA8A04" />
                      <circle cx="2.5" cy="68.5" r="2.5" fill="#CA8A04" />
                      <circle cx="2.5" cy="90.5" r="2.5" fill="#CA8A04" />
                      <circle cx="24.5" cy="2.5" r="2.5" fill="#CA8A04" />
                      <circle cx="24.5" cy="24.5" r="2.5" fill="#CA8A04" />
                      <circle cx="24.5" cy="46.5" r="2.5" fill="#CA8A04" />
                      <circle cx="24.5" cy="68.5" r="2.5" fill="#CA8A04" />
                      <circle cx="24.5" cy="90.5" r="2.5" fill="#CA8A04" />
                      <circle cx="46.5" cy="2.5" r="2.5" fill="#CA8A04" />
                      <circle cx="46.5" cy="24.5" r="2.5" fill="#CA8A04" />
                      <circle cx="46.5" cy="46.5" r="2.5" fill="#CA8A04" />
                      <circle cx="46.5" cy="68.5" r="2.5" fill="#CA8A04" />
                      <circle cx="46.5" cy="90.5" r="2.5" fill="#CA8A04" />
                      <circle cx="68.5" cy="2.5" r="2.5" fill="#CA8A04" />
                      <circle cx="68.5" cy="24.5" r="2.5" fill="#CA8A04" />
                      <circle cx="68.5" cy="46.5" r="2.5" fill="#CA8A04" />
                      <circle cx="68.5" cy="68.5" r="2.5" fill="#CA8A04" />
                      <circle cx="68.5" cy="90.5" r="2.5" fill="#CA8A04" />
                      <circle cx="90.5" cy="2.5" r="2.5" fill="#CA8A04" />
                      <circle cx="90.5" cy="24.5" r="2.5" fill="#CA8A04" />
                      <circle cx="90.5" cy="46.5" r="2.5" fill="#CA8A04" />
                      <circle cx="90.5" cy="68.5" r="2.5" fill="#CA8A04" />
                      <circle cx="90.5" cy="90.5" r="2.5" fill="#CA8A04" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <header
      className={`absolute top-0 left-0 z-20 flex items-center w-full lg:px-24 px-8 py-4`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between -mx-4">
          <div className="max-w-full px-4 w-60">
            <a href="/#" className="block">
              <h1 className="text-secondary text-2xl tracking-wide font-bold">
                NE&nbsp;<span className="text-dark">Diversified</span>
              </h1>
            </a>
          </div>
          <div className="flex items-center justify-between w-full px-4">
            <div>
              <button
                // @click="navbarOpen = !navbarOpen"
                onClick={() => setOpen(!open)}
                // :className="navbarOpen && 'navbarTogglerActive' "
                id="navbarToggler"
                className={` ${
                  open && 'navbarTogglerActive'
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-secondary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-secondary"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-secondary"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-secondary"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg py-5 bg-light px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none ${
                  !open && 'hidden'
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem
                    navItemStyles="text-dark hover:text-secondary"
                    NavLink="/"
                  >
                    Home
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-secondary"
                    NavLink="#services"
                  >
                    Services
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-secondary"
                    NavLink="#about"
                  >
                    About
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-secondary"
                    NavLink="#contact"
                  >
                    Contact
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-secondary"
                    NavLink="#team"
                  >
                    Our Team
                  </ListItem>
                  <ListItem
                    navItemStyles="text-dark hover:text-secondary"
                    NavLink="#ne-diversified"
                  >
                    Why NE Diversified
                  </ListItem>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const ListItem = ({ children, navItemStyles, NavLink }) => {
  return (
    <li>
      <a
        href={NavLink}
        className={`flex py-2 text-base font-medium lg:ml-12 lg:inline-flex ${navItemStyles}`}
        onClick={handleScroll}
      >
        {children}
      </a>
    </li>
  )
}
