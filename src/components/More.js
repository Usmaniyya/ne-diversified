import React from 'react'
import { motion } from 'framer-motion'

const More = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: 'linear',
        duration: 0.7,
        x: { duration: 1 },
      }}
      className="pt-20 pb-10 lg:pt-[120px] lg:pb-20 lg:px-24 px-8"
      id="team"
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="block mb-2 text-lg font-semibold text-secondary">
                Why NE Diversified?
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Know Us More
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 w-full">
            <Card
              title="Technical Know How"
              text="Our people are our strongest asset. We have a team of experienced staff and highly qualified technical staff that provides top-notch support to our customers."
            />
            <Card
              title="Fostering Relationships"
              text="We understand thst business relations are the foundation of success, and that's why our priority is to build strong lasting relations with our customers.'"
            />
            <Card
              title="Solution Providers"
              text="We enable our customers to maximize the utilization of their available tools. Through our expertise with use cases, and familiarity with evolving trends, we are able to customize our client's solutions."
            />
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default More

const Card = ({ title, text }) => {
  return (
    <div className="col-span-1 flex flex-col lg:p-6 p-4 text-center shadow border-l-2 border-solid border-secondary">
      <h3 className="text-xl  mb-4 text-secondary font-semibold">{title}</h3>
      <p className="text-dark text-[14px]">{text}</p>
    </div>
  )
}
