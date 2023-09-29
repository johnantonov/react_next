'use client'
import { BurgerIcon } from '@/components/shared/BurgerIcon/BurgerIcon';
import styles from './MobileNav.module.css';
import { DropdownList } from "@/components/helpers/DropdownList/DropdownList";
import { useState } from 'react';
import { CloseBurger } from '@/components/shared/CloseMenu/CloseMenu';
import { NavList } from '@/components/shared/NavList/NavList';

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <DropdownList button={<button onClick={() => setIsOpen(!isOpen)} aria-label="Открыть меню" className={styles.burger}>{isOpen ? CloseBurger('#fff') : BurgerIcon('#fff') }</button>}>
       <NavList />
      </DropdownList>
    </nav>

  )
}