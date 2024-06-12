import React from 'react';
import clsx from 'clsx';

function Card({ title, imageUrl, className }) {
  return (
    <div
      className={clsx(
        'flex gap-5 place-content-center w-20 h-60 aspect-4/3 md:aspect-3/4 rounded-2xl rotate-container relative max-lg:mt-7 mt-10',
        {
          [className]: !!className,
        },
      )}
    >
      <div className="rotate-card">
        <h3>{title}</h3>
        <img src={imageUrl} alt="icon" />
      </div>
    </div>
  );
}

export default Card;
