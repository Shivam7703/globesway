import { about1 } from '@/assets'
import AllBanner from '@/components/banner'
import Form from '@/components/contact/form'
import Contactsec1 from '@/components/contact/section1'
import React from 'react'

function page() {
  return (
    <>
      <AllBanner img={about1}
            title={"Contact Us"} slug={"contact-us"} para={"lorem the jority have suffered alteration in some form by randomised words which don't look even slightly believable."}/>
            <Contactsec1/>
            <Form/>
               <div className=" w-full md:h-[550px] h-72">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.861245838251!2d77.14724467529147!3d28.693796975631276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d034f8893d0cd%3A0x9f30cf26433038ae!2sGlobesway%20Immigration%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1755791802053!5m2!1sen!2sin"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  )
}

export default page
