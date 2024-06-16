import React from 'react';

function Team() {
  return (
    <div>
      <div className="flex flex-col mx-auto items-center py-16">
        <h3 className="bg-blue-200 py-1 px-6 rounded-full text-blue-600 font-bold mb-3">
          TEAM
        </h3>
        <h3 className="text-[35px] font-bold text-[#444444] ">
          Our Hardworking <span className="text-blue-600">Team</span>
        </h3>
        <p className="text-center font-semibold text-[20px] text-[#444444] pb-5 ">
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est{' '}
          <br />
          adipisci expedita at voluptas atque vitae autem.
        </p>
        <h3 className="text-[18px] font-bold text-blue-500 hover:bg-blue-500 hover:rounded-md hover:p-1 hover:text-white">
          CARD
        </h3>
      </div>
    </div>
  );
}

export default Team;
