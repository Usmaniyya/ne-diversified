import React from 'react'
import { motion } from 'framer-motion'

const Team = () => {
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
                Our Team
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-base text-body-color">
                The talented people behind the scenes of the organization.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <TeamCard
            name="Coriss Ambady"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
          />
          <TeamCard
            name="Coriss Ambady"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
          />
          <TeamCard
            name="Coriss Ambady"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
          />
          <TeamCard
            name="Coriss Ambady"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
          />
        </div>
      </div>
    </motion.section>
  )
}

export default Team

const TeamCard = ({ imageSrc, name, profession }) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
      <div className="mx-auto mb-10 w-full max-w-[370px]">
        <div className="relative overflow-hidden rounded-lg">
          <img src={imageSrc} alt="" className="w-full" />
          <div className="absolute left-0 w-full text-center bottom-5">
            <div className="relative px-3 py-5 mx-5 overflow-hidden bg-light rounded-lg">
              <h3 className="text-base font-semibold text-secondary">{name}</h3>
              <p className="text-sm text-body-color">{profession}</p>
              <div>
                <span className="absolute bottom-0 left-0">
                  <svg
                    width={61}
                    height={30}
                    viewBox="0 0 61 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx={16}
                      cy={45}
                      r={45}
                      fill="#CA8A04"
                      fillOpacity="0.11"
                    />
                  </svg>
                </span>
                <span className="absolute top-0 right-0">
                  <svg
                    width={20}
                    height={25}
                    viewBox="0 0 20 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="0.706257"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 0.706257 24.3533)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="6.39669"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 6.39669 24.3533)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="12.0881"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 12.0881 24.3533)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="17.7785"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 17.7785 24.3533)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="0.706257"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 0.706257 18.6624)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="6.39669"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 6.39669 18.6624)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="12.0881"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 12.0881 18.6624)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="17.7785"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 17.7785 18.6624)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="0.706257"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 0.706257 12.9717)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="6.39669"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 6.39669 12.9717)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="12.0881"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 12.0881 12.9717)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="17.7785"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 17.7785 12.9717)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="0.706257"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 0.706257 7.28077)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="6.39669"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 6.39669 7.28077)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="12.0881"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 12.0881 7.28077)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="17.7785"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 17.7785 7.28077)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="0.706257"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 0.706257 1.58989)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="6.39669"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 6.39669 1.58989)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="12.0881"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 12.0881 1.58989)"
                      fill="#CA8A04"
                    />
                    <circle
                      cx="17.7785"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 17.7785 1.58989)"
                      fill="#CA8A04"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
