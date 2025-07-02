import { about1 } from '@/assets'
import Aboutchoose from '@/components/about/choose'
import Counter from '@/components/about/counter'
import Mission from '@/components/about/mission'
import Section1 from '@/components/about/section1'
import AllBanner from '@/components/banner'
import Team from '@/components/home/ourTeam'
import React from 'react'

function page() {
  return (
    <>
       <AllBanner img={about1}
            title={"About Us"} slug={"about-us"} para={"lorem the jority have suffered alteration in some form by randomised words which don't look even slightly believable."}/>
            <Section1/>
            <Mission/>
            <Aboutchoose/>
            <Counter/>
            <Team/>
    </>
  )
}

export default page
