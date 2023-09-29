import { FaqList } from '@/components/components/Faq/FaqList'
import styles from './Faq.module.css'

export const Faq = () => {
  return (
    <section id="faq" className='container'>
      <div className={styles.faq}>
        <h3 className={styles.faq__title}>FAQ</h3>
        <FaqList />
      </div>
    </section>
  )
}