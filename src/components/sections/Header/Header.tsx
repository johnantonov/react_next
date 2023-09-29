'use client'
import { BuyButton } from '@/components/components/BuyButton/BuyButton'
import styles from './Header.module.css'
import { MobileNav } from "@/components/components/MobileNav/MobileNav"
import { Nav } from '@/components/components/Nav/Nav'
import { LogoIcon } from "@/components/shared/LogoIcon/Logo"
import { useMediaQuery } from 'react-responsive'
import { SocialButton } from '@/components/components/SocialButton/SocialButton'
import { TwitterIcon } from '@/components/shared/TwitterIcon/TwitterIcon'
import { DiscordIcon } from '@/components/shared/DiscordIcon/DiscordIcon'
import { useIsBrowser } from '@/components/helpers/Hooks/useIsBrowser'

export const Header = () => {
  let is800px = useMediaQuery({maxWidth: 800})

  const isBrowser = useIsBrowser()
  const width = isBrowser ? is800px ? 97 : 203 : 203

  return (

    <div className='container'>
      <nav className={styles.nav}>
        <LogoIcon width={width} />
        <div className={styles.mobileNav} style={{zIndex: 99999}}>
          <MobileNav /> 
        </div>
        <Nav></Nav>
        <div className={styles.buttonWrapper}>
          <div>
            <SocialButton img={ TwitterIcon('#fff') } />
            <SocialButton img={ DiscordIcon('#fff') } />
          </div>
          <BuyButton text={'BUY NOW'}/>
        </div>
      </nav>
    </div>
  )
}