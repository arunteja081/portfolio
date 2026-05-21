import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useRevealInView } from '../hooks/useRevealInView'

interface SectionWrapperProps {
  children: ReactNode
  id: string
  className?: string
}

const SectionWrapper = ({ children, id, className = '' }: SectionWrapperProps) => {
  const { ref: sectionRef, inView: isInView } = useRevealInView()

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative py-20 md:py-28 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{ maxWidth: '1152px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export default SectionWrapper
