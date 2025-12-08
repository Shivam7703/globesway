import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function Latestupdate() {
  return (
    <section className="bg-color2 flex items-center text-white">
      <div className="text-center md:text-xl min-w-max font-bold text-base font1 bg-color1 p-2 sm:px-7">
Latest Update </div>

        <Marquee
          className=" h-full text-base sm:text-xl space-x-7"
          speed={80}
          pauseOnHover={true}
          gradient={false}
        >
        <p><a title="Best immigration consultants in Delhi" href="https://www.cicnews.com/2025/08/express-entry-starting-today-candidates-will-need-a-medical-exam-to-submit-their-pr-application-0858865.html">New medical exam requirements for Express Entry permanent residence applications take effect
</a></p>&nbsp;&nbsp;
        <p><a title="Best immigration consultants in Delhi" href="https://www.cicnews.com/2025/08/canada-holds-second-express-entry-draw-of-the-week-3-0858821.html">Express Entry: Canada issues thousands of invitations in second largest Healthcare draw of the year&nbsp; &nbsp;
</a></p>
        <p><a title="Best immigration consultants in Delhi" href="https://www.cicnews.com/2025/08/ircc-invites-more-pnp-candidates-in-latest-express-entry-draw-0858807.html">IRCC invites more PNP candidates in latest Express Entry draw

</a></p>&nbsp;&nbsp;
        <p><a title="Best immigration consultants in Delhi" href="https://www.cicnews.com/2025/08/new-medical-exam-requirements-for-permanent-residence-applications-under-express-entry-0858704.html">New medical exam requirements for permanent residence applications under Express Entry
</a></p>&nbsp;&nbsp;
        <p><a title="Best immigration consultants in Delhi" href="https://www.cicnews.com/2025/08/entrepreneurs-invited-in-british-columbia-pnp-draw-0858943.html">Entrepreneurs invited in British Columbia PNP draw
</a></p>&nbsp;&nbsp;
        </Marquee>
    </section>
  );
}


