import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="h-16 w-16 border-4 border-gold border-t-transparent rounded-full animate-spin"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              borderColor: "#FFD700", // Golden color
              borderTopColor: "transparent", // Transparent top for spinner effect
            }}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
