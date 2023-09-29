import css from './Roadmap.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SlideRoad } from '@/components/shared/SlideRoad/SlideRoad';
import img1 from '../../../../public/img/road/1.png'
import img2 from '../../../../public/img/road/2.png'
import img3 from '../../../../public/img/road/3.png'
import img4 from '../../../../public/img/road/4.png'
import img5 from '../../../../public/img/road/5.png'
import img6 from '../../../../public/img/road/6.png'
import img7 from '../../../../public/img/road/7.png'
import img8 from '../../../../public/img/road/8.png'
import img9 from '../../../../public/img/road/9.png'

const dataSlides = [
  {number: '01', title: 'MULTIUSER', text: 'Functionality to implement multiavatars presence is scene', img: img1},
  {number: '02', title: 'USER PROFILE', text: 'Functionality to implement multiavatars presence is scene', img: img2},
  {number: '03', title: 'NFT MANAGEMENT', text: 'Functionality to implement multiavatars presence is scene', img: img3},
  {number: '04', title: 'CUSTOMER CLOUD  EVOLUTION', text: 'Customers cloud database and admin panek', img: img4},
  {number: '05', title: '10 STANDARD ENVIRONMENT', text: '10 ready to use 3D environment', img: img5},
  {number: '06', title: 'MULTI LANGUAGE', text: 'Multi language support', img: img6},
  {number: '07', title: '3D AND MENU CLOUD EVOLUTION', text: 'Cloud database for 3D, delivery network and Menu management', img: img7},
  {number: '08', title: 'CUSTOMER PERSONALIZATION TOOL', text: 'Web app to give users the ability to customize their 3D space', img: img8},
  {number: '09', title: 'EVENTS FOR FANS', text: 'Event management to create events for fans and event admin panel', img: img9},
]

export const Roadmap = () => {
  return (
    <div className={`${css.road}`}>
      <div className={`${css.road__header} container`}>
        <h3 className={css.road__title}>Development roadmap</h3>
        <p className={css.road__text}>Consolidating our application in accordance with the new meteverse utilities, reinforcing the cloud environment and investing in the promotion and marketing of NFTs for access to the RINE space.</p>
      </div>
      <>
      <Swiper
        style={{marginLeft: 40}}
        slidesPerView={'auto'}
        spaceBetween={20}
        centeredSlides={false}
        className={css.road__slider}
      > {
        dataSlides.map((el, index) => {
          return (
            <SwiperSlide key={index} className={css.road__slide}> <SlideRoad img={el.img} number={el.number}>
            <div>
              <h5 className={css.slide__title}>{el.title}</h5>
              <p className={css.slide__text}>{el.text}</p>
            </div>
          </SlideRoad></SwiperSlide>
          )
        })}
      </Swiper>
    </>
    </div>
  )
}