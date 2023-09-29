import styles from './Hero.module.css'
import heroImg from '../../../../public/img/hero/g14.png'
import Image from 'next/image'
import { SMIList } from '@/components/components/SMIList/SMIList'

export const Hero = () => {
  return (
      <div className={styles.hero}>
        <section className='container'>
          <div>
            <Image 
              className={styles.hero__img} 
              src={heroImg} 
              alt='' 
              />
            <h1 className={styles.hero__title}>
              In a world where reality is never enough, <br></br><b>We are the future.</b>
            </h1>
          </div>
          <div className={styles.SMI__wrapper}>
            <div aria-label='СМИ о нас' className={styles.hero__smi}>
              <SMIList color={'white'} />
            </div>
          </div>
        </section>
      </div>
  )
}