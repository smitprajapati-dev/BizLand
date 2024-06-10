import React from 'react';
// import Footer from '../../containers/Footer';
import BlogSpot from '../../containers/blogs';
import ProductsDivider from '../../containers/ProductsDivider';
import TopSales from '../../containers/TopSales';
import Categories from '../../containers/Categories';
import Banner from '../../containers/Banner';
// import Header from '../../containers/Header';

function Home() {
  return (
    <div>
      
      <Banner />
      <Categories />
      <TopSales />
      <ProductsDivider />
      <BlogSpot />
      
    </div>
  );
}

export default Home;
