import {
  Bezier,
  Electricity,
  FormatSquare,
  Data,
  SecuritySafe,
  Candle2,
} from 'iconsax-react'
import { motion } from 'framer-motion'
import Animated from './Animated'

const Service = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        ease: 'linear',
        duration: 0.7,
        x: { duration: 1 },
      }}
      className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] lg:px-24 px-8"
      id="services"
    >
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[550px] text-center lg:mb-20">
              <span className="block mb-2 text-xl font-semibold text-secondary">
                Services Overview
              </span>
              <Animated
                text="What We Offer"
                className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]"
              />
              <p className="text-base text-dark w-full">
                We are a single provider for managing and securing
                mission-critical IT services. Our technology solutions and
                implementation strategies are dynamic and tailor made to support
                our client’s current and future business goals.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <ServiceCard
            title="Computer Networking"
            details="NE Diversified is skilled in the evaluation, design, installation and support of
Local and Wide Area Networks."
            icon={<Bezier size="32" color="#ca8a04" />}
          />
          <ServiceCard
            title="Fiber Optic Services"
            details="We handle full Installation, Commissioning and Maintenance services on
                      fibre optic projects."
            icon={<Electricity size="32" color="#ca8a04" />}
          />
          <ServiceCard
            title="Solution Engineering"
            details="Entrust your company's network infrastructure development and support to
                    our professional, and experienced engineering team."
            icon={<FormatSquare size="32" color="#ca8a04" />}
          />
          <ServiceCard
            title="System Integration"
            details="Our professional engineering team can provide you with an optimal solution
                    for an integrated ICT system."
            icon={<Data size="32" color="#ca8a04" />}
          />
          <ServiceCard
            title="Security Solutions"
            details="With the information security boom, customers are faced with a huge
                      number of information security challenges."
            icon={<SecuritySafe size="32" color="#ca8a04" />}
          />
          <ServiceCard
            title="Cabling Services"
            details="The backbone of any communications system, whether voice or data, is the
                    cable plan."
            icon={<Candle2 size="32" color="#ca8a04" />}
          />
        </div>
      </div>
    </motion.section>
  )
}

export default Service

const ServiceCard = ({ icon, title, details }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="w-full px-4 md:w-1/2 lg:w-1/3"
    >
      <div className="mb-8 rounded-[20px] bg-light text-center p-8 shadow-md hover:shadow-lg md:px-7 xl:px-10 border border-solid border-secondary">
        <div
          className={`mb-8 flex h-[80px] w-[80px] p-2 items-center justify-center rounded-2xl bg-secondary bg-opacity-10`}
        >
          {icon}
        </div>
        <h4 className="mb-3 text-xl font-semibold text-secondary">{title}</h4>
        <p className="text-body-color">{details}</p>
      </div>
    </motion.div>
  )
}
