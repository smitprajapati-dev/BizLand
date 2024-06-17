import { faLocation, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

function Contact() {
  return (
    <div className='container flex flex-col items-center mx-auto w-[85%] pb-16 '>
      <div className="flex flex-col items-center pt-16 pb-10">
        <h3 className="bg-blue-200 py-1 px-6 rounded-full text-blue-600 font-bold mb-3">
          CONTACT
        </h3>
        <h3 className="text-[35px] font-bold text-blue-500 ">Contact Us</h3>
        <p className="text-center font-semibold text-[20px] text-[#444444] pb-5 ">
          Ut possimus qui ut temporibus culpa velit eveniet modi omnis est{' '}
          <br />
          adipisci expedita at voluptas atque vitae autem.
        </p>
      </div>
      <div className="container">
        <div className="w-full flex gap-4 ">
          <div className="w-[50%] text-center bg-gray-100 rounded-lg shadow-xl gap-3 flex flex-col items-center py-4">
            <FontAwesomeIcon icon={faLocation} size='xl' className='p-1 rounded-full' />
            <h4 className='text-[20px] font-bold text-[#444444]'>Our Address</h4>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
          <div className="w-[50%] text-center bg-white gap-4 flex items-center">
            <div className="w-[50%] py-10  bg-gray-100 rounded-lg shadow-xl">
              <FontAwesomeIcon icon={faVoicemail} />
              <h4>Email Us</h4>
              <p>contact@gmail.com</p>
            </div>
            <div className="w-[50%] py-10  bg-gray-100 rounded-lg shadow-xl">
              <FontAwesomeIcon icon={faPhone} />
              <h4>Call Us</h4>
              <p>+1 5589 55488 55</p>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex gap-4">
          <div className="w-[50%]">

          </div>
          <div className='w-[50%] pt-5 pb-5 container '>
            <form className="bg-gray-100 shadow-lg rounded-lg p-8 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full mt-1 p-2 border rounded"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full mt-1 p-2 border rounded"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="subject" className="block text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full mt-1 p-2 border rounded"
                  placeholder="Subject"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full mt-1 p-2 border rounded h-32"
                  placeholder="Message"
                 />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
