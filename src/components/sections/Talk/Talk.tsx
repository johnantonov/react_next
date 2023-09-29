'use client'
import { FormEvent, FunctionComponent, useContext, useEffect, useState } from "react";
import styles from './Talk.module.css'
import { Text } from "@/components/shared/Text/Text";
import { addUserToWaitlist, selectInfoWaitlist} from "@/components/state/waitlistSlice";
import { useDispatch, useSelector } from "react-redux";
import { isEmptyObject } from "@/components/helpers/isEmptyObj/isEmptyObj";
import { talkContext } from "@/components/contexts/talkContext";
import { WaitlistModal } from "@/components/components/WailistModal/WaitlistModal";

export const Talk: FunctionComponent = () => {
    // вносим данные из формы 
    const {form, onChange} = useContext(talkContext)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target; 
      onChange({
        ...form,
        [name]: value
      })
    }
  
    // если пользователь уже вносил данные, не верстаем секцию формы
    let waitlist = isEmptyObject(useSelector(selectInfoWaitlist));
    const [isSubmitted, setIsSubmitted] = useState(false)
    
    // состояния открытия закрытия модального окна после отправки формы
    const [isOpenedModal, setIsOpenedModal] = useState(false)
  
    // добавление в лист ожидания нового юзера
    const dispatch = useDispatch()
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      dispatch(addUserToWaitlist(form))
      setIsOpenedModal(true)
      setIsSubmitted(true)
    }

  return (
    <section id="white" className="container">
      {waitlist === true && 
      <div style={{display: isSubmitted ? 'none' : ''}} className={styles.talk}>
        <Text As="h2" size={32} color="white">LET`S TALK</Text>
        <form onSubmit={(e) => handleSubmit(e)} action="" className={styles.form}>
        <div> 
          <input name="name" onChange={handleChange} type="name" placeholder="|  Name*" required />
          <input name="telegram" onChange={handleChange} type="text" placeholder="|  Telegram username*" required />
          <input name="socials" onChange={handleChange} type="text" placeholder="|  Socials (website/twitter etc.)*" required />
          <input name="email" onChange={handleChange} type="email" placeholder="|  Email address*" required />
          <input name="subject" onChange={handleChange} type="text" placeholder="|  Subject*" required />
        </div>
        <input name="message" onChange={handleChange} type="text" placeholder="|  Message*" required />
        <div className={styles.submit__wrapper}>
          <input  className={styles.submit} type="submit" value={'SUBMIT'}/>
        </div>
      </form>
      {isOpenedModal && <WaitlistModal onClose={() => { setIsOpenedModal(false) }} className={styles.modalWindow} /> }
    </div> } 
    </section>
  )
} 