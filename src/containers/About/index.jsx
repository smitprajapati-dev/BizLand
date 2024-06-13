import React from 'react';

function About() {
  return (
    <div className="flex flex-col items-center bg-[#f6f9fe] px-16 py-16">
      <h3 className="bg-blue-200 py-1 px-6 rounded-full text-blue-600 font-bold mb-3">
        About
      </h3>
      <h3 className="text-[35px] font-bold text-[#444444] ">
        Find Out More <span className="text-blue-600"> About Us</span>
      </h3>
      <p className="text-center font-semibold text-[20px] text-[#444444] pb-5 ">
        Ut possimus qui ut temporibus culpa velit eveniet modi omnis est <br />
        adipisci expedita at voluptas atque vitae autem.
      </p>
      <div className="container flex gap-6">
        <div>
          <img
            src="https://bootstrapmade.com/demo/templates/BizLand/assets/img/about.jpg"
            alt=""
            className="w-[120rem] pe-2"
          />
        </div>
        <div>
          <h3 className="text-[30px] font-bold text-[#444444]">
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h3>
          <p className=" pb-10 text-[20px] text-[#444444]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex items-center">
            <div className="bg-[#fff] p-5 rounded-[50px] me-4 shadow-2xl">
              <img
                src="https://img.icons8.com/?size=100&id=77117&format=png&color=000000"
                alt=""
                className="h-8 w-8"
              />{' '}
            </div>
            <div>
              {' '}
              <h3>Ullamco laboris nisi ut aliquip consequat</h3>
              <p>
                Magni facilis facilis repellendus cum excepturi quaerat <br />
                praesentium libre trade
              </p>
            </div>
          </div>
          <div className="flex items-center my-10">
            <div className="bg-[#fff] p-5 rounded-[50px] me-4 shadow-2xl">
              <img
                src="https://img.icons8.com/?size=100&id=77117&format=png&color=000000"
                alt=""
                className="h-8 w-8"
              />
            </div>
            <div>
              <h3>Magnam soluta odio exercitationem reprehenderi</h3>
              <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium <br /> illo direna pasata redi
              </p>
            </div>
          </div>
          <p className=' text-lg text-justify'>
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
