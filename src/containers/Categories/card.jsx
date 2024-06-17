import React from 'react';
import clsx from 'clsx';

function Card({ title, imageUrl, className, para }) {
  return (
    <div
      className={clsx(
        'flex flex-col gap-5 justify-center w-[250px] h-[250px] rounded-2xl shadow-2xl max-lg:mt-7 mt-10 p-4 hover:',
        {
          [className]: !!className,
        },
      )}
    >
      <div className='ps-1 pt-4'>
        <img
          src={imageUrl}
          alt="icon"
          className="h-[50px] w-[50px] text-blue-600 "
        />
      </div>
      <div className="">
        <h3 className="pb-2 font-semibold text-xl">{title}</h3>
        <p>{para}</p>
      </div>
    </div>
  );
}

export default Card;
