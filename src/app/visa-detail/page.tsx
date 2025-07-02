import { about1 } from '@/assets'
import AllBanner from '@/components/banner'
import Visadetails from '@/components/visa/visa-detail'
import React from 'react'

function page() {
  return (
    <>
       <AllBanner img={about1}
            title={"Visa Detail"} slug={"visa-details"} para={"lorem the jority have suffered alteration in some form by randomised words which don't look even slightly believable."}/>
       <Visadetails/>
    </>
  )
}

export default page
