import {
  about1,
  about2,
  about3,
  ausflag,
  aus,
  canadaflag,
  canada,
  euroflag,
  europe,
  franceflag,
  france,
  gerflag,
  germany,
  italyflag,
  italy,
  netherflag,
  nether,
  portflag,
  portugal,
  singapoflag,
  singapore,
  spainflag,
  spain,
  swedenflag,
  sweden,
  ukflag,
  uk,
  logo2,
  person,
  team1,
  team2,
  workVisa,
  prVisa,
  spouseVisa,
  touristVisa,
  businesVisa,
  ielts,
  pte,
  celpip,
  tef,
  faq2,
  faq1,
  testf2,
  testm,
  testf,
  testm2,
  banner2,
  banner3,
  banner,
  about4,
} from "@/assets";
import { BiMaleFemale } from "react-icons/bi";
import { BsBarChartFill, BsGraphUpArrow, BsPeopleFill, BsPersonFillCheck } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

import { FaAward, FaLightbulb, FaMapLocationDot } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { GrUserWorker, GrVisa } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import { MdAttachEmail, MdBusinessCenter, MdMapsHomeWork, MdSupportAgent, MdTour, MdWifiCalling3 } from "react-icons/md";
import { PiStepsFill } from "react-icons/pi";

export const navigationMenu = {
  primaryMenu: [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About Us", href: "/about-us" },
    {
      id: 3,
      label: "Services",
      href: "/services",
      subNav: [
        { id: 1, label: "Post Landing", href: "/services/Post-Landing Services" },
        { id: 2, label: "IELTS", href: "/services/IELTS Training Services" },
        { id: 3, label: "PTE", href: "/services/PTE (Pearson Test of English)" },
        { id: 4, label: "CELPIP", href: "/services/CELPIP (Canadian English Language Proficiency Index Program)" },
        { id: 5, label: "Immigration Services", href: "/services/Immigration Services" },
        {
          id: 6,
          label: "Career Counselling",
          href: "/services/Career Counselling",
        },
        {
          id: 7,
          label: "Profile Marketing & Job Assistance",
          href: "/services/Profile Marketing & Job Assistance",
        },
        {
          id: 8,
          label: "Visa Documentation",
          href: "/services/Visa Documentation",
        },
      ],
    },
    { id: 4, label: "Blogs", href: "/blogs" },
    { id: 5, label: "Contact Us", href: "/contact-us" },
    { id: 6, label: "Pay Now", href: "/pay-now" },
  ],

  secondaryMenu: [
    {
      id: 1,
      label: "Migrate",
      href: "#",
      subNav: [
        {
          id: 1,
          label: "Canada",
          href: "#",
          subNav: [
            {
              id: 1,
              label: "Canada Permanent Residency Visa",
              href: "/visa/Canada PR Visa",
            },
            {
              id: 2,
              label: "Canada Express Entry",
              href: "/visa/Canada Express Entry",
            },
            {
              id: 3,
              label: "Canada Family Sponsorship",
              href: "/visa/Canada Family Sponsorship",
            },
            {
              id: 4,
              label: "Atlantic Immigration Pilot",
              href: "/visa/Atlantic Immigration Pilot",
            },
            { id: 5, label: "Caregivers", href: "/visa/Caregivers" },
            {
              id: 6,
              label: "Canada Agri-Food Pilot",
              href: "/visa/Canada Agri-Food Pilot",
            },
            {
              id: 7,
              label: "Canada Refugees & Asylum",
              href: "/visa/Canada Refugees & Asylum",
            },
            {
              id: 8,
              label: "Canada Work Permit Visa",
              href: "/visa/Canada Work Permit Visa",
            },
            {
              id: 9,
              label: "Canada Tourist Visa",
              href: "/visa/Canada Tourist Visa",
            },
          ],
        },
        {
          id: 2,
          label: "Australia",
          href: "#",
          subNav: [
            {
              id: 1,
              label: "Australia Permanent Residency Visa",
              href: "/visa/Australia PR Visa",
            },
            {
              id: 2,
              label: "Employer Nomination Subclass 186",
              href: "/visa/Employer Nomination Scheme Visa (Subclass 186)",
            },
            {
              id: 3,
              label: "Skilled Independent Visa Subclass 189",
              href: "/visa/Skilled Independent Visa (Subclass 189)",
            },
            {
              id: 4,
              label: "Skilled Nominated Visa Subclass 190",
              href: "/visa/Skilled Nominated Visa Subclass 190",
            },
            {
              id: 5,
              label: "Skilled Work Regional Visa Subclass 491",
              href: "/visa/Skilled Work Regional Visa (Subclass 491)",
            },
            {
              id: 6,
              label: "Skills in Demand Visa Subclass 482",
              href: "/visa/Temporary Skill Shortage (TSS) Visa – Subclass 482",
            },
            {
              id: 7,
              label: "Visitor Visa Subclass 600",
              href: "/visa/Visitor Visa Subclass 600",
            },
            {
              id: 8,
              label: "Partner Visa Subclass 820",
              href: "/visa/Partner Visa Subclass 820",
            },
            {
              id: 9,
              label: "Australia Tourist Visa",
              href: "/visa/Australia Tourist Visa",
            },
          ],
        },
        {
          id: 3,
          label: "Europe",
          href: "#",
          subNav: [
            { id: 1, label: "Croatia", href: "/visa/Croatia Work Visa" },
            { id: 2, label: "Serbia", href: "/visa/Serbia Work Visa" },
            { id: 3, label: "Romania", href: "/visa/Romania Work Visa" },
            { id: 4, label: "Poland", href: "/visa/Poland Work Visa" },
            { id: 5, label: "Norway", href: "/visa/Norway Work Visa" },
            { id: 6, label: "Greece", href: "/visa/Greece Work Visa" },
            { id: 7, label: "Netherlands", href: "/visa/Netherlands Work Visa" },
            { id: 8, label: "Germany", href: "/visa/Germany Work Visa" },
            { id: 9, label: "Luxembourg", href: "/visa/Luxembourg Work Visa" },
            { id: 10, label: "Ireland", href: "/visa/Ireland Work Visa" },
            { id: 11, label: "UK", href: "/visa/UK Work Visa" },
          ],
        },
        {
          id: 4,
          label: "Gulf Nations",
          href: "/visa/gulf-nations",
          subNav: [
            { id: 1, label: "Dubai", href: "#",
               subNavv: [
                 { id: 1, label: "Dubai Work Visa", href: "/visa/Dubai Work Visa" },
                 { id: 2, label: "Dubai Tourist Visa", href: "/visa/Dubai Tourist Visa" },
               ]
             },
            { id: 2, label: "Qatar", href: "#",
               subNavv: [
                 { id: 1, label: "Qatar Work Visa", href: "/visa/Qatar Work Visa" },
                 { id: 2, label: "Qatar Tourist Visa", href: "/visa/Qatar Tourist Visa" },
               ]
            },
          ],
        },
      ],
    },

    {
      id: 2,
      label: "PR Visa",
      href: "#",
      subNav: [
        { id: 1, label: "Canada PR Visa", href: "/visa/Canada PR Visa" },
        { id: 2, label: "Australia PR Visa", href: "/visa/Australia PR Visa" },
      ],
    },

    {
      id: 3,
      label: "Work Permit",
      href: "#",
      subNav: [
        { id: 1, label: "Canada Work Permit Visa", href: "/visa/Canada Work Permit Visa" },
        { id: 2, label: "Australia Work Permit Visa", href: "/visa/Australia Work Permit Visa" },
        { id: 3, label: "Croatia Work Visa", href: "/visa/Croatia Work Visa" },
        { id: 4, label: "Serbia Work Visa", href: "/visa/Serbia Work Visa" },
        { id: 5, label: "Romania Work Visa", href: "/visa/Romania Work Visa" },
        { id: 6, label: "Poland Work Visa", href: "/visa/Poland Work Visa" },
        { id: 7, label: "Norway Work Visa", href: "/visa/Norway Work Visa" },
        { id: 8, label: "Greece Work Visa", href: "/visa/Greece Work Visa" },
        { id: 9, label: "Netherlands Work Visa", href: "/visa/Netherlands Work Visa" },
        { id: 10, label: "Germany Work Visa", href: "/visa/Germany Work Visa" },
        { id: 11, label: "Luxembourg Work Visa", href: "/visa/Luxembourg Work Visa" },
        { id: 12, label: "Ireland Work Visa", href: "/visa/Ireland Work Visa" },
        { id: 13, label: "UK Work Visa", href: "/visa/UK Work Visa" },
      ],
    },

    {
      id: 4,
      label: "Tourist Visa",
      href: "#",
      subNav: [
        { id: 1, label: "Canada Tourist Visa", href: "/visa/Canada Tourist Visa" },
        { id: 2, label: "Australia Tourist Visa", href: "/visa/Australia Tourist Visa" },
        { id: 3, label: "Dubai Tourist Visa", href: "/visa/Dubai Tourist Visa" },
        { id: 4, label: "Europe Tourist Visa", href: "/visa/Europe Tourist Visa" },
      ],
    },

    {
      id: 5,
      label: "PNP Programs",
      href: "#",
      subNav: [
        { id: 1, label: "Manitoba PNP Program", href: "/visa/Manitoba PNP" },
        { id: 2, label: "Yukon Nominee Program", href: "/visa/Yukon Nominee Program" },
        { id: 3, label: "Ontario PNP Program", href: "/visa/Ontario Provincial Nominee Program" },
        { id: 4, label: "Nova Scotia PNP", href: "/visa/Nova Scotia PNP" },
        { id: 5, label: "Alberta PNP Program", href: "/visa/Alberta PNP (AAIP)" },
        { id: 6, label: "BC PNP Program", href: "/visa/British Columbia PNP" },
        { id: 7, label: "Quebec Skilled Worker Program", href: "/visa/Quebec Skilled Worker Program" },
        { id: 8, label: "Saskatchewan PNP", href: "/visa/Saskatchewan Provincial Nominee Program" },
        {
          id: 9,
          label: "New Brunswick PNP Program",
          href: "/visa/New Brunswick PNP",
        },
        {
          id: 10,
          label: "Atlantic Immigration Program",
          href: "/visa/Atlantic Immigration Program",
        },
        { id: 11, label: "PEI PNP Program", href: "/visa/Prince Edward Island PNP" },
        { id: 12, label: "NLPNP Program", href: "/visa/Newfoundland & Labrador PNP" },
      ],
    },

    {
      id: 6,
      label: "Points Calculator",
      href: "#",
      subNav: [
        { id: 1, label: "CRS Calculator", href: "/visa/CRS Calculator for Canada Immigration" },
       
        { id: 3, label: "SINP Points Calculator", href: "/visa/Saskatchewan Immigrant Nominee Program Points Calculator" },
        { id: 4, label: "BC Points Calculator", href: "/visa/British Columbia (BC) PNP Points Calculator" },
        {
          id: 5,
          label: "Manitoba Points Calculator",
          href: "/visa/Manitoba Points Calculator",
        },
        {
          id: 6,
          label: "Nova Scotia Points Calculator",
          href: "/visa/Nova Scotia Points Calculator",
        },
        { id: 7, label: "Alberta Points Calculator", href: "/visa/Alberta Points Calculator (Alberta Advantage Immigration Program)" },
        { id: 8, label: "Ontario Points Calculator", href: "/visa/Ontario Points Calculator" },
        { id: 9, label: "Quebec Points Calculator", href: "/visa/Quebec Points Calculator" },
      ],
    },

    {
      id: 7,
      label: "More",
      href: "#",
      subNav: [
        { id: 1, label: "Privacy & Policy", href: "/more/privacy-policy" },
        { id: 2, label: "Careers", href: "/career" },
        { id: 3, label: "Success Stories", href: "/success-stories" },
      ],
    },
  ],
};

