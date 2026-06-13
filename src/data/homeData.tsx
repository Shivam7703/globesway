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
  banner3,
  banner,
  about4,
  banner4,
  shresth,
  documentation1,
  cofounder,
} from "@/assets";
import { animate } from "motion";
import { BiMaleFemale } from "react-icons/bi";
import {
  BsBarChartFill,
  BsGraphUpArrow,
  BsPeopleFill,
  BsPersonFillCheck,
} from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";

import { FaAward, FaLightbulb, FaMapLocationDot } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { GrUserWorker, GrVisa } from "react-icons/gr";
import { IoSettingsSharp } from "react-icons/io5";
import {
  MdAttachEmail,
  MdBusinessCenter,
  MdMapsHomeWork,
  MdSupportAgent,
  MdTour,
  MdWifiCalling3,
} from "react-icons/md";
import { PiStepsFill } from "react-icons/pi";

export const navigationMenu = {
  primaryMenu: [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About Us", href: "/about-us" },
    {
      id: 33,
      label: "Services",
      href: "#",
      subNav: [
        {
          id: 1,
          label: "Post Landing",
          href: "/services/post-landing-services",
        },
        { id: 2, label: "IELTS", href: "/services/ielts-training-services" },
        { id: 3, label: "PTE", href: "/services/pte-pearson-test-of-english" },
        {
          id: 4,
          label: "CELPIP",
          href:
            "/services/celpip-canadian-english-language-proficiency-index-program",
        },
        {
          id: 5,
          label: "Immigration Services",
          href: "/services/immigration-services",
        },
        {
          id: 6,
          label: "Career Counselling",
          href: "/services/career-counselling",
        },
        {
          id: 7,
          label: "Profile Marketing & Job Assistance",
          href: "/services/profile-marketing-job-assistance",
        },
        {
          id: 8,
          label: "Visa Documentation",
          href: "/services/visa-documentation",
        },
      ],
    },
    { id: 4, label: "Blogs", href: "/blogs" },
    { id: 5, label: "Contact Us", href: "/contact-us" },
    { id: 6, label: "Pay Now", href: "/payment", animate: true },
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
              href: "/visa/canada-pr-visa",
            },
            {
              id: 2,
              label: "Canada Express Entry",
              href: "/visa/canada-express-entry",
            },
            {
              id: 3,
              label: "Canada Family Sponsorship",
              href: "/visa/canada-family-sponsorship",
            },
            {
              id: 4,
              label: "Atlantic Immigration Pilot",
              href: "/visa/atlantic-immigration-pilot",
            },
            { id: 5, label: "Caregivers", href: "/visa/caregivers" },
            {
              id: 6,
              label: "Canada Agri-Food Pilot",
              href: "/visa/canada-agri-food-pilot",
            },
            {
              id: 7,
              label: "Canada Refugees & Asylum",
              href: "/visa/canada-refugees-asylum",
            },
            {
              id: 8,
              label: "Canada Work Permit Visa",
              href: "/visa/canada-work-permit-visa",
            },
            {
              id: 9,
              label: "Canada Tourist Visa",
              href: "/visa/canada-tourist-visa",
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
              href: "/visa/australia-pr-visa",
            },
            {
              id: 2,
              label: "Employer Nomination Subclass 186",
              href: "/visa/employer-nomination-scheme-visa-subclass-186",
            },
            {
              id: 3,
              label: "Skilled Independent Visa Subclass 189",
              href: "/visa/skilled-independent-visa-subclass-189",
            },
            {
              id: 4,
              label: "Skilled Nominated Visa Subclass 190",
              href: "/visa/skilled-nominated-visa-subclass-190",
            },
            {
              id: 5,
              label: "Skilled Work Regional Visa Subclass 491",
              href: "/visa/skilled-work-regional-visa-subclass-491",
            },
            {
              id: 6,
              label: "Skills in Demand Visa Subclass 482",
              href: "/visa/temporary-skill-shortage-tss-visa-subclass-482",
            },
            {
              id: 7,
              label: "Visitor Visa Subclass 600",
              href: "/visa/visitor-visa-subclass-600",
            },
            {
              id: 8,
              label: "Partner Visa Subclass 820",
              href: "/visa/partner-visa-subclass-820",
            },
            {
              id: 9,
              label: "Australia Tourist Visa",
              href: "/visa/australia-tourist-visa",
            },
          ],
        },
        {
          id: 3,
          label: "Europe",
          href: "#",
          subNav: [
            { id: 1, label: "Croatia", href: "/visa/croatia-work-visa" },
            { id: 2, label: "Serbia", href: "/visa/serbia-work-visa" },
            { id: 3, label: "Romania", href: "/visa/romania-work-visa" },
            { id: 4, label: "Poland", href: "/visa/poland-work-visa" },
            { id: 5, label: "Norway", href: "/visa/norway-work-visa" },
            { id: 6, label: "Greece", href: "/visa/greece-work-visa" },
            {
              id: 7,
              label: "Netherlands",
              href: "/visa/netherlands-work-visa",
            },
            { id: 8, label: "Germany", href: "/visa/germany-work-visa" },
            { id: 9, label: "Luxembourg", href: "/visa/luxembourg-work-visa" },
            { id: 10, label: "Ireland", href: "/visa/ireland-work-visa" },
            { id: 11, label: "UK", href: "/visa/uk-work-visa" },
          ],
        },
        {
          id: 4,
          label: "Gulf Nations",
          href: "/visa/gulf-nations",
          subNav: [
            {
              id: 1,
              label: "Dubai",
              href: "#",
              subNavv: [
                {
                  id: 1,
                  label: "Dubai Work Visa",
                  href: "/visa/dubai-work-visa",
                },
                {
                  id: 2,
                  label: "Dubai Tourist Visa",
                  href: "/visa/dubai-tourist-visa",
                },
              ],
            },
            {
              id: 2,
              label: "Qatar",
              href: "#",
              subNavv: [
                {
                  id: 1,
                  label: "Qatar Work Visa",
                  href: "/visa/qatar-work-visa",
                },
                {
                  id: 2,
                  label: "Qatar Tourist Visa",
                  href: "/visa/qatar-tourist-visa",
                },
              ],
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
        { id: 1, label: "Canada PR Visa", href: "/visa/canada-pr-visa" },
        { id: 2, label: "Australia PR Visa", href: "/visa/australia-pr-visa" },
      ],
    },

    {
      id: 3,
      label: "Work Permit",
      href: "#",
      subNav: [
        {
          id: 1,
          label: "Canada Work Permit Visa",
          href: "/visa/canada-work-permit-visa",
        },
        {
          id: 2,
          label: "Australia Work Permit Visa",
          href: "/visa/australia-work-permit-visa",
        },
        { id: 3, label: "Croatia Work Visa", href: "/visa/croatia-work-visa" },
        { id: 4, label: "Serbia Work Visa", href: "/visa/serbia-work-visa" },
        { id: 5, label: "Romania Work Visa", href: "/visa/romania-work-visa" },
        { id: 6, label: "Poland Work Visa", href: "/visa/poland-work-visa" },
        { id: 7, label: "Norway Work Visa", href: "/visa/norway-work-visa" },
        { id: 8, label: "Greece Work Visa", href: "/visa/greece-work-visa" },
        {
          id: 9,
          label: "Netherlands Work Visa",
          href: "/visa/netherlands-work-visa",
        },
        { id: 10, label: "Germany Work Visa", href: "/visa/germany-work-visa" },
        {
          id: 11,
          label: "Luxembourg Work Visa",
          href: "/visa/luxembourg-work-visa",
        },
        { id: 12, label: "Ireland Work Visa", href: "/visa/ireland-work-visa" },
        { id: 13, label: "UK Work Visa", href: "/visa/uk-work-visa" },
      ],
    },

    {
      id: 4,
      label: "Tourist Visa",
      href: "#",
      subNav: [
        {
          id: 1,
          label: "Canada Tourist Visa",
          href: "/visa/canada-tourist-visa",
        },
        {
          id: 2,
          label: "Australia Tourist Visa",
          href: "/visa/australia-tourist-visa",
        },
        {
          id: 3,
          label: "Dubai Tourist Visa",
          href: "/visa/dubai-tourist-visa",
        },
        {
          id: 4,
          label: "Europe Tourist Visa",
          href: "/visa/europe-tourist-visa",
        },
      ],
    },

    {
      id: 5,
      label: "PNP Programs",
      href: "#",
      subNav: [
        { id: 1, label: "Manitoba PNP Program", href: "/visa/manitoba-pnp" },
        {
          id: 2,
          label: "Yukon Nominee Program",
          href: "/visa/yukon-nominee-program",
        },
        {
          id: 3,
          label: "Ontario PNP Program",
          href: "/visa/ontario-provincial-nominee-program",
        },
        { id: 4, label: "Nova Scotia PNP", href: "/visa/nova-scotia-pnp" },
        { id: 5, label: "Alberta PNP Program", href: "/visa/alberta-pnp-aaip" },
        { id: 6, label: "BC PNP Program", href: "/visa/british-columbia-pnp" },
        {
          id: 7,
          label: "Quebec Skilled Worker Program",
          href: "/visa/quebec-skilled-worker-program",
        },
        {
          id: 8,
          label: "Saskatchewan PNP",
          href: "/visa/saskatchewan-provincial-nominee-program",
        },
        {
          id: 9,
          label: "New Brunswick PNP Program",
          href: "/visa/new-brunswick-pnp",
        },
        {
          id: 10,
          label: "Atlantic Immigration Program",
          href: "/visa/atlantic-immigration-program",
        },
        {
          id: 11,
          label: "PEI PNP Program",
          href: "/visa/prince-edward-island-pnp",
        },
        {
          id: 12,
          label: "NLPNP Program",
          href: "/visa/newfoundland-labrador-pnp",
        },
      ],
    },

    {
      id: 6,
      label: "Points Calculator",
      href: "#",
      subNav: [
        {
          id: 1,
          label: "CRS Calculator",
          href: "/visa/crs-calculator-for-canada-immigration",
        },
        {
          id: 2,
          label: "Canada 67 Points Calculator",
          href: "/visa/canada-67-points-calculator",
        },
        {
          id: 3,
          label: "SINP Points Calculator",
          href:
            "/visa/saskatchewan-immigrant-nominee-program-points-calculator",
        },
        {
          id: 4,
          label: "BC Points Calculator",
          href: "/visa/british-columbia-bc-pnp-points-calculator",
        },
        {
          id: 5,
          label: "Manitoba Points Calculator",
          href: "/visa/manitoba-points-calculator",
        },
        {
          id: 6,
          label: "Nova Scotia Points Calculator",
          href: "/visa/nova-scotia-points-calculator",
        },
        {
          id: 7,
          label: "Alberta Points Calculator",
          href:
            "/visa/alberta-points-calculator-alberta-advantage-immigration-program",
        },
        {
          id: 8,
          label: "Ontario Points Calculator",
          href: "/visa/ontario-points-calculator",
        },
        {
          id: 9,
          label: "Quebec Points Calculator",
          href: "/visa/quebec-points-calculator",
        },
      ],
    },

    {
      id: 7,
      label: "More",
      href: "#",
      subNav: [
        { id: 1, label: "Privacy & Policy", href: "/privacy-policy" },
        { id: 2, label: "Careers", href: "/career" },
        { id: 3, label: "Success Stories", href: "/success-stories" },
      ],
    },
  ],
};

