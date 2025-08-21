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
import Success1 from '@/components/succes-story/success1';
import HomeBanner from '@/components/home/HomeBanner';


export default function Home() {
  return (
    < >
   <HomeBanner/>
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
<Success1 isHome={true} />
<Team/>
<Blogs/>
  </>
  );
}
