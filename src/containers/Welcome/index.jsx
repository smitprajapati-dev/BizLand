import React from 'react';
import { PlayCircleIcon, PlayIcon } from '@heroicons/react/24/outline';

function Welcome() {
  return (
    <section className="bg-image">
      <div className="flex flex-col h-screen gap-6 justify-center ps-20 mt-16">
        <h2 className="text-5xl font-bold ">
          Welcome To <span className="text-blue-500"> BizLand </span>
        </h2>
        <p className="text-2xl">
          We are team of talented designers making websites with Bootstrap
        </p>
        <div className="flex items-center gap-5">
          <a href="" className="py-3 px-8 bg-blue-600 rounded-md text-white">
            GET STARTED
          </a>
          <div className="flex items-center gap-2 font-bold ">
            <PlayCircleIcon className="h-9 w-9 text-blue-500"></PlayCircleIcon>
            <h3>Watch Video</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