export const BannerData = [
  {
    id: 1,
    img: banner4,
  },
  {
    id: 3,
    img: banner3,
  },
  {
    id: 4,
    img: banner,
  },
];
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
    { id: 3, value: "100%", text: "Transparency" },
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
      href: "/visa/canada-pr-visa/",
      title: "PR Visa",
      para:
        "PR lets you live and work in another country for a long time. It gives you many benefits, like healthcare and education.",
    },

    {
      id: 2,
      icon: <GrUserWorker />,
      img: workVisa,
      href: "/visa/canada-work-permit-visa/",
      title: "Work Visa",
      para:
        "A work visa allows you to do a job in a foreign country. It’s for people who want to work and earn abroad.",
    },

    {
      id: 3,
      icon: <BiMaleFemale />,
      img: spouseVisa,
      href: "/visa/canada-family-sponsorship/",
      title: "Spouse Visa",
      para:
        "A spouse visa helps you join your husband or wife living in another country. It lets you stay and live together legally.",
    },

    {
      id: 4,
      icon: <MdTour />,
      img: touristVisa,
      href: "/visa/canada-tourist-visa/",
      title: "Tourist Visa",
      para:
        "A tourist visa is for short trips to travel and explore a new country. It’s great for holidays, sightseeing, and visits.",
    },

    {
      id: 5,
      icon: <MdBusinessCenter />,
      img: businesVisa,
      href: "/visa/canada-work-permit-visa/",
      title: "Business & Investor Visa",
      para:
        "This visa is for people who want to start a business or invest in another country. It offers great chances for business growth.",
    },
  ],
};

