import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isButtonLocked, setIsButtonLocked] = useState(false);

  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsButtonLocked(true);

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch(form.action, {
        method: form.method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='bg-green-800 grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-4 px-8 md:px-[20%] py-8'>
      {/* Contact Information */}
      <div className='flex flex-col justify-center'>
        <h2 className='md:text-5xl text-3xl font-bold font-serif text-center md:text-start text-gray-100 mb-6'>Contact Us</h2>
        <p className='text-sm text-gray-100 pb-4 text-center md:text-start'>
          Wish to inquire about admission, syllabus or anything else?
          You can walk in during office hours, give us a call or simply submit the form here.
        </p>
        <div className='mb-4 text-gray-100 text-center md:text-start border-b border-green-100'>
          <FaMapMarkerAlt className='inline-block text-sm mr-2' />
          <span className='text-md'>Address</span>
          <p className='text-lg md:text-xl'>
            Budanilkantha-08, Golfutar, Kathmandu
          </p>
        </div>
        <div className='mb-4 text-gray-100 text-center md:text-start border-b border-green-100'>
          <FaPhoneAlt className='inline-block text-sm mr-2' />
          <span className='text-md'>Phone</span>
          <p className='text-lg md:text-xl'>
            +014466666, +014432323
          </p>
        </div>
        <div className='text-gray-100 text-center md:text-start border-b border-green-100'>
          <FaEnvelope className='inline-block text-sm mr-2' />
          <span className='text-md'>Email</span>
          <p className='text-lg md:text-xl'>
            contact@school.edu
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className='flex flex-col justify-center'>
        <p className='p-2 md:text-md text-xl text-gray-100 font-serif md:text-start text-center'>
          Send Us a Message
        </p>
        <form onSubmit={handleSubmit} action='https://formspree.io/f/mzbnnqoy' method='POST' className='space-y-4 p-2'>
          <div>
            <input type='text' id='name' name='name' placeholder='Full Name' className='w-full p-2 border border-gray-300' disabled={isSubmitting} required />
          </div>
          <div>
            <input type='email' id='email' name='email' placeholder='Email' className='w-full p-2 border border-gray-300' disabled={isSubmitting} required />
          </div>
          <div>
            <input type='text' id='subject' name='subject' placeholder='Subject' className='w-full p-2 border border-gray-300' disabled={isSubmitting} />
          </div>
          <div>
            <textarea id='message' name='message' rows='4' placeholder='Messages' className='w-full p-2 border border-gray-300' disabled={isSubmitting} required></textarea>
          </div>
          <div className='flex justify-center md:justify-start'>
            <button type='submit' className={`px-4 py-2 border rounded-md ${isButtonLocked ? 'bg-gray-400 border-gray-400 text-gray-700' : 'bg-green-800 border-gray-100 hover:bg-gray-100 hover:border-indigo-800 hover:text-green-800 text-white'}`} disabled={isSubmitting || isButtonLocked}>
              {isSubmitting ? 'Submitting...' : isButtonLocked ? 'Submitted' : 'Submit'}
            </button>
          </div>
        </form>
        {isSubmitting && <div className='text-center text-gray-100 mt-4'>Submitting your form...</div>}
        {isSubmitted && <div className='text-center text-red-600 mt-4'>Your message has been sent successfully!</div>}
      </div>
    </section>
  );
};

export default Contact;
