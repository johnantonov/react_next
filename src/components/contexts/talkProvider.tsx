'use client'
import React, { useState } from "react";
import { talkContext } from '@/components/contexts/talkContext'

export const initialUser = {
  name: '',
  telegram: '',
  socials: '',
  email: '',
  subject: '',
  message: '',
}

export const TalkProvider = ({ children }: {children: React.ReactNode}) => {
  const [talkValue, setTalkValue] = useState(initialUser)

  return (
    <talkContext.Provider value={{
        form: talkValue,
        onChange: setTalkValue,
      }}>
        {children}
    </talkContext.Provider>
  )
}