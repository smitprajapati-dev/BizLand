import {
  faBuilding,
  faFileAlt,
  faGlobe,
  faSyncAlt,
  faTachometerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const data1 = [
  {
    icon: faGlobe,
    title: 'Lorem Ipsum',
    description:
      'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
  },
  {
    icon: faFileAlt,
    title: 'Sed ut perspiciatis',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
  },
  {
    icon: faTachometerAlt,
    title: 'Magni Dolores',
    description:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
  },
];

const data2 = [
  {
    icon: faSyncAlt,
    title: 'Nemo Enim',
    description:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
  },
  {
    icon: faFileAlt,
    title: 'Dele Cardo',
    description:
      'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur',
  },
  {
    icon: faBuilding,
    title: 'Diversa Don',
    description:
      'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur',
  },
];

function Services() {
  return (
    <div className="pt-20 pb-20">
      <div className="flex flex-col items-center ">
        <h3 className="bg-blue-100 py-1 px-6 rounded-full text-blue-600 font-bold mb-3">
          SERVICES
        </h3>
        <h3 className="text-[35px] font-bold text-[#444444] ">
          Check Our <span className="text-blue-600">Services</span>
        </h3>
        <p className="text-center font-semibold text-[20px] text-[#444444] pb-5">
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est{' '}
          <br />
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
          {data1.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-[#F1F6FE] text-blue-500 p-6 rounded-md border-blue-50">
                  <FontAwesomeIcon icon={item.icon} size="2x" />
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        {data2.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg text-center shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200  "
          >
            <div className="flex justify-center mb-4">
              <div className="bg-[#F1F6FE] text-blue-500 p-6 rounded-md border-blue-50 hover:border-blue-500">
                <FontAwesomeIcon icon={item.icon} size="2x" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