export const BannerData = [{
  id:1, img:banner
},{
  id:2, img:banner2
},{
  id:3, img:banner3
}]
// home page data
export const aboutdata = {
  img1: about2,
  img2: about1,
  img3: about3,
  title1: "About Us",
  title2: "Best immigration consultants in Delhi",
  para:
    "Globesway Immigration is here to help you make your dream of living or working abroad come true. With years of experience and a deep understanding of immigration rules and processes, we offer personalized support to match your specific needs. As the process can be overwhelming, we work closely with you to simplify every step, from visa paperwork to preparing for your move. Recognized as one of the best immigration consultants in Delhi, our goal is to guide you smoothly and confidently through your immigration journey, ensuring you always feel supported and informed along the way.",
  success: [
    { id: 1, value: "99%", text: "Visa Success Rate" },
    { id: 2, value: "100%", text: "Service Satisfaction" },
    { id: 3, value: "99%", text: "Transparency" },
  ],
};

export const servicesdata = {
  title1: "Our Services",
  title2: "Fast & Easy Visa/Immigration Services",
  list: [
    {
      id: 1,
      icon: <MdMapsHomeWork />,
      img: prVisa,
      href: "/services/application-submission",
      title: "PR Visa",
      para:
        "PR lets you live and work in another country for a long time. It gives you many benefits, like healthcare and education.",
    },

    {
      id: 2,
      icon: <GrUserWorker />,
      img: workVisa,
      href: "/services/application-submission",
      title: "Work Visa",
      para:
        "A work visa allows you to do a job in a foreign country. It’s for people who want to work and earn abroad.",
    },

    {
      id: 3,
      icon: <BiMaleFemale />
,
      img: spouseVisa,
      href: "/services/application-submission",
      title: "Spouse Visa",
      para:
        "A spouse visa helps you join your husband or wife living in another country. It lets you stay and live together legally.",
    },

    {
      id: 4,
      icon: <MdTour />,
      img: touristVisa,
      href: "/services/post-landing",
      title: "Tourist Visa",
      para:
        "A tourist visa is for short trips to travel and explore a new country. It’s great for holidays, sightseeing, and visits.",
    },

    {
      id: 5,
      icon: <BiMaleFemale />,
      img: spouseVisa,
      href: "/services/application-submission",
      title: "Spouse Visa",
      para:
        "A spouse visa brings families together across borders. It allows married couples to live in the same country.",
    },

    {
      id: 6,
      icon: <MdBusinessCenter />
,
      img: businesVisa,
      href: "/services/application-submission",
      title: "Business & Investor Visa",
      para:
        "This visa is for people who want to start a business or invest in another country. It offers great chances for business growth.",
    },
  ],
};

