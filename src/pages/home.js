import React from 'react'
import Search from '../components/Search';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Earth from '../components/Earth';
import Slider from '../components/Slider';
import Cards from '../components/Cards';

function home() {
    return (
        <div className='home'>
         <Hero />
        <Search />
        <Services />
        <Earth />
        <Slider />
        <Cards />
        </div>
    )
}

export default home
