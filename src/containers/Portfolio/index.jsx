import React from 'react';

function Portfolio() {
  return (
    <div className='container w-[70%] flex flex-col items-center mx-auto'>
      <div className='flex flex-col mx-auto items-center py-16'>
        <h3 className="bg-blue-200 py-1 px-6 rounded-full text-blue-600 font-bold mb-3">
          Portfolio
        </h3>
        <h3 className="text-[35px] font-bold text-[#444444] ">
          Check Our <span className="text-blue-600">Portfolio</span>
        </h3>
        <p className="text-center font-semibold text-[20px] text-[#444444] pb-5 ">
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est{' '}
          <br />
          adipisci expedita at voluptas atque vitae autem.
        </p>
        <h3 className='text-[18px] font-bold text-blue-500 hover:bg-blue-500 hover:rounded-md hover:p-1 hover:text-white'>CARD</h3>
      </div>
      <div className='flex container mx-auto justify-center gap-6'>
        <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/masonry-portfolio/masonry-portfolio-2.jpg" alt="" className=' h-[400px] w-[350px]' />
        <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/masonry-portfolio/masonry-portfolio-5.jpg" alt="" className=' h-[100vh] w-[350px]' />
        <img src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/masonry-portfolio/masonry-portfolio-8.jpg" alt="" className=' h-[400px] w-[350px]' />
      </div>
    </div>
  );
}

export default Portfolio;
