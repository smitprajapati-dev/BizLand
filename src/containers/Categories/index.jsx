import React from 'react';
import Card from './card';
import '../../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Categories() {
  return (
    <div className='pb-[70px] pt-[50px]'>
      <div className="flex  items-center justify-center px-12 h-auto gap-8">
        <Card
          imageUrl="https://img.icons8.com/?size=100&id=ZCigOwRb1UOa&format=png&color=000000"
          title="Lorem Ipsum"
          className="flex-shrink-0"
          para="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"
        />
        <Card
          imageUrl="https://img.icons8.com/?size=100&id=qyaeN4EFcdU1&format=png&color=000000"
          title="Sed ut perspiciatis"
          className=" flex-shrink-0"
          para="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
        />
        <Card
          imageUrl="https://img.icons8.com/?size=100&id=103584&format=png&color=000000"
          title="Magni Dolores"
          className=" flex-shrink-0"
          para="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"
        />
        <Card
          imageUrl="https://img.icons8.com/?size=100&id=63766&format=png&color=000000"
          title="Nemo Enim"
          className=" flex-shrink-0"
          para="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"
        />
      </div>
    </div>
  );
}

export default Categories;