export const countDownData = [
  { id: 1, icon: <FaAward />
, title: "Years of Exp", Value: 10, value2: "+" },
  {
    id: 2,
    icon: <BsPeopleFill />
,
    title: "Happy Clients",
    Value: 50,
    value2: "k+",
  },
  {
    id: 3,
    icon: <GiWorld />,
    title: "Countries Served",
    Value: 20,
    value2: "+",
  },
  {
    id: 4,
    icon:<GrVisa />
,
    title: "Visa Success Rate",
    Value: 99,
    value2: "%",
  },
];

export const choosecountry = {
  title1: "Choose Your Country",
  title2: "Select your desired country to explore visa.",
  countries: [
    {
      id: 1,
      name: "Canada",
      img: canada,
      flag: canadaflag,
      href: "#",
      para: "Move to Canada for great jobs and a better lifestyle.",
    },
    {
      id: 2,
      name: "Australia",
      img: aus,
      flag: ausflag,
      href: "#",
      para: "Live in Australia and enjoy work, nature, and sunny beaches.",
    },
    {
      id: 3,
      name: "Italy",
      img: italy,
      flag: italyflag,
      href: "#",
      para: "Settle in Italy to enjoy rich culture and beautiful cities.",
    },
    {
      id: 4,
      name: "Germany",
      img: germany,
      flag: gerflag,
      href: "#",
      para: "Germany offers top education, strong jobs, and a safe life.",
    },
    {
      id: 5,
      name: "Portugal",
      img: portugal,
      flag: portflag,
      href: "#",
      para: "Enjoy peaceful living and golden visas in Portugal.",
    },
    {
      id: 6,
      name: "Sweden",
      img: sweden,
      flag: swedenflag,
      href: "#",
      para: "Live in Sweden with a high quality of life and safety.",
    },
    {
      id: 7,
      name: "Europe",
      img: europe,
      flag: euroflag,
      href: "#",
      para: "Explore multiple countries with easy travel across Europe.",
    },
    {
      id: 8,
      name: "Singapore",
      img: singapore,
      flag: singapoflag,
      href: "#",
      para: "Work and grow in Singapore’s clean, modern, and smart city.",
    },
    {
      id: 9,
      name: "United Kingdom",
      img: uk,
      flag: ukflag,
      href: "#",
      para: "Build your future in the UK with top opportunities.",
    },
    {
      id: 10,
      name: "France",
      img: france,
      flag: franceflag,
      href: "#",
      para: "Live in France and enjoy art, food, and family life.",
    },
    {
      id: 11,
      name: "Netherlands",
      img: nether,
      flag: netherflag,
      href: "#",
      para: "Move to the Netherlands for work, study, and calm living.",
    },
    {
      id: 12,
      name: "Spain",
      img: spain,
      flag: spainflag,
      href: "#",
      para: "Spain offers warm weather, rich culture, and an easy lifestyle.",
    },
  ],
};

