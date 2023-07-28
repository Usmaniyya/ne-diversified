'use client'
import { motion } from 'framer-motion'
import Header from '@/components/Header'
import Service from '@/components/Services'
import About from '@/components/About'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import More from '@/components/More'

export default function Home() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { ease: 'linear' },
        layout: { duration: 2 },
      }}
    >
      <Header />
      <About />
      <Service />
      <More />
      <Contact />
      <Footer />
    </motion.div>
  )
}
