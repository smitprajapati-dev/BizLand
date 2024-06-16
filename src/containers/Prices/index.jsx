import React from 'react';
import PricingTable from './PricingTable';

function Prices() {
  return (
    <div className='pt-16'>
      <div className=" flex flex-col text-center items-center ">
        <h3 className="bg-blue-200 py-1 px-6 rounded-full text-blue-600 font-bold mb-3">
        PRICING
        </h3>
        <h3 className="text-[35px] font-bold text-[#444444] ">
          Check Our<span className="text-blue-600"> Pricing</span>
        </h3>
        <p className="text-center font-semibold text-[20px] text-[#444444] ">
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est{' '}
          <br />
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <div className="App">
        <PricingTable />
      </div>
    </div>
  );
}

export default Prices;
