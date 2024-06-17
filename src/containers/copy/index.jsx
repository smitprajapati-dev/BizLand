import React from 'react';

function Copy() {
  return (
    <div className="flex flex-col items-center pb-10">
      <h5 className="">
        © Copyright <span className="font-bold"> BizLand </span> All Rights
        Reserved
      </h5>
      <div className='flex gap-2'>
        <h5>Designed by </h5>
        <a href="" className='text-blue-500'> Smit Prajapati</a>
      </div>
    </div>
  );
}

export default Copy;
