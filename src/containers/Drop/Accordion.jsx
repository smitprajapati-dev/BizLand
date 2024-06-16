import React, { useState } from 'react';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <span className={`transform transition-transform mr-2 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? '⌃' : '⌄'}
        </span>
        <span className=" text-[20px] flex-1">{title}</span>
      </button>
      {isOpen && <div className="mt-2 text-xl text-gray-600">{content}</div>}
    </div>
  );
}

function Accordion() {
  const items = [
    {
      title: 'Non consectetur a erat nam at lectus urna duis?',
      content: 'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
    },
    // Add more items as needed
    {
      title: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
      content: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui',
    },
    {
      title: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?',
      content: 'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis',
    },
    {
      title:'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
      content:'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
    },
    {
      title:'Tempus quam pellentesque nec nam aliquam sem et tortor consequat?',
      content:'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in'
    },
    {
      title:'Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?',
      content:'Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.'
    }
  ];

  return (
    <div className="flex flex-col w-[75%] mx-auto container mt-10  rounded-lg gap-2">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}

export default Accordion;
