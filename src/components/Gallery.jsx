import React from 'react';
import Image1 from './Gallery/image1.jpg'; // Replace with actual image paths
import Image2 from './Gallery/image2.jpg'; // Replace with actual image paths
import Image3 from './Gallery/image3.jpg'; // Replace with actual image paths
import Image4 from './Gallery/image4.jpg'; // Replace with actual image paths
import Image5 from './Gallery/image5.jpg'; // Replace with actual image paths
import Image6 from './Gallery/image6.jpg'; // Replace with actual image paths
import Image7 from './Gallery/image7.jpg'; // Replace with actual image paths
import Image8 from './Gallery/image8.jpg'; // Replace with actual image paths

import Video from '../assets/video.mp4';

const Gallery = () => {
  return (
    <div>
      <div className='p-4 bg-green-700 mb-4'>
        <h1 className='text-center text-gray-100 text-4xl md:text-5xl font-serif'>
          Gallery
        </h1>
      </div>

      <section>
        <div className='pt-4 pb-2 px-2'>
          <p className='md:text-3xl text-2xl text-gray-800 text-center font-serif'>Follow us on Facebook</p>
        </div>
        <div className='text-sm text-gray-500 text-center pt-2 pb-12 px-2'>
          <p>Take a look at some pretty pictures captured in and around our premises.</p>
        </div>
      </section>

      {/* Desktop View */}
      <section className='hidden md:block'>
        <div className='grid grid-cols-3 gap-4 px-[15%] pb-4'>
          <div className='col-span-1 row-span-2'>
            <div className='aspect-w-1 aspect-h-1 mb-4'>
              <img src={Image2} alt='Gallery Image 2' className='w-[300px] h-[200px] object-cover' />
            </div>
            <div className='aspect-w-1 aspect-h-1'>
              <img src={Image5} alt="Gallery Image 5" className="w-[300px] h-[200px] object-cover" />
            </div>
          </div>
          <div className='col-span-2 row-span-2'>
            <div className='aspect-w-16 aspect-h-9'>
              <img src={Image3} alt='Gallery Image 3' className='w-full h-[61vh] object-cover' />
            </div>
          </div>
        </div>
      </section>

        <section className='hidden md:block pb-8'>
         <div className="grid grid-cols-3 gap-4 px-[15%]">
            <div className="col-span-2 row-span-2">
              <div className="aspect-w-16 aspect-h-9">
                <img src={Image4} alt="Gallery Image 4" className="w-full h-[61vh] object-cover" />
              </div>
            </div>
            <div className="col-span-1 row-span-2">
              <div className="aspect-w-1 aspect-h-1 mb-4">
                <img src={Image6} alt='Gallery Image 6' className='w-[300px] h-[200px] object-cover' />
              </div>
              <div className="aspect-w-1 aspect-h-1">
                <img src={Image1} alt="Gallery Image 1" className="w-[300px] h-[200px] object-cover" />
              </div>
            </div>
          </div>
        </section>

      {/* Mobile View */}
      <section className='block md:hidden'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-4s'>
          <div className='aspect-w-16 aspect-h-9'>
            <img src={Image3} alt='Gallery Image 3' className='w-full h-auto object-cover' />
          </div>
          <div className='aspect-w-1 aspect-h-1'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='aspect-w-1 aspect-h-1'>
                <img src={Image5} alt="Gallery Image 5" className='w-[300px] h-[200px] object-cover mb-4' />
              </div>
              <div className='aspect-w-1 aspect-h-1'>
                <img src={Image2} alt='Gallery Image 2' className='w-[300px] h-[200px] object-cover' />
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-8'>
          <div className='aspect-w-16 aspect-h-9'>
            <img src={Image4} alt="Gallery Image 4" className="w-full h-auto object-cover" />
          </div>
          <div className='aspect-w-1 aspect-h-1'>
            <div className='grid grid-cols-2 gap-4'>
              <div className='aspect-w-1 aspect-h-1'>
                <img src={Image6} alt='Gallery Image 6' className='w-[300px] h-[200px] object-cover mb-4' />
              </div>
              <div className='aspect-w-1 aspect-h-1'>
                <img src={Image1} alt="Gallery Image 1" className="w-[300px] h-[200px] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="p-4 md:pt-16 md:p-2 md:pb-24 ">
        <div className="relative md:mt-2 flex justify-center items-center">
          <video className="md:w-[800px] w-full rounded-xl" controls>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section>
        <div className='block md:grid md:grid-cols-2 gap-2 p-2 md:px-[15%] md:pb-8'>
        <div className='aspect-w-16 aspect-h-9 p-2'>
          <img src={Image8} alt='Gallery Image 8' className='w-[60vh] h-auto object-cover' />
        </div>
        <div className='flex flex-col justify-center p-2 md:text-start text-center'>
          <h2 className='text-2xl font-bold font-serif mb-2 md:mb-4 text-gray-800'>Newly Admitted Students</h2>
          <p className='text-sm font-thin'>
            Our students are passionate about sports and athletics and have the freedom to choose the they like abd wish to take up.
            We also particiate in inter-school, district, state and national level competitions.
          </p>
        </div>
        </div>
        <div className='md:grid-cols-2 gap-2 p-2 md:px-[15%] md:pb-8 hidden md:grid'>
        <div className='flex-col justify-center p-2 md:text-start text-center md:flex hidden'>
          <h2 className='text-2xl font-bold font-serif mb-4 text-gray-800'>Awarding Students</h2>
          <p className='text-sm font-thin'>
            We have several writers that who are enchoraged to come up with creation that are regularly published in our in-house magazines. 
            We host a book sale every 2 years to promote our writers and their work.
          </p>
        </div>
         <div className='aspect-w-16 aspect-h-9 p-2 md:flex hidden'>
          <img src={Image7} alt='Gallery Image 7' className='w-full h-[50vh] object-cover' />
        </div>
        </div>
        <div className='block md:grid md:grid-cols-2 gap-2 p-2 md:px-[18%] pb-8'>
         <div className='aspect-w-16 aspect-h-9 p-2 pl-[35%] md:pl-0'>
          <img src={Image5} alt='Gallery Image 5' className='md:w-auto md:h-[55vh] w-1/2 h-auto object-cover' />
        </div>
        <div className='flex-col justify-center p-2 md:text-start text-center md:flex'>
          <h2 className='text-2xl font-bold font-serif mb-2 md:mb-4 text-gray-800'>Performing Arts & Music</h2>
          <p className='text-sm font-thin'>
           With professionals on borad, we take pride in training our students in art forms like dance, drama, panting and more.
           We organize exhibitions, concerts and musical events to encourage our students to own their talent and flourish in those fields.
          </p>
        </div>
        </div>
      </section>

    </div>
  );
}

export default Gallery;
