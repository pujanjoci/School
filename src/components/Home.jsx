import React, { useState } from 'react'; // Add useState here
import { Link } from 'react-router-dom';
import Background from '../assets/background.jpg';
import Principal from '../assets/principal.jpg';
import Canteen from '../assets/canteen.jpg';
import Bus from '../assets/bus.jpg';
import Health from '../assets/health.jpg';
import Security from '../assets/security.jpg';
import Extra from '../assets/extra.jpg';

import Video from '../assets/video.mp4';
import { ImQuotesLeft } from "react-icons/im";

const Home = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(true);
  };

  const handleSubscribe = () => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setIsSubscribed(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const handleClosePopup = () => {
    setIsSubscribed(false);
  };

  return (
    <div>
      <section className="relative">
        <div className="relative">
          <img 
            src={Background} 
            alt="Background" 
            className="md:h-[500px] md:w-full h-[150px] w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center md:items-start md:justify-start md:ml-4 md:mt-[8%] text-white text-center md:text-left p-4 bg-black bg-opacity-20 md:bg-opacity-10">
            <h1 className="text-xl md:text-6xl md:ml-[15%] md:mb-4 font-serif font-thin">St Joseph</h1>
            <h1 className="text-xl md:text-5xl md:ml-[15%] md:mb-4 mb-2 font-serif font-thin">English Academy</h1>
            <p className="md:ml-[15%] text-md md:text-xl md:italic mb-2 md:mb-8 font-thin">Education for a prosperous and Better Nation</p>
            <Link to="/online-admission" className="md:ml-[15%] md:py-2 md:px-4 p-2 text-sm border-2 bg-white text-green-800 font-bold font-serif rounded hover:text-white hover:border-white hover:bg-transparent transition duration-500 ease-in-out">
              Online Admission
            </Link>
          </div>
        </div>
      </section>

      <section className="p-4 md:p-12">
        <div className="grid grid-cols-2 gap-4 md:gap-16 items-center">
          <div className="flex justify-end">
            <img 
              src={Principal} 
              alt="Principal" 
              className="h-[150px] md:h-[300px] w-[150px] md:w-[300px] object-cover rounded-lg"
            />
          </div>
          <div className="text-left md:text-left">
            <h2 className="text-md md:text-4xl md:pr-64 mb-2 md:mb-6 font-serif text-gray-700 relative">
              Message from the Principal
              <span className="bg-green-900 h-px md:w-1/6 w-1/5 mt-2 absolute bottom-0 md:bottom-[-10px] left-0 transform translate-y-1/2"></span>
            </h2>
            <p className="text-sm md:text-sm md:pr-32 md:font-normal font-thin md:hidden">
              Our school continues to garner for the individual work we are accomplishing with students daily with options we provide.
            </p>
            <p className="text-sm md:text-sm md:pr-36 md:font-normal font-thin text-gray-600 hidden md:block">
              Welcome to St. Joseph's English Academy. We are serving in the education sector at local level since 1999. We are very pleased to be part of this community and enjoy the close relationships that we have with our locality in serving students. <br/><br/>
              Our school continues to garner for the individual work we are accomplishing with students daily with options we provide.
            </p>
            <Link to="/about" className="md:mt-4 mt-2 hover:text-gray-400 text-gray-800 text-sm flex items-center">
              Know more about us <span className="ml-1">&#8594;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="p-4 md:p-8">
        <h2 className='text-center font-bold text-lg font-serif mb-2'>St. Josheph Academy at a glance</h2>
        <div class="grid grid-cols-4 gap-4 md:px-64">
            <div class="p-4 text-center">
                <h3 className='text-3xl md:text-5xl font-bold text-green-900'>100+</h3>
                <p className='text-sm mt-2 text-gray-600'>SEE Toppers</p>
            </div>
            <div class="p-4 text-center">
                <h3 className='text-3xl md:text-5xl font-bold text-green-900'>2k+</h3>
                <p className='text-sm mt-2 text-gray-600'>Enrolments</p>
            </div>            
            <div class="p-4 text-center">
                <h3 className='text-3xl md:text-5xl font-bold text-green-900'>90+</h3>
                <p className='text-sm mt-2 text-gray-600'>Qualified Staff</p>
            </div>            
            <div class="p-4 text-center">
                <h3 className='text-3xl md:text-5xl font-bold text-green-900'>80+</h3>
                <p className='text-sm mt-2 text-gray-600'>Club & Activites</p>
            </div>
        </div>
      </section>

      
      <section className="p-4 md:p-2">
        <div className="relative md:mt-2 flex justify-center items-center">
          <video className="md:w-[800px] w-full rounded-xl" controls>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="p-2 md:mt-16 md:p-8">
        <div className='md:px-[18%] px-2'>
            <h3 className='text-2xl md:pl-2 md:pb-4 p-2 text-green-600'>
                <ImQuotesLeft />
            </h3>
            <p className='md:text-2xl text-md font-serif text-gray-500 italic px-4 md:flex'>
                Welcome to St. Joseph's English Academy. We are serving in the education sector at local level since 1999. We are very pleased to be part of this community and enjoy the close relationships that we have with our locality in serving students.
            </p>
            <p className='py-2 px-4 md:mt-2 text-sm md:text-lg text-center md:text-start text-gray-700 font-serif'>
                Dhambar Singh K.C - Principal
            </p>
            <div className='flex justify-end md:mt-0 mt-4'>
                <Link to="/about" className="text-sm text-gray-800 hover:text-gray-400 flex items-center">
                  Read More <span className="ml-1">&#8594;</span>
                </Link>
            </div>
        </div>
      </section>

    <section className="p-4 md:p-8">
        <div className="grid grid-cols-2 md:mt-4 md:px-64">
          <div className="md:pt-8 md:px-4 p-4">
            <h2 className="text-2xl md:text-4xl font-serif">Our Features</h2>
          </div>
          <div className="p-4">
            <p className='hidden md:flex text-sm text-gray-500'>
              St. Joseph's English Academy aims at offering all our stdents a broad and balanced curriculum that provides rewarding and stimulating activities to prepare them for the best social and cultural life.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-2 md:mt-12 md:px-60">
            <div className="">
                <img 
                    src={Canteen} 
                    alt="Canteen" 
                    className="w-full h-48 object-cover rounded-lg border-2"
                />
                <h2 className='text-xl md:text-2xl font-serif text-gray-700 mb-2 mt-2 px-2'>
                    Canteen
                </h2>
                <p className='text-sm text-gray-600 px-2'>
                    St. Joseph's English Academy maintains a very healthy atmosphere in the school canteen with a provision for supplying clean, properly filtered drinking
                </p>
            </div>
            <div className="">
                <img 
                    src={Bus} 
                    alt="Bus" 
                    className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className='text-xl md:text-2xl font-serif text-gray-700 mb-2 mt-2 px-2'>
                    Transportation
                </h2>
                <p className='text-sm text-gray-600 px-2'>
                    Our primary goal is the safe transportation of students to and from school. There will be regular bus transport for the children with stops in the main centers of the locality.
                </p>
            </div>
            <div className="">
                <img 
                    src={Health} 
                    alt="Health" 
                    className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className='text-xl md:text-2xl font-serif text-gray-700 mb-2 mt-2 px-2'>
                    Health Check-Ups
                </h2>
                <p className='text-sm text-gray-600 px-2'>
                    The health of the children is a matter of primary concern. Regular medicne check-up is carried out for all the students in the school by specialist medical practitioner.
                </p>
            </div>
            <div className="">
                <img 
                    src={Security} 
                    alt="Security" 
                    className="w-full h-48 object-cover rounded-lg"
                />
                <h2 className='text-xl md:text-2xl font-serif text-gray-700 mb-2 mt-2 px-2'>
                    Security
                </h2>
                <p className='text-sm text-gray-600 px-2'>
                    St. Joseph's English Academy has a well-trained security team to ensure that all students are safe in the school. Unauthorized people are not allowed ionto the school.
                </p>
            </div>
        </div>
    </section>

    <section className="p-4 md:p-12 md:mt-2 mt-8">
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-16 items-center">
        <div className="flex md:justify-end justify-center order-2 md:order-1">
        <img 
            src={Extra} 
            alt="Extra" 
            className="h-[150px] md:h-[400px] w-[150px] md:w-[300px] object-cover rounded-lg"
        />
        </div>
        <div className="text-left md:text-left p-2 order-1 md:order-2">
        <h2 className="text-md md:text-4xl md:pr-60 mb-2 md:mb-6 font-serif text-gray-700 relative">
            Our Extra-curricular Activities
            <span className="bg-green-900 h-px md:w-1/6 w-1/5 mt-2 absolute bottom-0 md:bottom-[-10px] left-0 transform translate-y-1/2"></span>
        </h2>
        <ul className="list-disc list-inside md:list-outside md:pl-5 md:mb-4 text-gray-700 space-y-2 md:pr-[25%]">
            <li>
            <span className='font-serif text-lg'>Sports</span> 
            <span className="block mt-1 text-sm text-gray-500">
               Our students are passionate about sports and athletics and have the freedom to choose the one they like and wish to take up. 
            </span>
            </li>
            <li>
            <span className='font-serif text-lg'>Events</span> 
            <span className="block mt-1 text-sm text-gray-500">
                We have several writers who encourage to come up with creations that are regularly published in our in-house magazines.
            </span>
            </li>
            <li>
            <span className='font-serif text-lg'>Performing Arts & Musics</span> 
            <span className="block mt-1 text-sm text-gray-500">
                With professionals on board, we take pride in training our students in art forms like dance, drama, painting and more.
            </span>
            </li>
        </ul>
        </div>
    </div>
    </section>

        <section className="p-4 md:px-[20%] mb-4 md:mb-8 text-white">
            <div className="mt-4 px-4 p-4 md:py-8 bg-green-900 rounded-md">
                <p className="mb-2 text-lg md:text-2xl text-center font-serif md:px-[20%]">
                Wish to know more about admission and updates? Subscribe Now!
                </p>
                 <div className="flex flex-col items-center justify-center md:mt-8 mt-4">
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className={`p-2 border ${isValidEmail ? 'border-gray-300' : 'border-red-500'} w-full md:w-1/2 bg-white text-black`}
                />
                {!isValidEmail && (
                    <p className="text-red-500 mt-1">Please enter a valid email address.</p>
                )}
                <button
                    onClick={handleSubscribe}
                    className="mt-4 px-4 py-1 border-2 bg-white text-green-900 rounded hover:bg-green-900 hover:border-white hover:text-white focus:outline-none transition duration-200 ease-in-out"
                >
                    Subscribe
                </button>
                </div>
            </div>

        {isSubscribed && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded shadow-md text-center">
                <h3 className="text-xl font-semibold mb-2 text-black">
                You are subscribed!
                </h3>
                <p className="mb-4 text-black">
                Thank you for subscribing to our updates.
                </p>
                <button
                onClick={handleClosePopup}
                className="px-4 py-2 bg-yellow-400 text-white rounded hover:bg-yellow-500 focus:outline-none"
                >
                Close
                </button>
            </div>
            </div>
        )}
        </section>

    </div>
  );
};

export default Home;