export const workingProcess = {
  title1: "Our Working Process",
  title2: "Easy 4-Step Process to Get Your Visa",
  para:
    "We guide you through each step of the visa process with clear and simple support.",
  steps: [
    {
      id: 1,
      name: "Pick the Right Visa",
      para:
        "Choose the visa that matches why you're going, like for study, job, travel, or moving to another country. ",
    },
    {
      id: 2,
      name: "Collect Your Documents",
      para:
        "Get your papers ready, like your passport, proof of money, and letters from schools or companies. ",
    },
    {
      id: 3,
      name: "Send Your Application",
      para:
        "Fill out the form online or at a visa center, pay the fee, and book an interview if needed. ",
    },
    {
      id: 4,
      name: "Go for the Interview & Wait",
      para:
        "If needed, go to your interview, give your fingerprints, and then wait for the visa result or next steps. ",
    },
  ],
};

export const coachingofferdata = {
  title1: "Coaching We Offer",
  title2: "Training That Prepares You for Your Future",
  para:
    "We offer easy-to-understand coaching to help you succeed abroad. With the right training, you’ll feel confident and fully prepared.",
  coaching: [
    {
      id: 1,
      name: "IELTS General",
      img: ielts,
      href: "#",
      para: "A popular English test for work and immigration purposes.",
    },
    {
      id: 2,
      name: "PTE Core",
      img: pte,
      href: "#",
      para: "A computer-based English test is accepted for Canadian PR.",
    },
    {
      id: 3,
      name: "CELPIP",
      img: celpip,
      href: "#",
      para: "An English test used mainly for Canadian immigration.",
    },
    {
      id: 4,
      name: "TEF",
      img: tef,
      href: "#",
      para: "A French language test is required for Canadian immigration.",
    },
  ],
};

