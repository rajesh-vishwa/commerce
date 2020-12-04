import React, { FC } from 'react'
import Container from '../Container'
import RightArrow from '../../icons/RightArrow'
import s from './Hero.module.css'
//import Link from 'next/link'
import CustomLink from '../CustomLink/CustomLink'
interface Props {
  className?: string
  headline: string
  description: string
}

const Hero: FC<Props> = ({ headline, description }) => {
  return (
    <div className="bg-black">
      <Container>
        <div className={s.root}>
          <h2 className="text-4xl leading-10 font-extrabold text-white sm:text-5xl sm:leading-none sm:tracking-tight lg:text-6xl">
            {headline}
          </h2>
          <div className="flex flex-col justify-between">
            <p className="mt-5 text-xl leading-7 text-accent-2 text-white">
              {description}
            </p>
            <CustomLink href="/blog">
              <a className="text-white pt-3 font-bold hover:underline flex flex-row cursor-pointer w-max-content">
                Read it here
                <RightArrow width="20" heigh="20" className="ml-1" />
              </a>
            </CustomLink>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
