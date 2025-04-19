import React from "react";
import Cards from "./Cards";
import bg1 from "../../images/bg1.jpg";
import bg2 from "../../images/bg2.jpg";
import bg3 from "../../images/bg3.jpg";

import Carousal from "./Carousal";
import StarRating from "../StarRating/StarRating";

const Home = () => {

const CarousalData = [
  {
    bgImg : bg3,
    title :"A DIGITAL CURRENCY PLATFORM FOR CRYPTO TRADE" ,
    content:"Website is the community-run technology powering the cryptocurrency and thousands of decentralized applications.",
    subTitle:"Welcome To Website"
  },
  {
    bgImg : bg2,
    title :"ADVANCED PLAN WITH UNIQUE FEATURES" ,
    content:"To build a future where trustless, autonomous agreements become the global standard for financial transactions",
    subTitle:"Earn Big With Website"
  },
  {
    bgImg : bg1,
    title :"INNOVATIVE BUSINESS MODEL" ,
    content:"Users have the ability to upvote, downvote, and engage with content, creating a quality-driven environment.",
    subTitle:"Big Opportunities"
  },
]

 

  return (
    <>
      <Carousal data={CarousalData} />
      <Cards />
      <StarRating/>
    </>
  );
};

export default Home;