export var faqData = {
  img: faq1,
  img2: faq2,
  title1: "Frequently Asked Questions",
  title2: "We answer all your immigration questions.",
       questions: [
  {
    id: 1,
    que: "How can I apply for permanent residency (PR) through an immigration consultant in Delhi?",
    ans: "The best immigration consultants in Delhi will guide you step-by-step—from profile assessment to document submission—helping you apply for PR in countries like Canada, Australia, or Germany with ease.",
  },
  {
    id: 2,
    que: "Do I need a job offer to apply for a work permit?",
    ans: "In most cases, yes. A job offer from an approved employer is required for a work permit, but your consultant can help you explore countries and programs where it's not always mandatory.",
  },
  {
    id: 3,
    que: "How do I know if an immigration consultants in Delhi is trustworthy?",
    ans: "Look for licensed consultants with good reviews, success stories, and transparent services. The best immigration consultants in Delhi offer honest advice, clear fees, and end-to-end support.",
  },
  {
    id: 4,
    que: "Can the same consultant help with both PR and work visas?",
    ans: "Yes! A professional immigration consultant can help with both PR and work visa applications, depending on your profile and goals, making your process easier and more reliable.",
  },
]
};

export const whychoose = {
  img: person,
  img2: about1,
  title1: "Why Choose Us",
  title2: "Trusted by Thousands for Easy Visa Support",
  para:
    "People choose us because we are among the best immigration consultants in Delhi, offering trusted, easy, and fast visa support.",
  vision: [
    {
      id: 1,
      icon: <BsPersonFillCheck />,
      heading: "Experts Help",
      text:
        "Get advice from experienced visa experts who know the process well.",
    },
    {
      id: 2,
      icon: <IoSettingsSharp />
,
      heading: "Personalized Solutions",
      text:
        "We plan your visa journey based on your personal goals and profile.",
    },
    {
      id: 3,
      icon: <BsGraphUpArrow />,
      heading: "High Success Rate",
      text: "Most of our clients get approved, thanks to our expert handling.",
    },
    {
      id: 4,
      icon: <FaCheckCircle />,
      heading: "Clear Process",
      text:
        "No hidden costs. We explain everything clearly from start to finish.",
    },
    {
      id: 5,
      icon: <MdSupportAgent />,
      heading: "End-to-End Support",
      text:
        "We help you at every step—from documents to approval and even after you land.",
    },
  ],
};

export const testimonialdata = {
  title1: "Client Testimonials",
  title2: "Real Feedback from Our Trusted Clients",
  testimonials: [
    {
      id: 1,
      img: testm2,
      name: "Shivam Goyal",
      para:
        "Globesway Immigration is truly one of the best immigration consultants in Delhi. They explained everything clearly and guided me step by step through my Canada PR process. I got my approval without stress, and I’m so thankful for their support.",
    },

    {
      id: 2,
      img: testf,
      name: "Varsha Dagar",
      para:
        "I chose Globesway because they’re known as the best immigration consultants in Delhi, and they truly lived up to it. The team made my Australia work permit application simple and easy to follow. They answered all my doubts and helped me get things done on time.",
    },

    {
      id: 3,
      img: testm,
      name: "Pritam Jha",
      para:
        "For anyone looking to work in Germany, I highly recommend Globesway—the best immigration consultants in Delhi. Their expert team simplified the process and supported me at every step.",
    },

    {
      id: 4,
      img: testf2,
      name: "Meenakshi Tiwari",
      para:
        "Getting my Singapore tourist visa was quick and easy with Globesway. As one of the best immigration consultants in Delhi, their team kept me informed and made the experience smooth.",
    },
  ],
};

export const teamdata = {
  title1: "MEET OUR TEAM",
  title2: "Our Trusted Experts, Visa Consultants Team",
  team: [
    { id: 1, img: team1, name: "Shreshth Taneja", para: "Founder & CEO" },

    { id: 2, img: team2, name: "Rakshita Sobhti", para: "Ops Manager" },

    { id: 3, img: team1, name: "Sahiba", para: "Case Manager" },

    { id: 4, img: team1, name: "Shudhi Taneja", para: "Managing Director" },
  ],
};



export const footer = {
  logo: logo2,
  text:
    "We work with passion to make immigration easy and help people start a new life in another country.",

  socials: {
    facebook: "https://www.facebook.com/globeswayimmigration",
    twitter: "https://www.youtube.com/@GlobeswayImmigration",
    instagram: "https://www.instagram.com/globeswayimmigration/",
    linkedin: "https://www.linkedin.com/company/globesway-immigration/posts/?feedView=all",
    youtube: "https://www.youtube.com/@GlobeswayImmigration",
  },
  copyrightText: "Copyrights © 2024 . Designed and Manage by ",

  list2: {
    title: "Migrate",
    links: [
    
       {
              id: 2,
              label: "Atlantic Immigration Pilot",
              href: "/visa/Atlantic Immigration Pilot",
            },
            { id: 3, label: "Caregivers", href: "/visa/Caregivers" },
            {
              id: 4,
              label: "Canada Agri-Food Pilot",
              href: "/visa/Canada Agri-Food Pilot",
            },
                    { id: 5, label: "Dubai Work Visa", href: "/visa/Dubai Work Visa" },

                      { id: 6, label: "Qatar Work Visa", href: "/visa/Qatar Work Visa" },

      { id: 7, label: "Netherlands", href: "/visa/Netherlands Work Visa" },
            { id: 8, label: "Germany", href: "/visa/Germany Work Visa" },
    ],
  },

  list3: {
    title: "Services",
    links: [
      { id: 1, label: "Post Landing", href: "/services/Post-Landing Services" },
        { id: 2, label: "IELTS", href: "/services/IELTS Training Services" },
        { id: 3, label: "PTE", href: "/services/PTE (Pearson Test of English)" },
        { id: 4, label: "CELPIP", href: "/services/CELPIP (Canadian English Language Proficiency Index Program)" },
        { id: 5, label: "Immigration Services", href: "/services/Immigration Services" },
        {
          id: 6,
          label: "Career Counselling",
          href: "/services/Career Counselling",
        },

        {
          id: 8,
          label: "Visa Documentation",
          href: "/services/Visa Documentation",
        },
    ],
  },

  newLetter: {
    title: "Contact Us",
  },
};

