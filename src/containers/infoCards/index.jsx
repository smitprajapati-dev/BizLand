import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSmile,
  faProjectDiagram,
  faHeadset,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

const data = [
  { icon: faSmile, value: 232, label: 'Happy Clients' },
  { icon: faProjectDiagram, value: 521, label: 'Projects' },
  { icon: faHeadset, value: 1463, label: 'Hours Of Support' },
  { icon: faUsers, value: 15, label: 'Hard Workers' },
];

function InfoCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-[90%] gap-8 container mx-auto mt-10 pb-14">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-blue-50 px-6 py-2   text-center shadow-md"
        >
          <div className="flex justify-center mb-4">
            <div className="bg-blue-500 text-white p-2 rounded-full">
              <FontAwesomeIcon icon={item.icon} size="2x" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {item.value}
          </h2>
          <p className="text-gray-600">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default InfoCards;
