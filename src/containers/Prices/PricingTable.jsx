import React from 'react';

function PricingTable() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: '/month',
      features: [
        'Aida dere',
        'Nec feugiat nisl',
        'Nulla at volutpat dola',
        { text: 'Pharetra massa', isAvailable: false },
        { text: 'Massa ultricies mi', isAvailable: false },
      ],
    },
    {
      name: 'Business',
      price: '$19',
      period: '/month',
      features: [
        'Aida dere',
        'Nec feugiat nisl',
        'Nulla at volutpat dola',
        'Pharetra massa',
        { text: 'Massa ultricies mi', isAvailable: false },
      ],
      highlighted: true,
    },
    {
      name: 'Developer',
      price: '$29',
      period: '/month',
      features: [
        'Aida dere',
        'Nec feugiat nisl',
        'Nulla at volutpat dola',
        'Pharetra massa',
        'Massa ultricies mi',
      ],
    },
    {
      name: 'Ultimate',
      price: '$49',
      period: '/month',
      features: [
        'Aida dere',
        'Nec feugiat nisl',
        'Nulla at volutpat dola',
        'Pharetra massa',
        'Massa ultricies mi',
      ],
      badge: 'Advanced',
    },
  ];

  return (
    <div className="flex container mx-auto w-[80%] justify-center gap-4 my-10">
      {plans.map((plan, index) => (
        <div
          key={index}
          className= "w-full md:w-1/4 p-4 rounded-lg bg-gray-100"
          
        >
          <div className="p-6 relative flex flex-col items-center text-center">
            {plan.badge && (
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 text-xs rounded-bl-lg">
                {plan.badge}
              </div>
            )}
            <h3 className="text-2xl font-semibold mb-4">{plan.name}</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-500 ml-2">{plan.period}</span>
            </div>
            <ul className="mb-6">
              {plan.features.map((feature, index) =>
                typeof feature === 'string' ? (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ) : (
                  <li
                    key={index}
                    className={`mb-2 ${!feature.isAvailable && 'line-through text-gray-400'}`}
                  >
                    {feature.text}
                  </li>
                ),
              )}
            </ul>
            <button
              className={`w-full py-2 rounded ${plan.highlighted ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'} font-semibold hover:opacity-75 transition-opacity`}
            >
              Buy Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PricingTable;
