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
</div>);
