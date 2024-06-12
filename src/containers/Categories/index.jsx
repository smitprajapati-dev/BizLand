import React from 'react';
import Card from './card';
import '../../style.css';

function Categories() {
  return (
    <div >
      <div className="flex  items-center justify-center px-12  h-auto gap-8">
        <Card
          imageUrl=""
          title=""
          className="flex-grow flex-shrink-0 bg-green-200 flip-container basis-44"
        />
        <Card
          imageUrl=""
          title=""
          className="flex-grow flex-shrink-0 bg-yellow-200 basis-44"
        />
        <Card
          imageUrl=""
          title=""
          className="flex-grow flex-shrink-0 bg-blue-100 basis-44"
        />
        <Card
          imageUrl=""
          title=""
          className="flex-grow flex-shrink-0 bg-orange-100 basis-44"
        />
      </div>
    </div>
  );
}

export default Categories;