export const countDownData = [
  { id: 1, icon: <FaAward />, title: "Years of Exp", Value: 8, value2: "+" },
  {
    id: 2,
    icon: <BsPeopleFill />,
    title: "Happy Clients",
    Value: 10,
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
    icon: <GrVisa />,
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
      href: "visa/canada-pr-visa/",
      para: "Move to Canada for great jobs and a better lifestyle.",
    },
    {
      id: 2,
      name: "Australia",
      img: aus,
      flag: ausflag,
      href: "visa/australia-pr-visa/",
      para: "Live in Australia and enjoy work, nature, and sunny beaches.",
    },
    {
      id: 3,
      name: "Italy",
      img: italy,
      flag: italyflag,
      href: "/contact-us/",
      para: "Settle in Italy to enjoy rich culture and beautiful cities.",
    },
    {
      id: 4,
      name: "Germany",
      img: germany,
      flag: gerflag,
      href: "/visa/germany-work-visa/",
      para: "Germany offers top education, strong jobs, and a safe life.",
    },
    {
      id: 5,
      name: "Portugal",
      img: portugal,
      flag: portflag,
      href: "/contact-us/",
      para: "Enjoy peaceful living and golden visas in Portugal.",
    },
    {
      id: 6,
      name: "Sweden",
      img: sweden,
      flag: swedenflag,
      href: "/contact-us/",
      para: "Live in Sweden with a high quality of life and safety.",
    },
    {
      id: 7,
      name: "Europe",
      img: europe,
      flag: euroflag,
      href: "visa/croatia-work-visa/",
      para: "Explore multiple countries with easy travel across Europe.",
    },
    {
      id: 8,
      name: "Singapore",
      img: singapore,
      flag: singapoflag,
      href: "/contact-us/",
      para: "Work and grow in Singapore’s clean, modern, and smart city.",
    },
    {
      id: 9,
      name: "United Kingdom",
      img: uk,
      flag: ukflag,
      href: "visa/uk-work-visa/",
      para: "Build your future in the UK with top opportunities.",
    },
    {
      id: 10,
      name: "France",
      img: france,
      flag: franceflag,
      href: "/contact-us/",
      para: "Live in France and enjoy art, food, and family life.",
    },
    {
      id: 11,
      name: "Netherlands",
      img: nether,
      flag: netherflag,
      href: "visa/netherlands-work-visa/",
      para: "Move to the Netherlands for work, study, and calm living.",
    },
    {
      id: 12,
      name: "Spain",
      img: spain,
      flag: spainflag,
      href: "/contact-us/",
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
      href: "services/ielts-training-services/",
      para: "A popular English test for work and immigration purposes.",
    },
    {
      id: 2,
      name: "PTE Core",
      img: pte,
      href: "services/pte-pearson-test-of-english/",
      para: "A computer-based English test is accepted for Canadian PR.",
    },
    {
      id: 3,
      name: "CELPIP",
      img: celpip,
      href:
        "services/celpip-canadian-english-language-proficiency-index-program/",
      para: "An English test used mainly for Canadian immigration.",
    },
    {
      id: 4,
      name: "TEF",
      img: tef,
      href: "services/immigration-services/",
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
      que:
        "How can I apply for permanent residency (PR) through an immigration consultant in Delhi?",
      ans:
        "The best immigration consultants in Delhi will guide you step-by-step—from profile assessment to document submission—helping you apply for PR in countries like Canada, Australia, or Germany with ease.",
    },
    {
      id: 2,
      que: "Do I need a job offer to apply for a work permit?",
      ans:
        "In most cases, yes. A job offer from an approved employer is required for a work permit, but your consultant can help you explore countries and programs where it's not always mandatory.",
    },
    {
      id: 3,
      que:
        "How do I know if an immigration consultants in Delhi is trustworthy?",
      ans:
        "Look for licensed consultants with good reviews, success stories, and transparent services. The best immigration consultants in Delhi offer honest advice, clear fees, and end-to-end support.",
    },
    {
      id: 4,
      que: "Can the same consultant help with both PR and work visas?",
      ans:
        "Yes! A professional immigration consultant can help with both PR and work visa applications, depending on your profile and goals, making your process easier and more reliable.",
    },
  ],
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
      icon: <IoSettingsSharp />,
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
      name: "Abhas Mishra",
      para:
        "The Globesway team is very professional, knowledgeable and patient. They commented on all the details regarding my visa application and everything was done carefully. I could say with pride that they are the best immigration consultants in Delhi. You will not regret choosing them.",
    },

    {
      id: 2,
      img: testf,
      name: "Simran Mehra",
      para:
        "Had a great experience with Globesway Immigration. I had applied for my US tourist visa through them and from my counsellor Sachin to the case manager everybody was very helpful and got my visa processed successfully.A big thank you to the team for making this possible",
    },

    {
      id: 3,
      img: testm,
      name: "Manit Goomber",
      para:
        "Im vry grateful to rakshita maam for her help and guidance to get my canada tourist visa in just first attempt. If anyone is looking for genuine service do contact rakshita maam and globesway Immigration…",
    },

    {
      id: 4,
      img: testf2,
      name: "Varsha Dagar",
      para:
        "I would like to thank team globesway for my success PR process for australia. My case was handled very smoothly. I was getting update at every interval. I would definitely recommend to people who are looking for genuine PR Consultants in Dlehi",
    },
  ],
};

