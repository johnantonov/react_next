'use client'
import { Text } from "@/components/shared/Text/Text";
import { useMediaQuery } from "react-responsive";
import css from './page.module.css'
import Image from "next/image";
import img1 from '../../../public/img/2pageMAIN/1.png'
import img2 from '../../../public/img/2pageMAIN/2.png'
import { JoinBtn } from "@/components/shared/JoinBtn/JoinBtn";
import { TabsPass } from "@/components/components/TabsPass/TabsPass";
import { Roadmap } from "@/components/components/Roadmap/Roadmap";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Explore | RINE'
}



export default function Explore() {
  const is500px = useMediaQuery({maxWidth: 500})
  const is1200px = useMediaQuery({maxWidth: 1200})

  return (
    <>
      <section id="explore" className="container">
        <Text className={css.title} As='h3' size={is500px ? 16 : is1200px ? 32 : 42}>
          EXPLORE  
        </Text>  
        <Text className={css.subtitle} As='p' size={is500px ? 16 : is1200px ? 32 : 42}>
        Reality Is Never Enough is a Virtual Reality platform accessible through Oculus and via RINE VR App. It’s a parallel universe where you can join the best NFT, design, fashion, jewellery, automotive and luxury properties departments.
        </Text>
        <svg className={css.arrow} xmlns="http://www.w3.org/2000/svg" width="32" height="49" viewBox="0 0 32 49" fill="none">
          <path d="M16 2V47M16 47L30 33M16 47L2 33" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div className={css.img1__wrapper}>
          <Image className={css.img1} src={img1} alt='' layout="responsive" aria-hidden="true"/>
        </div>
        <Text className={css.text} As="p" size={is500px ? 16 : is1200px ? 24 : 32}>
          Immerse yourself in a realistic 3D universe and explore new worlds, meet people from around the globe, and participate in unforgettable experiences. Browse and buy real products from your favourite brands, create your own personal space, join exclusive virtual events, and enjoy a range of exciting activities. Join us today and start exploring the metaverse like never before!
        </Text>
        <div className={css.joinBtn}>
          <JoinBtn link="">JOIN THE WHITELIST</JoinBtn>
        </div>
      </section>
      <section id='utility' className={css.utility__wrapper}>
        <Text className={css.title} As='h3' size={is500px ? 16 : is1200px ? 32 : 42}>
          UTILITY
        </Text> 
        <div className={css.utility}>
          <div className={css.utility__left}>
            <Text As="h5" className={css.utility__exp} size={is500px ? 16 : is1200px ? 24 : 28}>Metaverse Virtual Events & Experiences</Text>
            <Text As="p" className={css.utility__text} size={is500px ? 12 : is1200px ? 20 : 24}>
              Bring the real world into the metaverse and experience it like never before. Host exclusive events, meet your favorite celebrities and explore new worlds in the metaverse with RINE VR`s events platform.
            </Text>
          </div>
          <div className={css.utility__center}>
            <Image 
             className={css.utility__img}
             src={img2}
             alt=""
             layout="responsive"
             aria-hidden="true"
            />
          </div>
          <div className={css.utility__right}>
            <Text As="h5" className={css.utility__exp} size={is500px ? 16 : is1200px ? 24 : 28}>Realistic Virtual Experience</Text>
            <Text As="p" className={css.utility__text} size={is500px ? 12 : is1200px ? 20 : 24}>
            Feel like you&apos;re in a real space with our realistic virtual environment that provides unparalleled immersion and connection. Our cutting-edge technology offers realistic 3D visuals and audio for a one-of-a-kind experience.
            </Text>
          </div>
        </div>
      </section>
      <section className={`${css.pass} container`}>
        <div className={css.pass__left}></div>
        <div className={css.pass__right}>
          <Text size={is500px ? 32 : is1200px ? 42 : 54} As="h3" className={css.pass__title}>Utility pass</Text>
          <Text size={is500px ? 12 : is1200px ? 24 : 32} As="p" className={css.pass__text}>RINE VR&apos;s NFT project, Platinum Membership, is an exciting opportunity to support the platform&apos;s growth and development while gaining access to exclusive benefits. With the purchase of this membership, you will gain Platinum status, which provides free access to virtual and real events, priority in purchasing virtual spaces, and maximum involvement in the platform&apos;s news, updates and investment opportunities.</Text>
        </div>
      </section>
      <section className={`${css.pass__tabs} container`}> 
        <TabsPass />
        <div className={css.tabs__img}></div>
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="team" className="container">
        <Text className={`${css.team__title} ${css.title}`} As='h3' size={is500px ? 16 : is1200px ? 32 : 42}>
          TEAM
        </Text>  
        <div className={css.team}>
          <div>
            <Image src="/img/team/1.png" width={200} height={200} alt=""/>
            <h5 className={css.team__name}>Antonio Longhin</h5>
            <p className={css.team__prof}>Business Developer</p>
            <p className={css.team__info}>Strategic thinker forging partnerships and driving growth for RINE VR.</p>
          </div>
          <div>
            <Image src="/img/team/2.png" width={200} height={200} alt=""/>
            <h5 className={css.team__name}>Cristiano Piccini</h5>
            <p className={css.team__prof}>CEO</p>
            <p className={css.team__info}>Experienced entrepreneur leading RINE VR&apos;s vision for a transformative metaverse.</p>
          </div>
          <div>
            <Image src="/img/team/3.png" width={200} height={200} alt=""/>
            <h5 className={css.team__name}>Fabio Cesarato</h5>
            <p className={css.team__prof}>CTO</p>
            <p className={css.team__info}>Innovative technologist driving RINE VR&apos;s cutting-edge platform development.</p>
          </div>
        </div>
        <Text className={css.team__text} As="p" size={is500px ? 18 : is1200px ? 32 : 42}>
          “We are proud to be supported by Leahgacy and Airlapp (airlapp.com), two powerful companies dedicated to advancing the field of virtual reality. Together with their expert teams and extensive knowledge, we are creating a groundbreaking metaverse platform that is sure to revolutionize the way we interact in the digital world. Learn more about our partners and their contributions on their respective websites.”
        </Text>
      </section>
    </>
  )
}
