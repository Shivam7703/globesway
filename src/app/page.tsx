
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
import { aboutdata } from '@/data/homeData';
import React from 'react';


export default function Home() {
  return (
    < >
  Hello World!
  <p>Welcome to our website!</p>
  <p>Explore our features and services.</p>
  <p>Contact us for more information.</p>
  <p>Enjoy your stay!</p>
  <p>Have a great day!</p>    
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
