'use client'
import Head from 'next/head'
import Image from 'next/image'
import { Header }  from '../components/Header'
import { Title, Paragraph } from "../components/Text"
import { GetStartedButton } from '../components/GetStartedButton'
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
      <main className="fixed right-0 px-9 w-[100vw] max-h-[calc(100vh-96px)] top-24 overflow-y-auto back">
        <section id="intro" className="sm:w-[100%]">
        <Image alt='An Illustration Intro to Manage' src={IllustrationIntro}/>
        <Title>Bring everyone together to build better products.</Title>
        <Paragraph>Manage makes it simple for software teams to plan day-to-day 
  tasks while keeping the larger team goals in view.</Paragraph>
        <GetStartedButton />
        </section>
        <section>
          <Title>What’s different about Manage?</Title>
          <Paragraph>Manage provides all the functionality your team needs, without 
    the complexity. Our software is tailor-made for modern digital 
    product teams. </Paragraph>
        </section>
      </main>
    </div>
  )
}