// about us
export const aboutsec1 = {
  img1: about1,
  img2: about1,
  title1: "Who Are We",
  title2: "Award Winning & Immigration Consultants",
  title3: "The Best in Visa & Immigration Consultants in Delhi",
  para:
    "At Globesway Immigration, the best immigration consultants in Delhi. We’ve been helping people achieve their global dreams. With a decade of experience, our dedicated team ensures a smooth, hassle-free process for every client. Whether it's a tourist visa, work permit, or permanent residency, we handle every step with care and precision. Your journey begins with trusted experts who put your success first.",
  points: [
    {
      id: 1,
      text: "Fast Application Processing",
    },
    {
      id: 2,
      text: "High Approval Success Rate",
    },
    {
      id: 3,
      text: "Personalized Support at Every Step",
    },
    {
      id: 4,
      text: "100% Transparency & Updates",
    },
    {
      id: 5,
      text: "Affordable & Honest Pricing",
    },
    {
      id: 6,
      text: "8+ Years of Trusted Experience",
    },
  ],
};

export const aboutchoose = {
  img1: about1,
  img2: about4,
  img3: about2,

  title1: "Why Choose Us?",
  title2: "Trusted by Thousands for Smooth Visa Support",
  para:
    "People trust Globesway Immigration, the best immigration consultant in Delhi. We ensure that the visa process is easy, fast, and transparent. Being the best immigration consultants in Delhi, we are with you all the way.",
  points: [
    {
      id: 1,
      icon: <BsPersonFillCheck />
,
      heading: "Expert Guidance",
      text:
        "Our team is familiar with the visa procedure and provides the appropriate advice.",
    },
    {
      id: 2,
      icon: <FaLightbulb />,
      heading: "Custom Plans",
      text:
        "We develop a visa program that is tailored to your objectives and experiences.",
    },
    {
      id: 3,
      icon: <BsBarChartFill />,
      heading: "Great Success Rate",
      text:
        "We are careful with what we do and most of our clients are approved.",
    },
    {
      id: 4,
      icon: <PiStepsFill />
,
      heading: "Clear Steps",
      text:
        "No confusion or hidden costs—we explain everything in simple terms.",
    },
    {
      id: 5,
      icon: <MdSupportAgent />,
      heading: "Full Support",
      text:
        "We guide you at every step, starting with selecting the proper visa to landing in the foreign country.",
    },
  ],
};

// contact page
export const contactsec1 = {
  title: "Contact Us",
  para:
    "Please contact us, We are sure that you can receive our reply as soon as possible.",
  detail: [
    {
      id: 1,
      icon: <MdWifiCalling3 />,
      title: "Call Us",
      text: "+9192202 92921",
      slug: "tel:+9192202 92921",
    },
    {
      id: 2,
      icon: <MdAttachEmail />,
      title: "Email Us",
      text: "hello@globesway.com",
      slug: "mailto:hello@globesway.com",
    },
    {
      id: 3,
      icon: <FaMapLocationDot />,
      title: "Address",
      text: "Office no. 887, 8th Floor, AGGARWAL MILLENIUM TOWER, II, Netaji Subhash Place, Pitampura, New Delhi, Delhi, 110034",
      slug:
        "https://www.google.com/maps/dir//Office+no.+887,+8th+Floor,+AGGARWAL+MILLENIUM+TOWER,+II,+Netaji+Subhash+Place,+Pitampura,+New+Delhi,+Delhi,+110034/@28.693772,77.0674182,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x390d034f8893d0cd:0x9f30cf26433038ae!2m2!1d77.1498196!2d28.693797?entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D",
    },
  ],
};


