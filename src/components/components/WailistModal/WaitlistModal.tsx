import useCloseModal from "@/components/helpers/Hooks/useCloseModal"
import { Text } from "@/components/shared/Text/Text"
import { useRef } from "react"
import { createPortal } from "react-dom"

export const WaitlistModal = ({ className, onClose }: { className: string, onClose?: Function}) => {
  const body = document.querySelector('body')
  const ref = useRef<HTMLDivElement>(null)

  useCloseModal(ref, () => {
    onClose?.()
  })

  if (!body) return null

  return createPortal(
    <div ref={ref} className={className} style={{background: '#4672FF', zIndex: 99999}}>
      <Text size={30} color="white">Thank you <br /> We will contact you</Text>
    </div>
    , body
  )
}