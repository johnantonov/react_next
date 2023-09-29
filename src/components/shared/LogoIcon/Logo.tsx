'use client'
import Image from "next/image"
import LogoImg from '../../../../public/img/header/logo.svg'
import styles from './Logo.module.css'

export const LogoIcon = ({width}: {width?: number}) => {
  return <a href="/" className={styles.LogoLink}>
    <Image
      width={width}
      src={LogoImg} 
      alt="Логотип, переход на главную страницу"
    />
  </a>
}