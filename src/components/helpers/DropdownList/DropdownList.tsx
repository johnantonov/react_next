'use client'
import { useEffect, useState } from "react"
import styles from './DropdownList.module.css';

interface DropdownListProps {
  button: React.ReactNode
  children: React.ReactNode
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function DropdownList({button, children, isOpen, onOpen = NOOP, onClose = NOOP}: DropdownListProps){
  const [isOpenState, setIsOpenState] = useState(isOpen) 
  useEffect(() => setIsOpenState(isOpen), [isOpen])
  useEffect(() => isOpenState ? onOpen() : onClose(), [isOpenState, onOpen, onClose])

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsOpenState(!isOpenState)
    }
  }
 
  return (
    <div className={styles.dropdown__container}>
      <div onClick={handleOpen}>
        {button}
      </div>
      {isOpenState && (
        <div className={styles.list__container}>
          <div className={styles.list} onClick={() => setIsOpenState(false)}>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}