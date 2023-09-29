import { JoinBtn } from '@/components/shared/JoinBtn/JoinBtn'
import css from './Join.module.css'

export const Join = () => {
  return (
    <section className={css.join}>
      <h3 className={css.join__title}>In a world where reality is never enough,
      <span>We are the future.</span></h3>
      <JoinBtn link={''}>JOIN THE WHITELIST</JoinBtn>
    </section>
  )
}