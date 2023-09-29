import css from './JoinBtn.module.css'

export const JoinBtn = ({link, children, clname}: {link: string, children: string, clname?: string}) => {
  return (
    <div className={css.joinBtn}>
      <a href={`/${link}`} className={`${css.joinBtn__link} ${clname}`}>{children}</a>
    </div>
  )
} 