export const teamdata = {
  title1: "MEET OUR TEAM",
  title2: "Our Trusted Experts, Visa Consultants Team",
  team: [
    { id: 1, img: shresth, name: "Shreshth Taneja", para: "Founder & CEO" },
    {
      id: 4,
      img: cofounder,
      name: "Rakshita Sobti",
      para: "Director & Co-Founder",
    },

    // { id: 2, img: ravi, name: "Ravi Kumar", para: "Branch Manager" },
    // { id: 3, img: sahiba, name: "Sahiba Kaur", para: "Documentation Manager" },
  ],
};

export const footer = {
  logo: logo2,
  text:
    "We work with passion to make immigration easy and help people start a new life in another country.",

  socials: {
    facebook: "https://www.facebook.com/globeswayimmigration",
    // twitter: "https://www.youtube.com/@GlobeswayImmigration",
    instagram: "https://www.instagram.com/globeswayimmigration/",
    linkedin:
      "https://www.linkedin.com/company/globesway-immigration/posts/?feedView=all",
    youtube: "https://www.youtube.com/@GlobeswayImmigration",
  },
  copyrightText: "Copyrights © 2025 . Designed and Manage by ",

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
      {
        id: 4,
        label: "CELPIP",
        href:
          "/services/CELPIP (Canadian English Language Proficiency Index Program)",
      },
      {
        id: 5,
        label: "Immigration Services",
        href: "/services/Immigration Services",
      },
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
  title2: "Award Winning  Immigration Consultants",
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
      icon: <BsPersonFillCheck />,
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
      icon: <PiStepsFill />,
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
      text: "info@globeswayimmigration.com",
      slug: "mailto:info@globeswayimmigration.com",
    },
    {
      id: 3,
      icon: <FaMapLocationDot />,
      title: "Address",
      text:
        " Office 905, 9th Floor, Gopal Heights, Netaji Subhash Place, Delhi-110034",
      slug:
        "https://www.google.com/maps/place/GLOBESWAY+IMMIGRATION+-+Best+Immigration+Consultants+%7C+Canada+PR+%26+Australia+PR+%7C+Visa+Consultants+In+Delhi/@28.6722542,77.1529361,13z/data=!4m10!1m2!2m1!1sOffice+905,+9th+Floor,+Gopal+Heights,+Netaji+Subhash+Place,+Delhi-110034!3m6!1s0x390d034f8893d0cd:0x9f30cf26433038ae!8m2!3d28.6914597!4d77.1503297!15sCkhPZmZpY2UgOTA1LCA5dGggRmxvb3IsIEdvcGFsIEhlaWdodHMsIE5ldGFqaSBTdWJoYXNoIFBsYWNlLCBEZWxoaS0xMTAwMzRaRiJEb2ZmaWNlIDkwNSA5dGggZmxvb3IgZ29wYWwgaGVpZ2h0cyBuZXRhamkgc3ViaGFzaCBwbGFjZSBkZWxoaSAxMTAwMzSSASZpbW1pZ3JhdGlvbl9hbmRfbmF0dXJhbGl6YXRpb25fc2VydmljZeABAA!16s%2Fg%2F11x7qhnmst?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D",
    },
  ],
};

