import { about1 } from "@/assets";
import AllBanner from "@/components/banner";
import Itc from "@/components/succes-story/itc";
import Stamp from "@/components/succes-story/stamp";
import Success1 from "@/components/succes-story/success1";
import React from "react";

export default function Page(): JSX.Element {
  return (
    <>
      <AllBanner img={about1} title="Success Stories" slug="success-stories" />
      <Success1 isHome={false} />
      <Stamp />
      <Itc />
    </>
  );
}
