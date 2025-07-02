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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.70783721605!2d77.09038143184443!3d28.60854037240093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bf3b54fb5f5%3A0x3c779acafc7267bb!2sRZ-105%20BLOCK-%20C%2C%20DABRI%20EXTENSION%20EAST!5e0!3m2!1sen!2sin!4v1727546752016!5m2!1sen!2sin"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  )
}

export default page
