import { about1 } from '@/assets'
import Aboutchoose from '@/components/about/choose'
import Counter from '@/components/about/counter'
import Mission from '@/components/about/mission'
import Section1 from '@/components/about/section1'
import AllBanner from '@/components/banner'
import Blogs from '@/components/home/blog'
import Team from '@/components/home/ourTeam'
import React from 'react'

function page() {
  return (
    <>
       <AllBanner img={about1}
            title={"Blogs"} slug={"blogs"} />
            <Blogs/>
            
    </>
  )
}

export default page
