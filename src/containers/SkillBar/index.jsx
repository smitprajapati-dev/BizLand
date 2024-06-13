import React from 'react';

const skills1 = [
  { name: 'HTML', level: 100 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 75 },
];
const skills2 = [
  { name: 'PHP', level: 80 },
  { name: 'WordPress/CMS', level: 90 },
  { name: 'Photoshop', level: 55 },
];
function Skillbar() {
  return (
    <div className="flex w-[90%] container mx-auto mt-10 gap-4 pb-16">
      <div className='w-1/2'>
        {skills1.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-gray-700">
                {skill.name}
              </span>
              <span className="text-base font-medium text-gray-700">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 h-4">
              <div
                className="bg-blue-500 h-4"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className='w-1/2'>
        {skills2.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium text-gray-700">
                {skill.name}
              </span>
              <span className="text-base font-medium text-gray-700">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200  h-4">
              <div
                className="bg-blue-500 h-4"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skillbar;
