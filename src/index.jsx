import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Header from './containers/Header';
import Welcome from './containers/Welcome';
import Categories from './containers/Categories';
import About from './containers/About';
import Skillbar from './containers/SkillBar';
import InfoCards from './containers/infoCards';
import Gap from './containers/gap';
import Services from './containers/Services';
import Reviews from './containers/Reviews';
import Drop from './containers/Drop';
import Prices from './containers/Prices';
import Footer from './containers/Footer';
import Join from './containers/Join';
import Portfolio from './containers/Portfolio';
import Team from './containers/Team';
import Contact from './containers/Contact_us';

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<div>
  <Header/>
  <Welcome />
  <Categories />
  <About />
  <Skillbar />
  <InfoCards />
  <Gap />
  <Services />
  <Reviews />
  <Portfolio />
  <Team />
  <Prices />
  <Drop />
  <Contact />
  <Join />
  <Footer />
</div>);
