import React from 'react';
import PromoBanner from './components/PromoBanner';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import QuickCategories from './components/QuickCategories';
import EditorsPick from './components/EditorsPick';
import PopularThemes from './components/PopularThemes';
import ArtformsGrid from './components/ArtformsGrid';
import ShopByPrice from './components/ShopByPrice';
import CustomerHomes from './components/CustomerHomes';
import About from './components/About';
import Workshops from './components/Workshops';
import PriceEstimator from './components/PriceEstimator';
import Stats from './components/Stats';
import TrustStrip from './components/TrustStrip';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <PromoBanner />
      <Navbar />
      <main>
        <HeroCarousel />
        <QuickCategories />
        <EditorsPick />
        <PopularThemes />
        <ArtformsGrid />
        <ShopByPrice />
        <CustomerHomes />
        <About />
        <Workshops />
        <PriceEstimator />
        <Stats />
        <TrustStrip />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
