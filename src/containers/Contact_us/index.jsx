import {
  faLocation,
  faPhone,
  faVoicemail,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  EnvelopeIcon,
  PhoneArrowDownLeftIcon,
} from '@heroicons/react/24/outline';
import React from 'react';

function Contact() {
  return (
    <div className="container flex flex-col items-center mx-auto w-[85%] pb-16 ">
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
            <FontAwesomeIcon
              icon={faLocation}
              size="xl"
              className="p-1 rounded-full"
            />
            <h4 className="text-[20px] font-bold text-[#444444]">
              Our Address
            </h4>
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
          <div className="w-[50%] pt-5 pb-5 container">
            <div style={{ width: '100%', height: '100%' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2134.3496439358814!2d72.52626305324586!3d23.485101074303692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1718641525174!5m2!1sen!2sin"
                width="565"
                height="463"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='rounded-lg shadow-lg'
               />
            </div>
          </div>
          <div className="w-[50%] pt-5 pb-5 container ">
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
