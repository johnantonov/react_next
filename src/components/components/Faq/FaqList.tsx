'use client'
import React, { FunctionComponent, ReactNode, useState } from "react"
import { data } from '@/data/FAQuestions'
import styles from './FaqList.module.css'

// данные в базе вопросов представлены так
interface Question {
  question: string
  answer: string
}
const questions: Question[] = data

// секция вопрос-ответа, включает в себя кнопку вопрос и параграф ответа
const FAQSection = ({children}: {children: ReactNode}) => {
  return <div className={styles.faq__section}>
    {children}
  </div>
}

// кнопка-вопрос, открывающая ответ
const AccordionQuestion = ({ children, handler, className }: {children: string, handler: Function, className?: string}) => {
  return <button className={className} onClick={() => handler()}>{children}</button>
}

// открывающийся ответ
const AccordionAnswer = ({ children, isOpen }: {children: string, isOpen: boolean}) => {
  return (
  <p  
    className={`${styles.faq__answer} ${isOpen ? styles.faq__answer_open : ''}`}>
    {children}
  </p> 
  );
}

// список FAQ
export const FaqList: FunctionComponent = () => {
  const [openAnswers, setOpenAnswers] = useState<boolean[]>(questions.map(() => false));
  const questionHandler = (index: number) => {
    let updatedOpenAnswers = openAnswers.map(() => false)
    if (openAnswers[index] !== true) {
      updatedOpenAnswers[index] = !updatedOpenAnswers[index]
    } 
    setOpenAnswers(updatedOpenAnswers)
  }

  return (
    // рендерим по вопросам с базы соответствующие секции
    questions.map((el, index) => {
      return (
        <FAQSection  key={index}>
          <AccordionQuestion className={openAnswers[index] ? styles.faqIsOpened : styles.faqIsClosed} handler={() => {questionHandler(index)}}>{el.question}</AccordionQuestion>
          <AccordionAnswer isOpen={openAnswers[index]}>{el.answer}</AccordionAnswer>  
        </FAQSection>
      )
    })
  )
}