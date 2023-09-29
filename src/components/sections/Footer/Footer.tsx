'use client'
import { LogoIcon } from "@/components/shared/LogoIcon/Logo"
import { useMediaQuery } from "react-responsive"
import styles from './footer.module.css'
import { Nav } from "@/components/components/Nav/Nav"
import { TwitterIcon } from "@/components/shared/TwitterIcon/TwitterIcon"
import { DiscordIcon } from "@/components/shared/DiscordIcon/DiscordIcon"
import { SocialButton } from "@/components/components/SocialButton/SocialButton"
import { useIsBrowser } from "@/components/helpers/Hooks/useIsBrowser"

export const Footer = () => {
  let is800px = useMediaQuery({maxWidth: 800})

  const isBrowser = useIsBrowser()
  const width = isBrowser ? is800px ? 97 : 203 : 203

  return (
    <footer className={`container ${styles.footer}`}>
      <LogoIcon width={width} />
      <Nav></Nav>
      <div>
        <SocialButton img={ TwitterIcon('#fff') } />
        <SocialButton img={ DiscordIcon('#fff') } />
      </div>
    </footer>
  )
}