export const FootsecMenu =[
    {
      id: 1,
      label: "Migrate",
      href: "#",
      subNav: [
        {
          id: 1,
          label: "Canada",
          href: "#",
          subNav: [
            {
              id: 1,
              label: "Canada Permanent Residency Visa",
              href: "/visa/Canada PR Visa",
            },
            {
              id: 2,
              label: "Canada Express Entry",
              href: "/visa/Canada Express Entry",
            },
            {
              id: 3,
              label: "Canada Family Sponsorship",
              href: "/visa/Canada Family Sponsorship",
            },
            {
              id: 4,
              label: "Atlantic Immigration Pilot",
              href: "/visa/Atlantic Immigration Pilot",
            },
            { id: 5, label: "Caregivers", href: "/visa/Caregivers" },
            {
              id: 6,
              label: "Canada Agri-Food Pilot",
              href: "/visa/Canada Agri-Food Pilot",
            },
            {
              id: 7,
              label: "Canada Refugees & Asylum",
              href: "/visa/Canada Refugees & Asylum",
            },
            {
              id: 8,
              label: "Canada Work Permit Visa",
              href: "/visa/Canada Work Permit Visa",
            },
            {
              id: 9,
              label: "Canada Tourist Visa",
              href: "/visa/Canada Tourist Visa",
            },
          ],
        },
        {
          id: 2,
          label: "Australia",
          href: "#",
          subNav: [
            {
              id: 1,
              label: "Australia Permanent Residency Visa",
              href: "/visa/Australia PR Visa",
            },
            {
              id: 2,
              label: "Employer Nomination Subclass 186",
              href: "/visa/Employer Nomination Scheme Visa (Subclass 186)",
            },
            {
              id: 3,
              label: "Skilled Independent Visa Subclass 189",
              href: "/visa/Skilled Independent Visa (Subclass 189)",
            },
            {
              id: 4,
              label: "Skilled Nominated Visa Subclass 190",
              href: "/visa/Skilled Nominated Visa Subclass 190",
            },
            {
              id: 5,
              label: "Skilled Work Regional Visa Subclass 491",
              href: "/visa/Skilled Work Regional Visa (Subclass 491)",
            },
            {
              id: 6,
              label: "Skills in Demand Visa Subclass 482",
              href: "/visa/Temporary Skill Shortage (TSS) Visa – Subclass 482",
            },
            {
              id: 7,
              label: "Visitor Visa Subclass 600",
              href: "/visa/Visitor Visa Subclass 600",
            },
            {
              id: 8,
              label: "Partner Visa Subclass 820",
              href: "/visa/Partner Visa Subclass 820",
            },
            {
              id: 9,
              label: "Australia Tourist Visa",
              href: "/visa/Australia Tourist Visa",
            },
          ],
        },
        {
          id: 3,
          label: "Europe",
          href: "#",
          subNav: [
            { id: 1, label: "Croatia", href: "/visa/Croatia Work Visa" },
            { id: 2, label: "Serbia", href: "/visa/Serbia Work Visa" },
            { id: 3, label: "Romania", href: "/visa/Romania Work Visa" },
            { id: 4, label: "Poland", href: "/visa/Poland Work Visa" },
            { id: 5, label: "Norway", href: "/visa/Norway Work Visa" },
            { id: 6, label: "Greece", href: "/visa/Greece Work Visa" },
            { id: 7, label: "Netherlands", href: "/visa/Netherlands Work Visa" },
            { id: 8, label: "Germany", href: "/visa/Germany Work Visa" },
            { id: 9, label: "Luxembourg", href: "/visa/Luxembourg Work Visa" },
            { id: 10, label: "Ireland", href: "/visa/Ireland Work Visa" },
            { id: 11, label: "UK", href: "/visa/UK Work Visa" },
          ],
        },
        {
          id: 4,
          label: "Gulf Nations",
          href: "/visa/gulf-nations",
          subNav: [
            { id: 1, label: "Dubai", href: "#",
               subNavv: [
                 { id: 1, label: "Dubai Work Visa", href: "/visa/Dubai Work Visa" },
                 { id: 2, label: "Dubai Tourist Visa", href: "/visa/Dubai Tourist Visa" },
               ]
             },
            { id: 2, label: "Qatar", href: "#",
               subNavv: [
                 { id: 1, label: "Qatar Work Visa", href: "/visa/Qatar Work Visa" },
                 { id: 2, label: "Qatar Tourist Visa", href: "/visa/Qatar Tourist Visa" },
               ]
            },
          ],
        },
      ],
    },

    {
      id: 3,
      label: "Work Permit",
      href: "#",
      subNav: [
        { id: 1, label: "Canada Work Permit Visa", href: "/visa/Canada Work Permit Visa" },
        { id: 2, label: "Australia Work Permit Visa", href: "/visa/Australia Work Permit Visa" },
        { id: 3, label: "Croatia Work Visa", href: "/visa/Croatia Work Visa" },
        { id: 4, label: "Serbia Work Visa", href: "/visa/Serbia Work Visa" },
        { id: 5, label: "Romania Work Visa", href: "/visa/Romania Work Visa" },
        { id: 6, label: "Poland Work Visa", href: "/visa/Poland Work Visa" },
        { id: 7, label: "Norway Work Visa", href: "/visa/Norway Work Visa" },
        { id: 8, label: "Greece Work Visa", href: "/visa/Greece Work Visa" },
        { id: 9, label: "Netherlands Work Visa", href: "/visa/Netherlands Work Visa" },
        { id: 10, label: "Germany Work Visa", href: "/visa/Germany Work Visa" },
        { id: 11, label: "Luxembourg Work Visa", href: "/visa/Luxembourg Work Visa" },
        { id: 12, label: "Ireland Work Visa", href: "/visa/Ireland Work Visa" },
        { id: 13, label: "UK Work Visa", href: "/visa/UK Work Visa" },
      ],
    },

    {
      id: 5,
      label: "PNP Programs",
      href: "#",
      subNav: [
        { id: 1, label: "Manitoba PNP Program", href: "/visa/Manitoba PNP" },
        { id: 2, label: "Yukon Nominee Program", href: "/visa/Yukon Nominee Program" },
        { id: 3, label: "Ontario PNP Program", href: "/visa/Ontario Provincial Nominee Program" },
        { id: 4, label: "Nova Scotia PNP", href: "/visa/Nova Scotia PNP" },
        { id: 5, label: "Alberta PNP Program", href: "/visa/Alberta PNP (AAIP)" },
        { id: 6, label: "BC PNP Program", href: "/visa/British Columbia PNP" },
        { id: 7, label: "Quebec Skilled Worker Program", href: "/visa/Quebec Skilled Worker Program" },
        { id: 8, label: "Saskatchewan PNP", href: "/visa/Saskatchewan Provincial Nominee Program" },
        {
          id: 9,
          label: "New Brunswick PNP Program",
          href: "/visa/New Brunswick PNP",
        },
        {
          id: 10,
          label: "Atlantic Immigration Program",
          href: "/visa/Atlantic Immigration Program",
        },
        { id: 11, label: "PEI PNP Program", href: "/visa/Prince Edward Island PNP" },
        { id: 12, label: "NLPNP Program", href: "/visa/Newfoundland & Labrador PNP" },
      ],
    },

    {
      id: 6,
      label: "Points Calculator",
      href: "#",
      subNav: [
        { id: 1, label: "CRS Calculator", href: "/visa/CRS Calculator for Canada Immigration" },
       
        { id: 3, label: "SINP Points Calculator", href: "/visa/Saskatchewan Immigrant Nominee Program Points Calculator" },
        { id: 4, label: "BC Points Calculator", href: "/visa/British Columbia (BC) PNP Points Calculator" },
        {
          id: 5,
          label: "Manitoba Points Calculator",
          href: "/visa/Manitoba Points Calculator",
        },
        {
          id: 6,
          label: "Nova Scotia Points Calculator",
          href: "/visa/Nova Scotia Points Calculator",
        },
        { id: 7, label: "Alberta Points Calculator", href: "/visa/Alberta Points Calculator (Alberta Advantage Immigration Program)" },
        { id: 8, label: "Ontario Points Calculator", href: "/visa/Ontario Points Calculator" },
        { id: 9, label: "Quebec Points Calculator", href: "/visa/Quebec Points Calculator" },
      ],
    },
     {
      id: 4,
      label: "Tourist Visa",
      href: "#",
      subNav: [
        { id: 1, label: "Canada Tourist Visa", href: "/visa/Canada Tourist Visa" },
        { id: 2, label: "Australia Tourist Visa", href: "/visa/Australia Tourist Visa" },
        { id: 3, label: "Dubai Tourist Visa", href: "/visa/Dubai Tourist Visa" },
        { id: 4, label: "Europe Tourist Visa", href: "/visa/Europe Tourist Visa" },
      ],
    },
  {
      id: 2,
      label: "PR Visa",
      href: "#",
      subNav: [
        { id: 1, label: "Canada PR Visa", href: "/visa/Canada PR Visa" },
        { id: 2, label: "Australia PR Visa", href: "/visa/Australia PR Visa" },
      ],
    },
  
  ];

    export  const successstory = [
    { id: 1, text: "https://youtube.com/shorts/74vlFTJkSA0?si=_2hDpBGZIBLAONgO" },
    { id: 2, text: "https://youtube.com/shorts/rP8UpKoWWP0?si=vpZsHgjt9yZV6HiG" },
    { id: 3, text: "https://youtube.com/shorts/erYgw-0lnjg?si=kYIvH3SbN0K2iy0S" },
    { id: 4, text: "https://youtube.com/shorts/DyHzebnvPJ8?si=IeFw-u5UQrSL88-i" },
    { id: 5, text: "https://youtube.com/shorts/rP8UpKoWWP0?si=vpZsHgjt9yZV6HiG" },
    { id: 6, text: "https://youtube.com/shorts/erYgw-0lnjg?si=kYIvH3SbN0K2iy0S" },
  ];