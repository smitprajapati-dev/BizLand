import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Reviews() {
  return (
    <div className="bg-tst-img w-full h-[60vh] flex flex-col items-center justify-center text-white">
      <div>
        <img
          src="	https://bootstrapmade.com/demo/templates/BizLand/assets/img/testimonials/testimonials-4.jpg"
          alt=""
          className=" h-24 w-24 rounded-full"
          style={{ border: '6px solid rgba(255, 255, 255, 0.15)' }}
        />
      </div>
      <h3 className="text-[25px]">Matt Brandon</h3>
      <h4>Freelance</h4>
      <div className="flex pt-4">
        <p className="text-center text-xl">
          <FontAwesomeIcon
            icon={faQuoteLeft}
            className="text-blue-500 text-3xl mr-2"
          />
          Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos
          export minim fugiat minim velit minim dolor enim duis veniam ipsum
          <br /> anim magna sunt elit fore quem dolore labore illum veniam.
          <FontAwesomeIcon
            icon={faQuoteRight}
            className="text-blue-500 text-3xl ml-2"
          />
        </p>
      </div>
    </div>
  );
}

export default Reviews;
