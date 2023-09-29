'use client'
import { Text } from '@/components/shared/Text/Text'
import styles from './Main.module.css'
import { useMediaQuery } from 'react-responsive'
import Image from 'next/image'
import img1 from '../../../../public/img/1pageMAIN/1.png'
import img2 from '../../../../public/img/1pageMAIN/2.png'
import img3 from '../../../../public/img/1pageMAIN/3.png'
import img4 from '../../../../public/img/1pageMAIN/4.png'
import { useIsBrowser } from '@/components/helpers/Hooks/useIsBrowser'

export const Main = () => {
  const is500px = useMediaQuery({maxWidth: 500})
  const is1200px = useMediaQuery({maxWidth: 1200})

  const isBrowser = useIsBrowser()
  const widthH = isBrowser ? is500px ? 12 : is1200px ? 24 : 32 : 32
  const widthP = isBrowser ? is500px ? 24 : is1200px ? 32 : 42 : 42

 return (
 <section className={styles.main}>
  <ul className='container'>
    <li>
      <Text className={styles.main__h3} As='h3' size={widthH}>
        Shop in the Metaverse for Real Products
      </Text>
      <Text className={styles.main__text} As='p' size={widthP}>
        RINE VR allows you to shop for real products from your favorite brands in the comfort of your own metaverse space. Shop digital assets of artworks or buy NFT tickets to join exclusive virtual events — it’s all possible now!
      </Text>
      {isBrowser && 
        <Image className={styles.main__img} 
        src={img1} 
        height={is500px ? 100 : is1200px ? 200 : 300}
        alt=''/>
      }
    </li>
    <li className={styles.main__li_2nd}>
      <Text className={styles.main__h3} As='h3' size={widthH}>
        Create Your Own Personal Space
      </Text>
      <Text className={styles.main__text} As='p' size={widthP}>
      Everyone needs a place to call their own. RINE VR allows you to create your own personal space that can be customized with 3D spaces, furniture and decorations exactly how you want it. It’s like having your own little slice of heaven in the metaverse!
      </Text>
      {isBrowser && 
        <Image className={styles.main__img} 
        src={img2} 
        height={is500px ? 100 : is1200px ? 200 : 300}
        alt=''/>
      }
    </li>
    <li>
      <Text className={styles.main__h3} As='h3' size={widthH}>
      Suitable for Fashion, Luxury, Real Estate & Cars
      </Text>
      <Text className={styles.main__text} As='p' size={widthP}>
        RINE VR allows you to shop for real products from your favorite brands in the comfort of your own metaverse space. Shop digital assets of artworks or buy NFT tickets to join exclusive virtual events — it’s all possible now!
      </Text>
      {isBrowser &&
        <Image className={styles.main__img} 
        src={img3} 
        layout={is1200px ? 'responsive' : ''}
        height={is500px ? 100 : 300}
        alt=''/>
      }
    </li>
    <li>
      <Text className={styles.main__h3} As='h3' size={widthH}>
        Metaverse Virtual Events & Experiences
      </Text>
      <Text className={styles.main__text} As='p' size={widthP}>
        RINE VR allows you to shop for real products from your favorite brands in the comfort of your own metaverse space. Shop digital assets of artworks or buy NFT tickets to join exclusive virtual events — it’s all possible now!
      </Text>
      {isBrowser &&
        <Image className={styles.main__img} 
        src={img4} 
        layout={is1200px ? 'responsive' : ''}
        height={is500px ? 100 : 300}
        alt=''/>
      }
    </li>
  </ul>
 </section> )
}