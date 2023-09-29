'use client'
import { Text } from "@/components/shared/Text/Text"
import styles from "./Partners.module.css"
import { useMediaQuery } from "react-responsive"
import { Partner } from "@/components/shared/Partner/Partner"
import hd from "../../../../public/img/partners/hodooi.svg"
import piccini from "../../../../public/img/partners/piccini.svg"
import theComplainers from "../../../../public/img/partners/the-complainers.svg"
import trececasas from "../../../../public/img/partners/trececasas.svg"
import bici from "../../../../public/img/partners/bici.svg"
import coccolebimbi from "../../../../public/img/partners/coccolebimbi.svg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useIsBrowser } from "@/components/helpers/Hooks/useIsBrowser"

export const Partners = () => {
  const is500px = useMediaQuery({maxWidth: 500})
  const is1200px = useMediaQuery({maxWidth: 1200})
  
  const isBrowser = useIsBrowser()
  const size = isBrowser ? is500px ? 12 : is1200px ? 24 : 32 : 32

  return (
    <section className="slider__container"> 
      <div className={styles.partners}>
        <Text size={size} className={styles.partners__title} As="h3">PARTNERS</Text>
        <Swiper
          style={{marginLeft: 40}}
          slidesPerView={'auto'}
          spaceBetween={20}
          centeredSlides={false} 
        > 
         <SwiperSlide><Partner path={hd} alt="hodooi brand"/></SwiperSlide>
         <SwiperSlide><Partner path={piccini} alt="piccini brand"/></SwiperSlide>
         <SwiperSlide><Partner path={theComplainers} alt="the Complainers brand"/></SwiperSlide>
         <SwiperSlide><Partner path={trececasas} alt="trececasas brand"/></SwiperSlide>
         <SwiperSlide><Partner path={bici} alt="bici brand"/></SwiperSlide>
         <SwiperSlide><Partner path={coccolebimbi} alt="coccolebimbi brand"/></SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}