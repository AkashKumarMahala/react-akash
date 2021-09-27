import React from 'react'
import { motion } from "framer-motion"

const Home = () => {
    return (
     <section className="flex h-screen">
        <motion.h1 initial={{ y:-200 }}
              animate={{ scale:2.5, y:0, rotate: 360 }} 
              transition={{duration:2}}
               className="m-auto">I am Home</motion.h1>
     </section>
    )
}

export default Home
