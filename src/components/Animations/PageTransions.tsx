import { AnimatePresence, motion } from "framer-motion";

const PageTransions = ({children}: {children: any}) => {
  return (
    <AnimatePresence>
      {
        <motion.div
          key={"page"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ width: "100%", height: "80%"}}
          children={
            children
          }
        />
      }
    </AnimatePresence>
  )
}

export default PageTransions
