import { about1 } from '@/assets'
import AllBanner from '@/components/banner'
import Team from '@/components/home/ourTeam'
import React from 'react'

function page() {
  return (
    <>
       <AllBanner img={about1}
            title={"About Us"} slug={"about-us"} para={"lorem the jority have suffered alteration in some form by randomised words which don't look even slightly believable."}/>
        <Team/>
    </>
  )
}

export default page
