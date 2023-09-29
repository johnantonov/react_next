'use client'
import React, { createContext, useContext, useState } from "react"
import css from './TabsPass.module.css'

const TabsPassContext = createContext({ activeTab: 'default', setActiveTab: (title: string) => {}})

const Tabs = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState('VISION')

  return <TabsPassContext.Provider value={{activeTab, setActiveTab}}>
    { children }
  </TabsPassContext.Provider>
}

Tabs.Tab = function OneTab ({ children, title } : { children: React.ReactNode, title: string }) {
  const {activeTab, setActiveTab} = useContext(TabsPassContext)
  
  return <div className={css.tabs__btns}>
    <button 
      style={activeTab !== title ? {opacity: 0.4, cursor: 'pointer'} : {} } 
      onClick={() => activeTab !== title && setActiveTab(title)}
    >
        {title}
    </button>
    {activeTab === title && <div>{children}</div>}
  </div>
}

Tabs.Text = function TextTab ({ children }: { children: string | React.ReactNode}) {
  return <div className={css.tabs__changeble}>
    {children}
  </div>
}


export const TabsPass = () => {
  return (
    <Tabs>
      <Tabs.Tab title={'VISION'}>
        <Tabs.Text>
          <p className={css.tabs__text}>RINE VR is more than just a virtual reality platform - it&apos;s a community of like-minded individuals who share a passion for innovation, creativity, and exploration. Our vision is to create a metaverse that&apos;s not only immersive and entertaining but also empowering and transformative.</p>
          <p className={css.tabs__text}>Whether you&apos;re a business owner looking to expand your reach, an artist seeking a new medium for expression, or simply someone looking to connect with others, RINE VR provides the tools and resources you need to succeed.</p>
          <p className={css.tabs__text}>At the core of our platform is the belief that the metaverse should be a place of inclusivity, diversity, and openness. We&apos;re dedicated to fostering an environment where all voices are heard, all ideas are welcome, and all individuals are respected.</p>
          <p className={css.tabs__text}>As a Platinum NFT member, you&apos;ll have the unique opportunity to be involved in the design and development of future RINE spaces and features, shaping the evolution of the metaverse. Join us in building a more collaborative, more inclusive future for virtual reality. Join us in the RINE metaverse and discover the limitless potential of virtual reality. With our cutting-edge technology, creative community, and forward-thinking approach, the possibilities are endless. So come on in, explore, and see what the future of digital interaction looks like.</p>
        </Tabs.Text>
      </Tabs.Tab>
      <Tabs.Tab title={'PERKS'}>
        <Tabs.Text>
          <ul className={css.tabs__list}>
            <li className={css.tabs__item}>Access to exclusive virtual events featuring VIP guests and performers</li>
            <li className={css.tabs__item}>Discounts on virtual real estate and other digital assets</li>
            <li className={css.tabs__item}>Early access to new features and updates</li>
            <li className={css.tabs__item}>Priority customer support</li>
            <li className={css.tabs__item}>Access to premium virtual spaces for hosting events and meetings</li>
            <li className={css.tabs__item}>Customizable personal spaces with 3D designs and decor options</li>
            <li className={css.tabs__item}>Opportunities to collaborate on future RINE VR projects and features</li>
            <li className={css.tabs__item}>Access to exclusive merchandise and virtual products from partner brands</li>
            <li className={css.tabs__item}>Networking opportunities with like-minded individuals and industry professionals</li>
            <li className={css.tabs__item}>Access to educational resources and workshops for virtual reality development and design.</li>
          </ul>
          <p className={`${css.tabs__text} ${css.tabs__text_last}`}>As a Platinum NFT member, you&apos;ll enjoy all of these perks and more, including the ability to shape the future of the RINE metaverse through your feedback and collaboration. Join our community today and experience the full potential of virtual reality!</p>
        </Tabs.Text>
      </Tabs.Tab>
    </Tabs>
  )
}