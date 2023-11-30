import Image from 'next/image'
import Camp from './components/camp/Camp'
import Guide from './components/guide/Guide'
import Features from './components/features/Features'
import GetApp from './components/getApp/GetApp'
import Hero from './components/hero/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  )
}
