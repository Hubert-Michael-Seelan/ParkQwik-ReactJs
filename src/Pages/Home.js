import React from 'react';
import FastTagBox from "../Components/FastTagBox";
import Rectangle from "../Components/Rectangle";
import AddMoneyBanner from '../Components/AddMoneyBanner';
import OthersCard from "../Components/OthersCard"
import Footer from '../Components/Footer';
import TravelCard from '../Components/TravelCard';

const Home = () => {
  return (
    <div>
      <Rectangle />
      <FastTagBox />
      <AddMoneyBanner />
      <OthersCard />
      <TravelCard />
      <Footer />
    </div>
  )
}

export default Home