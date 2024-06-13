import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Header from './containers/Header';
import Welcome from './containers/welcome';
import Categories from './containers/Categories';
import About from './containers/About';
import Skillbar from './containers/SkillBar';

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
</div>);
