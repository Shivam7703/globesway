import { about1 } from '@/assets'
import AllBanner from '@/components/banner'
import Careerfaq from '@/components/career/careerFaq'
import OpenRole from '@/components/career/openRole'
import Careersec1 from '@/components/career/section1'
import Team from '@/components/home/ourTeam'
import Queans from '@/components/home/queans'
import React from 'react'

function page() {

  return (
    <>
       <AllBanner img={about1}
            title={"Career"} slug={"career"} para={"lorem the jority have suffered alteration in some form by randomised words which don't look even slightly believable."}/>
            <Careersec1/>
            <OpenRole/>
           <Careerfaq/>
        <Team/>
    </>
  )
}

export default page
