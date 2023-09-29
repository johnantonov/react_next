import { NavList } from '@/components/shared/NavList/NavList'
import styles from './Nav.module.css'

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavList />
    </nav>
  )
}