export const FootsecMenu = [
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
            href: "/visa/canada-pr-visa",
          },
          {
            id: 2,
            label: "Canada Express Entry",
            href: "/visa/canada-express-entry",
          },
          {
            id: 3,
            label: "Canada Family Sponsorship",
            href: "/visa/canada-family-sponsorship",
          },
          {
            id: 4,
            label: "Atlantic Immigration Pilot",
            href: "/visa/atlantic-immigration-pilot",
          },
          { id: 5, label: "Caregivers", href: "/visa/caregivers" },
          {
            id: 6,
            label: "Canada Agri-Food Pilot",
            href: "/visa/canada-agri-food-pilot",
          },
          {
            id: 7,
            label: "Canada Refugees & Asylum",
            href: "/visa/canada-refugees-asylum",
          },
          {
            id: 8,
            label: "Canada Work Permit Visa",
            href: "/visa/canada-work-permit-visa",
          },
          {
            id: 9,
            label: "Canada Tourist Visa",
            href: "/visa/canada-tourist-visa",
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
            href: "/visa/australia-pr-visa",
          },
          {
            id: 2,
            label: "Employer Nomination Subclass 186",
            href: "/visa/employer-nomination-scheme-visa-subclass-186",
          },
          {
            id: 3,
            label: "Skilled Independent Visa Subclass 189",
            href: "/visa/skilled-independent-visa-subclass-189",
          },
          {
            id: 4,
            label: "Skilled Nominated Visa Subclass 190",
            href: "/visa/skilled-nominated-visa-subclass-190",
          },
          {
            id: 5,
            label: "Skilled Work Regional Visa Subclass 491",
            href: "/visa/skilled-work-regional-visa-subclass-491",
          },
          {
            id: 6,
            label: "Skills in Demand Visa Subclass 482",
            href: "/visa/temporary-skill-shortage-tss-visa-subclass-482",
          },
          {
            id: 7,
            label: "Visitor Visa Subclass 600",
            href: "/visa/visitor-visa-subclass-600",
          },
          {
            id: 8,
            label: "Partner Visa Subclass 820",
            href: "/visa/partner-visa-subclass-820",
          },
          {
            id: 9,
            label: "Australia Tourist Visa",
            href: "/visa/australia-tourist-visa",
          },
        ],
      },
      {
        id: 3,
        label: "Europe",
        href: "#",
        subNav: [
          { id: 1, label: "Croatia", href: "/visa/croatia-work-visa" },
          { id: 2, label: "Serbia", href: "/visa/serbia-work-visa" },
          { id: 3, label: "Romania", href: "/visa/romania-work-visa" },
          { id: 4, label: "Poland", href: "/visa/poland-work-visa" },
          { id: 5, label: "Norway", href: "/visa/norway-work-visa" },
          { id: 6, label: "Greece", href: "/visa/greece-work-visa" },
          { id: 7, label: "Netherlands", href: "/visa/netherlands-work-visa" },
          { id: 8, label: "Germany", href: "/visa/germany-work-visa" },
          { id: 9, label: "Luxembourg", href: "/visa/luxembourg-work-visa" },
          { id: 10, label: "Ireland", href: "/visa/ireland-work-visa" },
          { id: 11, label: "UK", href: "/visa/uk-work-visa" },
        ],
      },
      {
        id: 4,
        label: "Gulf Nations",
        href: "/visa/gulf-nations",
        subNav: [
          {
            id: 1,
            label: "Dubai",
            href: "#",
            subNavv: [
              {
                id: 1,
                label: "Dubai Work Visa",
                href: "/visa/dubai-work-visa",
              },
              {
                id: 2,
                label: "Dubai Tourist Visa",
                href: "/visa/dubai-tourist-visa",
              },
            ],
          },
          {
            id: 2,
            label: "Qatar",
            href: "#",
            subNavv: [
              {
                id: 1,
                label: "Qatar Work Visa",
                href: "/visa/qatar-work-visa",
              },
              {
                id: 2,
                label: "Qatar Tourist Visa",
                href: "/visa/qatar-tourist-visa",
              },
            ],
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
      {
        id: 1,
        label: "Canada Work Permit Visa",
        href: "/visa/canada-work-permit-visa",
      },
      {
        id: 2,
        label: "Australia Work Permit Visa",
        href: "/visa/australia-work-permit-visa",
      },
      { id: 3, label: "Croatia Work Visa", href: "/visa/croatia-work-visa" },
      { id: 4, label: "Serbia Work Visa", href: "/visa/serbia-work-visa" },
      { id: 5, label: "Romania Work Visa", href: "/visa/romania-work-visa" },
      { id: 6, label: "Poland Work Visa", href: "/visa/poland-work-visa" },
      { id: 7, label: "Norway Work Visa", href: "/visa/norway-work-visa" },
      { id: 8, label: "Greece Work Visa", href: "/visa/greece-work-visa" },
      {
        id: 9,
        label: "Netherlands Work Visa",
        href: "/visa/netherlands-work-visa",
      },
      { id: 10, label: "Germany Work Visa", href: "/visa/germany-work-visa" },
      {
        id: 11,
        label: "Luxembourg Work Visa",
        href: "/visa/luxembourg-work-visa",
      },
      { id: 12, label: "Ireland Work Visa", href: "/visa/ireland-work-visa" },
      { id: 13, label: "UK Work Visa", href: "/visa/uk-work-visa" },
    ],
  },

  {
    id: 5,
    label: "PNP Programs",
    href: "#",
    subNav: [
      { id: 1, label: "Manitoba PNP Program", href: "/visa/manitoba-pnp" },
      {
        id: 2,
        label: "Yukon Nominee Program",
        href: "/visa/yukon-nominee-program",
      },
      {
        id: 3,
        label: "Ontario PNP Program",
        href: "/visa/ontario-provincial-nominee-program",
      },
      { id: 4, label: "Nova Scotia PNP", href: "/visa/nova-scotia-pnp" },
      { id: 5, label: "Alberta PNP Program", href: "/visa/alberta-pnp-aaip" },
      { id: 6, label: "BC PNP Program", href: "/visa/british-columbia-pnp" },
      {
        id: 7,
        label: "Quebec Skilled Worker Program",
        href: "/visa/quebec-skilled-worker-program",
      },
      {
        id: 8,
        label: "Saskatchewan PNP",
        href: "/visa/saskatchewan-provincial-nominee-program",
      },
      {
        id: 9,
        label: "New Brunswick PNP Program",
        href: "/visa/new-brunswick-pnp",
      },
      {
        id: 10,
        label: "Atlantic Immigration Program",
        href: "/visa/atlantic-immigration-program",
      },
      {
        id: 11,
        label: "PEI PNP Program",
        href: "/visa/prince-edward-island-pnp",
      },
      {
        id: 12,
        label: "NLPNP Program",
        href: "/visa/newfoundland-labrador-pnp",
      },
    ],
  },

  {
    id: 6,
    label: "Points Calculator",
    href: "#",
    subNav: [
      {
        id: 1,
        label: "CRS Calculator",
        href: "/visa/crs-calculator-for-canada-immigration",
      },
      {
        id: 3,
        label: "SINP Points Calculator",
        href: "/visa/saskatchewan-immigrant-nominee-program-points-calculator",
      },
      {
        id: 4,
        label: "BC Points Calculator",
        href: "/visa/british-columbia-bc-pnp-points-calculator",
      },
      {
        id: 5,
        label: "Manitoba Points Calculator",
        href: "/visa/manitoba-points-calculator",
      },
      {
        id: 6,
        label: "Nova Scotia Points Calculator",
        href: "/visa/nova-scotia-points-calculator",
      },
      {
        id: 7,
        label: "Alberta Points Calculator",
        href:
          "/visa/alberta-points-calculator-alberta-advantage-immigration-program",
      },
      {
        id: 8,
        label: "Ontario Points Calculator",
        href: "/visa/ontario-points-calculator",
      },
      {
        id: 9,
        label: "Quebec Points Calculator",
        href: "/visa/quebec-points-calculator",
      },
    ],
  },

  {
    id: 4,
    label: "Tourist Visa",
    href: "#",
    subNav: [
      {
        id: 1,
        label: "Canada Tourist Visa",
        href: "/visa/canada-tourist-visa",
      },
      {
        id: 2,
        label: "Australia Tourist Visa",
        href: "/visa/australia-tourist-visa",
      },
      { id: 3, label: "Dubai Tourist Visa", href: "/visa/dubai-tourist-visa" },
      {
        id: 4,
        label: "Europe Tourist Visa",
        href: "/visa/europe-tourist-visa",
      },
    ],
  },
  {
    id: 2,
    label: "PR Visa",
    href: "#",
    subNav: [
      { id: 1, label: "Canada PR Visa", href: "/visa/canada-pr-visa" },
      { id: 2, label: "Australia PR Visa", href: "/visa/australia-pr-visa" },
    ],
  },
  {
    id: 5,
    label: "More",
    href: "#",
    subNav: [
      {
        id: 1,
        label: "Terms & Conditions",
        href: "/terms-conditions",
      },
      {
        id: 2,
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        id: 3,
        label: "Refund Policy",
        href: "/refund-policy",
      },
    ],
  },
];
