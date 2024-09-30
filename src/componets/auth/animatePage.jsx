import React from 'react'
import { motion } from "framer-motion";

const AnimatePage = () => {
  return (
    <div>

    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />

    </div>
  )
}

export default AnimatePage
