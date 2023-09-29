import styles from './BuyButton.module.css'

export const BuyButton = ({text}: {text: string}) => {
  return <a href="" className={styles.btn}>
    {text}
  </a>
}