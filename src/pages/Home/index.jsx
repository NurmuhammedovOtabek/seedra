import React from 'react';
import HeroSection from './components/HeroSection';
import PromoBanner from './components/PromoBanner';
import ProductsHead from './components/ProductsHead';
import CategoryFilter from './components/CategoryFilter';
import ProductGrid from './components/ProductGrid';
import OurBlog from './components/OurBlog';
import TestimonialSwiper from './components/TestimonialSwiper';
import SeedreHelps from './components/SeedraHelps';

function Home(props) {
    return (
        <div>
            <HeroSection/>
            <PromoBanner/>
            <ProductsHead/>
            <CategoryFilter/>
            <ProductGrid/>
            <OurBlog/>
            <TestimonialSwiper/>
            <SeedreHelps/>
        </div>
    );
}

export default Home;