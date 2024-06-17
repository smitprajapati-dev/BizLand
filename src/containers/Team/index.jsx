import React from 'react';

const teamMembers = [
  {
    name: 'Walter White',
    position: 'Chief Executive Officer',
    imageUrl:
      '	https://bootstrapmade.com/demo/templates/BizLand/assets/img/team/team-1.jpg',
  },
  {
    name: 'Sarah Jhonson',
    position: 'Product Manager',
    imageUrl:
      '	https://bootstrapmade.com/demo/templates/BizLand/assets/img/team/team-2.jpg',
  },
  {
    name: 'William Anderson',
    position: 'CTO',
    imageUrl:
      '	https://bootstrapmade.com/demo/templates/BizLand/assets/img/team/team-3.jpg',
  },
  {
    name: 'Amanda Jepson',
    position: 'Accountant',
    imageUrl:
      '	https://bootstrapmade.com/demo/templates/BizLand/assets/img/team/team-4.jpg',
  },
];

function TeamCard() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <h3 className="bg-blue-200 py-1 px-6 rounded-full text-blue-600 font-bold mb-3">
        TEAM
      </h3>
      <h3 className="text-[35px] font-bold text-[#444444] ">
        Our Hardworking <span className="text-blue-600">Team</span>
      </h3>
      <p className="text-center font-semibold text-[20px] text-[#444444] pb-5 ">
        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est <br />
        adipisci expedita at voluptas atque vitae autem.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              className="w-full h-64 object-cover"
              src={member.imageUrl}
              alt={member.name}
            />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{member.name}</h2>
              <p className="text-gray-700">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamCard;
