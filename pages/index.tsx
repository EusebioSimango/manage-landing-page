'use client'
import Head from 'next/head'
import Image from 'next/image'
import { Header }  from '../components/Header'
import { Title } from "../components/Title"
import IllustrationIntro from '../public/images/illustration-intro.svg'
import favicon from '../public/images/favicon-32x32.png'


export default function Home() {

  return (
    <div className="">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon.src}/>
        <title>Frontend Mentor | Manage landing page</title>
      </Head>
      <Header  />
      <section id="intro" className="sm:w-[100%]">
        <Image alt='An Illustration Intro to Manage' src={IllustrationIntro}/>
        <Title>Bring everyone together to build better products.</Title>
      </section>
    </div>
  )
}
