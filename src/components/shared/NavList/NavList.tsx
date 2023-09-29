import Link from "next/link"
import styles from "./NavList.module.css"

export const NavList = () => {
  return (
    <ul className={styles.list}> 
      <li><Link href="/explore#explore">Explore</Link></li>
      <li><Link href="/explore#utility">Utility</Link></li>
      <li><Link href="/explore#roadmap">Roadmap</Link></li>
      <li><Link href="/explore#team">Team</Link></li>
      <li><Link href="/explore#faq">FAQ</Link></li>
      <li><Link href="/">Features</Link></li>
      <li><Link href="/explore#white">Whitepaper</Link></li>
  </ul>
  )
}