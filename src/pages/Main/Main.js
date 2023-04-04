import "./Main.css";
import { Hero } from "../../components/Hero/Hero";
import { WhatAndWhy } from "../../components/WhatAndWhy/WhatAndWhy";
import { Benefits } from "../../components/Benefits/Benefits";
import { Industry } from "../../components/Industry/Industry";
import { Partnership } from "../../components/Partnership/Partnership";
export default function Main() {
  return (
    <>
      <Hero />
      <div className="hr"></div>
      <WhatAndWhy />
      <div className="hr"></div>
      <Benefits />
      <div className="hr"></div>
      <Industry />
      <div className="hr"></div>
      <Partnership />
      <div className="hr"></div>
    </>
  );
}
