import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSkype,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Footer() {
  return (
    <div className="container flex justify-evenly mx-auto py-20">
      <div>
        <h4 className="text-[25px] font-semibold">
          BizLand <span className="text-blue-500 font-bold">.</span>
        </h4>
        <p className="py-4">
          A108 Adam Street <br /> New York, NY 535022 <br /> United States
        </p>
        <h4>
          <span className="font-bold">Phone:</span>+1 5589 55488 55
        </h4>
        <h4>
          <span className="font-bold">Email:</span> info@example.com
        </h4>
      </div>
      <div>
        <h4 className="text-[20px] font-bold pb-4">Useful Links</h4>
        <ul className="flex flex-col gap-4 text-[15px]">
          <li className="flex items-baseline gap-1">
            {' '}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="h-3 w-3 text-blue-500"
            />{' '}
            Home
          </li>
          <li className="flex items-baseline gap-1">
            {' '}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="h-3 w-3 text-blue-500"
            />
            About Us
          </li>
          <li className="flex items-baseline gap-1">
            {' '}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="h-3 w-3 text-blue-500"
            />{' '}
            Services
          </li>
          <li className="flex items-baseline gap-1">
            {' '}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="h-3 w-3 text-blue-500"
            />
            Terms of Services
          </li>
          <li className="flex items-baseline gap-1">
            {' '}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="h-3 w-3 text-blue-500"
            />
            Privacy policy
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-[20px] font-bold pb-4">Our Services</h4>
        <ul className="flex flex-col gap-4 text-[15px]">
          <li className="flex items-baseline gap-1">
            {' '}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="h-3 w-3 text-blue-500"
            />
            Web Design
          </li>
          <li className="flex items-baseline gap-1">
            {' '}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="h-3 w-3 text-blue-500"
            />
            Web Development
          </li>
          <li className="flex items-baseline gap-1">
            {' '}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="h-3 w-3 text-blue-500"
            />
            Product Management
          </li>
          <li className="flex items-baseline gap-1">
            {' '}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="h-3 w-3 text-blue-500"
            />
            Marketing
          </li>
          <li className="flex items-baseline gap-1">
            {' '}
            <FontAwesomeIcon
              icon={faChevronRight}
              className="h-3 w-3 text-blue-500"
            />
            Graphic Design
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-[20px] font-bold pb-4">Our Social Networks</h4>
        <p>
          Cras fermentum odio eu feugiat lide <br /> par naso tierra videa magna
          derita <br />
          valies
        </p>
        <div className="flex gap-2 pt-4">
          <a href="">
            <FontAwesomeIcon
              icon={faTwitter}
              className="bg-blue-700 p-3 rounded-md text-white"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faFacebook}
              className="bg-blue-700 p-3 rounded-md text-white"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faInstagram}
              className="bg-blue-700 p-3 rounded-md text-white"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faSkype}
              className="bg-blue-700 p-3 rounded-md text-white"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="bg-blue-700 p-3 rounded-md text-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
