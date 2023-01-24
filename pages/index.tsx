'use client'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Header }  from '../components/Header'
import IllustrationIntro from '../public/images/illustration-intro.svg'


export default function Home() {



  return (
    <div className="">
      <Header  />
      <section id="intro" className="sm:w-[100%]">
        <Image src={IllustrationIntro}/>
      </section>
    </div>
  )
}
