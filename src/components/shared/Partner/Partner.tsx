'use client'
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import { FunctionComponent } from "react";
import styles from './Partner.module.css'
import Image from "next/image";


interface Props {
  path: StaticImport;
  alt: string;
}

export const Partner: FunctionComponent<Props> = ({ path, alt }) => {
  return (
    <div className={styles.partner__wrapper}>
      <Image src={path} alt={alt} />
    </div>
  )
}