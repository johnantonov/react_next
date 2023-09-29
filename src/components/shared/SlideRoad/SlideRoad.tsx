import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image"
import { FunctionComponent, ReactNode } from "react"
import css from './SlideRoad.module.css'

interface Slide {
  children?: ReactNode;
  img?: string | StaticImport;
  number?: string;
}

export const SlideRoad: FunctionComponent<Slide> = (
  {children, img, number}
) => {
  
  return (

    <div className={css.slide}>
      {img ? <Image layout="responsive" src={img} alt=""/> : null}
      <div className={css.number}><p>{number}</p></div>
      <div className={css.children}>
        {children}
      </div>
    </div>
  )

}