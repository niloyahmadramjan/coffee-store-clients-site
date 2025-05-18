import React from 'react';
import Header from '../Components/Header';
import HeroSection from '../Components/HeroSection';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import CoffeeCard from '../Components/CoffeeCard';
import CoffeeInfo from '../Components/CoffeeInfo';

const coffeePromise = fetch('http://localhost:3000/coffees').then(res=>res.json())

const Home = () => {
    return (
        <>
            <HeroSection></HeroSection>
            <CoffeeInfo></CoffeeInfo>
            <CoffeeCard coffeePromise={coffeePromise}></CoffeeCard>
        </>
    );
};

export default Home;