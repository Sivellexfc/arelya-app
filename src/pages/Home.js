import React from 'react'

import DropdownNavbar from '../components/DropdownNavbar';
import TopFooter from '../components/TopFooter';
import Slider from '../components/Slider';
import AboutArea from '../components/AboutProducts';
import LastProjects from '../components/LastProjects';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import RefArea from '../components/RefArea';
import OurSkills from '../components/OurSkills';

export default function Home() {
  return (
    <>
        <TopFooter></TopFooter>
        <DropdownNavbar></DropdownNavbar>
        <Slider></Slider>
        <AboutArea></AboutArea>
        <OurSkills></OurSkills>
        <AboutUs></AboutUs>
        <LastProjects></LastProjects>
        <RefArea></RefArea>
        <Footer></Footer>
    </>
  )
}
