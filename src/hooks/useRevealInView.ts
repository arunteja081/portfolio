import { useCallback, useEffect, useRef, useState } from 'react'
import { useInView, type IntersectionOptions } from 'react-intersection-observer'

function isInViewport(el: Element) {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight || document.documentElement.clientHeight
  return rect.top < vh * 0.92 && rect.bottom > vh * 0.08
}

/** Section reveal — works on reload when scroll is restored mid-page */
export function useRevealInView(options?: IntersectionOptions) {
  const elementRef = useRef<HTMLElement | null>(null)
  const [revealed, setRevealed] = useState(false)

  const { ref: observerRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: '0px 0px -32px 0px',
    ...options,
  })

  const ref = useCallback(
    (node: HTMLElement | null) => {
      elementRef.current = node
      observerRef(node)
    },
    [observerRef],
  )

  useEffect(() => {
    if (inView) setRevealed(true)
  }, [inView])

  useEffect(() => {
    const sync = () => {
      const el = elementRef.current
      if (el && isInViewport(el)) setRevealed(true)
    }

    sync()
    const raf1 = requestAnimationFrame(sync)
    const raf2 = requestAnimationFrame(() => requestAnimationFrame(sync))

    window.addEventListener('pageshow', sync)
    window.addEventListener('load', sync)

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
      window.removeEventListener('pageshow', sync)
      window.removeEventListener('load', sync)
    }
  }, [])

  return { ref, inView: inView || revealed }
}
