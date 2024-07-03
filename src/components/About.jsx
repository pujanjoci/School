import React, { useState, useEffect } from 'react';
import Principal from '../assets/principal.jpg'; // Assuming Principal image is used for all teachers for now
import { ImQuotesLeft } from "react-icons/im";
import teachersData from './About/Teacher.json'; // Import the JSON data

const About = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    setTeachers(teachersData);
  }, []);

  const getImageById = (id) => {
    // For simplicity, using the same image for all teachers
    // Take the id from the Teacher.json and add images according to the id for the teacher in the about page and show it here or import it directly
    return Principal;
  };

  return (
    <div>
      <div className='p-4 bg-green-700 mb-4'>
        <h1 className='text-center text-gray-100 text-3xl font-serif'>
          About Page
        </h1>
      </div>

      <section className=' md:pt-10 pt-2'>
        <div className="grid grid-cols-2 md:gap-8 gap-2 items-center md:px-[20%] px-8 md:mt-12 mt-4">
          <div className="flex justify-end">
            <h2 className="text-md md:text-4xl mb-2 md:mb-6 font-serif text-gray-700 relative">
              St. Joseph's English Academy
              <span className="bg-green-900 h-px md:w-1/6 w-1/5 mt-2 absolute bottom-0 md:bottom-[-10px] left-0 transform translate-y-1/2"></span>
            </h2>
          </div>
          <div className="text-left md:text-left">
            <p className="text-sm md:text-sm md:font-normal font-thin md:hidden">
              Many Families enroll on our program to maintain actively meaningful role in the education of their children knowing that we value having parents as the primary educator.
            </p>
            <p className="text-sm md:text-sm md:font-normal font-thin text-gray-600 hidden md:block">
              Welcome to St. Joseph's English Academy. We are serving in the education sector at local level since 1999. We are very pleased to be part of this community and enjoy the close relationships that we have with our locality in serving students. <br/><br/>
               Many Families enroll on our program to maintain actively meaningful role in the education of their children knowing that we value having parents as the primary educator.
            </p>
          </div>
        </div>
      </section>

      <section className='md:mt-24 mt-10 bg-gray-50 p-2 md:p-8'>
        <div className="grid grid-cols-2 gap-4 items-center pr-4 md:pl-[5%] md:pr-[25%]">
          <div className="flex justify-end">
            <img 
              src={Principal} 
              alt="Principal" 
              className="h-[150px] md:h-[300px] w-[150px] md:w-[250px] object-cover rounded-lg"
            />
          </div>
        <div className=''>
            <h3 className='text-2xl md:pl-2 md:pb-4 p-2 text-green-600'>
                <ImQuotesLeft />
            </h3>
            <p className='md:text-4xl text-md font-serif text-gray-500 italic px-2 md:flex'>
               Everyday at the School is like a blessing with active students and talented staff members around
            </p>
            <p className='py-2 px-4 md:mt-2 text-sm md:text-lg text-start md:text-start text-gray-700 font-serif'>
                Dhambar Singh K.C. - Principal
            </p>
        </div>
        </div>
      </section>

      <section className="p-4 md:p-8 mt-6 md:mt-8">
        <h2 className='text-center font-bold text-sm font-serif md:mb-4 mb-2 '>St. Josheph Academy at a glance</h2>
        <div className="grid grid-cols-4 gap-4 md:px-64">
            <div className="p-4 text-center">
                <h3 className='text-3xl md:text-5xl font-bold text-green-800'>100+</h3>
                <p className='text-sm mt-2 text-gray-400'>SEE Toppers</p>
            </div>
            <div className="p-4 text-center">
                <h3 className='text-3xl md:text-5xl font-bold text-green-800'>2k+</h3>
                <p className='text-sm mt-2 text-gray-400'>Enrolments</p>
            </div>            
            <div className="p-4 text-center">
                <h3 className='text-3xl md:text-5xl font-bold text-green-800'>90+</h3>
                <p className='text-sm mt-2 text-gray-400'>Qualified Staff</p>
            </div>            
            <div className="p-4 text-center">
                <h3 className='text-3xl md:text-5xl font-bold text-green-800'>80+</h3>
                <p className='text-sm mt-2 text-gray-400'>Club & Activities</p>
            </div>
        </div>
      </section>
      
      <section className='mt-6 md:mt-4'>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center pr-4 md:pl-[20%] md:pr-[15%] md:mb-2 mb-2"> 
              <div className="col-span-1 p-2 md:py-14 md:px-4 md:border-t-2 md:border-gray-300">
                <h2 className="text-md font-semibold font-serif text-center md:text-start">Our Mission</h2>
              </div>
              <div className="col-span-1 md:ml-[-30%] p-4 md:py-7 md:px-2 md:border-t-2 md:border-gray-300">
                <p className='text-sm font-thin text-center md:text-start'>
                  Our mission at St. Joseph's English Academy is to develop the unique abilities and the potential of each child by offering an enriched education program. 
                  We strive for excellence through a hands-on approach. 
                  Rich traditions rooted in our innovative curriculum grow productive, caring, and intellectually curious citizens.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center pr-4 md:pl-[20%] md:pr-[15%] md:mb-2 mb-2"> 
              <div className="col-span-1 md:py-14 p-2 md:px-4 md:border-t-2 md:border-gray-300">
                <h2 className="text-md font-semibold font-serif text-center md:text-start">Our Vision</h2>
              </div>
              <div className="col-span-1 md:ml-[-30%] p-4 md:py-[48px] md:px-2 md:border-t-2 md:border-gray-300">
                <p className='text-sm font-thin text-center md:text-start'>
                  We have a culture that is modern, relevant, and inspires students to have a bright future. 
                  We are determined in our approach to learn, are creative in our thinking, and bold in ambitions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center pr-4 md:pl-[20%] md:pr-[15%] md:mb-2 mb-2"> 
              <div className="col-span-1 md:py-14 p-2 md:px-4 md:border-t-2 md:border-gray-300">
                <h2 className="text-md font-semibold font-serif text-center md:text-start">Objectives</h2>
              </div>
              <div className="col-span-1 p-4 md:ml-[-30%] md:py-7 md:px-2 md:border-t-2 md:border-gray-300">
                <p className='text-sm font-thin text-center md:text-start'>
                  We at St. Joseph's English Academy follow a child-centered education approach. 
                  We make sure that is based on scientific observation from birth to adulthood. 
                  We believe that a child is naturally curious and is capable of initiating learning in a supportive and thoughtfully prepared environment.
                </p>
              </div>
            </div>
        </div>
      </section>

        <section className='pt-8 md:pt-16 pb-8 bg-gray-50'>
          <h2 className='text-center md:text-start md:pl-[20%] md:text-5xl text-3xl md:mb-8 mb-4 font-serif relative'>
              Meet our Team
             <span className="bg-green-900 h-px md:w-1/12 w-2/4 mt-2 absolute bottom-0 md:bottom-[-10px] left-[25%] md:left-[20%] transform translate-y-1/2"></span>
          </h2>
          <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-4 px-8 md:px-[20%]">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="flex flex-col items-center">
                <img src={getImageById(teacher.id)} alt={teacher.name} className="w-auto h-full rounded-lg mb-2" />
                <p className="text-center text-sm">{teacher.name}</p>
                <p className="text-center text-xs text-gray-500">{teacher.position}</p>
              </div>
            ))}
          </div>
        </section>
    </div>
  );
};

export default About;
