import React, { Dispatch, SetStateAction } from "react";

interface User {
  name: string,
  telegram: string,
  socials: string,
  email: string,
  subject: string,
  message: string,
}

interface talkProps {
  form: User;
  onChange: Dispatch<SetStateAction<{ name: string; telegram: string; socials: string; email: string; subject: string; message: string; }>>;
}

export const talkContext = React.createContext<talkProps>({
  form: {
    name: "",
    telegram: "",
    socials: "",
    email: "",
    subject: "",
    message: "",
  },
  onChange: () => {}
})