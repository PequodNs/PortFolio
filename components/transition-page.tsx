"use client";

import { transitionVariantsPage } from "@/utils/motion-transitions";
import { AnimatePresence, motion } from "framer-motion";

const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-30 bg-[#29282b]"
        variants={transitionVariantsPage}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 1.6, ease: "easeInOut" }}
      />
    </AnimatePresence>
  );
};

export default TransitionPage;