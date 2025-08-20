import { about1 } from '@/assets'
import AllBanner from '@/components/banner'
import Success1 from '@/components/succes-story/success1'
import React from 'react'

function page() {

  return (
    <>
       <AllBanner img={about1}
            title={"Success Stories"} slug={"success-stories"} />
            <Success1/>
         </>
  )
}

export default page
