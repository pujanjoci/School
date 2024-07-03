import React from 'react'
import Image1 from './Global/image1.jpg';
import Image2 from './Global/image2.jpg';
import Image3 from './Global/image3.jpg';


const GlobalConnection = () => {
  return (
        <div>
      <div className='p-4 bg-green-700 mb-4'>
        <h1 className='text-center text-gray-100 text-3xl font-serif'>
          Global Connection
        </h1>
      </div>

      <section className="p-2 md:p-12">
        <div className="grid grid-cols-2 gap-4 md:gap-16 items-center">
          <div className="flex justify-end">
            <img 
              src={Image1} 
              alt="Image1" 
              className="h-[150px] md:h-[300px] w-[150px] md:w-[300px] object-cover md:rounded-none rounded-lg"
            />
          </div>
          <div className="text-left md:text-left">
            <h2 className="text-md md:text-4xl md:pr-64 mb-2 md:mb-6 font-serif text-gray-700 relative">
              Message from the (Global-Connection)
              <span className="bg-green-900 h-px md:w-1/6 w-1/5 mt-2 absolute bottom-0 md:bottom-[-10px] left-0 transform translate-y-1/2"></span>
            </h2>
            <p className="text-sm md:text-sm md:pr-32 md:font-normal font-thin md:hidden">
              Our school continues to garner for the individual work we are accomplishing with students daily with options we provide.
            </p>
            <p className="text-sm md:text-sm md:pr-36 md:font-normal font-thin text-gray-600 hidden md:block">
              Welcome to St. Joseph's English Academy. We are serving in the education sector at local level since 1999. We are very pleased to be part of this community and enjoy the close relationships that we have with our locality in serving students. <br/><br/>
              Our school continues to garner for the individual work we are accomplishing with students daily with options we provide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-4 md:p-12">
        <div className="grid grid-cols-2 gap-2 items-center md:px-[20%] px-6">
          <div className="text-left md:text-left">
            <h2 className="text-md md:text-4xl mb-2 md:mb-6 font-serif text-gray-700 relative">
              Message from the (Global-Connection)
              <span className="bg-green-900 h-px md:w-1/6 w-1/5 mt-2 absolute bottom-0 md:bottom-[-10px] left-0 transform translate-y-1/2"></span>
            </h2>
            <p className="text-sm md:text-sm md:font-normal font-thin md:hidden">
              Our school continues to garner for the individual work we are accomplishing with students daily with options we provide.
            </p>
            <p className="text-sm md:text-sm md:font-normal font-thin text-gray-600 hidden md:block">
              Welcome to St. Joseph's English Academy. We are serving in the education sector at local level since 1999. We are very pleased to be part of this community and enjoy the close relationships that we have with our locality in serving students. <br/><br/>
              Our school continues to garner for the individual work we are accomplishing with students daily with options we provide.
            </p>
          </div>
          <div className="flex justify-end">
            <img 
              src={Image2} 
              alt="Image2" 
              className="h-[150px] md:h-[300px] w-[150px] md:w-[300px] object-cover md:rounded-none rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-4 md:p-12">
        <div className="grid grid-cols-2 gap-4 md:gap-16 items-center">
          <div className="flex justify-end">
            <img 
              src={Image3} 
              alt="Image3" 
              className="h-[150px] md:h-[300px] w-[150px] md:w-[300px] object-cover md:rounded-none rounded-lg"
            />
          </div>
          <div className="text-left md:text-left">
            <h2 className="text-md md:text-4xl md:pr-64 mb-2 md:mb-6 font-serif text-gray-700 relative">
              Message from the (Global-Connection)
              <span className="bg-green-900 h-px md:w-1/6 w-1/5 mt-2 absolute bottom-0 md:bottom-[-10px] left-0 transform translate-y-1/2"></span>
            </h2>
            <p className="text-sm md:text-sm md:pr-32 md:font-normal font-thin md:hidden">
              Our school continues to garner for the individual work we are accomplishing with students daily with options we provide.
            </p>
            <p className="text-sm md:text-sm md:pr-36 md:font-normal font-thin text-gray-600 hidden md:block">
              Welcome to St. Joseph's English Academy. We are serving in the education sector at local level since 1999. We are very pleased to be part of this community and enjoy the close relationships that we have with our locality in serving students. <br/><br/>
              Our school continues to garner for the individual work we are accomplishing with students daily with options we provide.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GlobalConnection