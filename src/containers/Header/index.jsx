import React from 'react';

function Header() {
  return (
    <header className="flex items-center h-[80px]  ">
      <div className="w-[30%] flex justify-center items-center text-2xl font-bold">
        <h1 className="">BizLand <strong className='text-blue-700'>.</strong></h1>
      </div>
      <div className="w-[70%]  ">
        <ul className="flex gap-8 justify-center items-center font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>Team</li>
          <li>Drop Down</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
