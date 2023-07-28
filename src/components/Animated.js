import { motion } from 'framer-motion'

const qoute = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      staggerChildren: 0.08,
    },
  },
}

const Animated = ({ text, className = '' }) => {
  return (
    <motion.h1
      variants={qoute}
      animate="animate"
      initial="initial"
      className={`${className}`}
    >
      {text}
    </motion.h1>
  )
}

export default Animated
