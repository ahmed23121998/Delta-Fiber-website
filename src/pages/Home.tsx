import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ProductsPreview from '@/components/home/ProductsPreview';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseUs />
      <ProductsPreview />
    </div>
  );
};

export default Home;