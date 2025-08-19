import { banner, mobbanner } from '@/assets';
import AboutSection from '@/components/home/AboutSection';
import Blogs from '@/components/home/blog';
import ChooseCountry from '@/components/home/choosecountry';
import CoachingOffer from '@/components/home/cochingOffer';
import CountDown from '@/components/home/countDown';
import FaqSection from '@/components/home/faq';
import Latestupdate from '@/components/home/latestupdate';
import OurProcess from '@/components/home/ourProcess';
import Team from '@/components/home/ourTeam';
import Services from '@/components/home/services';
import Testimonials from '@/components/home/testimonial';
import Whychoose from '@/components/home/whychoose';
import React from 'react';
import Image from 'next/image';


export default function Home() {
  return (
    < >
    <Image src={banner} alt='' className='w-full h-full max-sm:hidden  object-cover min-h-[440px]'></Image>  
        <Image src={mobbanner} alt='' className='w-full h-full sm:hidden object-cover min-h-[440px]'></Image>  

  <Latestupdate/>
<AboutSection />
<Services/>
<CountDown/>
<ChooseCountry/>
<OurProcess />
<Whychoose />
<CoachingOffer/>
<FaqSection/>
<Testimonials/>
<Team/>
<Blogs/>
  </>
  );
}
