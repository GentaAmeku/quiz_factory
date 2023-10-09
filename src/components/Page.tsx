'use client';

import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const Page = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={variants}
    initial="hidden"
    animate="enter"
    exit="exit"
    transition={{ type: 'linear' }}
  >
    {children}
  </motion.div>
);

export default Page;
