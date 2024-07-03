import React, { useRef } from 'react';
import { FaPlus } from 'react-icons/fa';

const OnlineAdmission = () => {
  const fileInputRef = useRef(null);

  const handleFileButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <div className='p-4 bg-green-700 mb-4'>
        <h1 className='text-center text-gray-100 text-3xl font-serif'>
          Admission Form
        </h1>
      </div>
    <div className="min-h-screen flex flex-col items-center md:py-4 justify-center bg-gray-50">
      <div className="bg-white p-8 md:rounded-lg shadow-md w-full max-w-3xl mb-8 border-t-2 md:border-none">
        <h2 className="text-2xl font-bold mb-6 text-center md:text-start">Personal Details</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Father's Name</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">DOB</label>
            <input type="date" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Mother's Name</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Gender</label>
            <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Father's Phone No.</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Mother's Phone No.</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-gray-700">Permanent Address</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="md:col-span-1">
            <label className="block text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
        </form>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Education Details</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700">Admission For</label>
            <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700">Marksheet of Previous Class</label>
            <div className="mt-1 flex justify-center items-center p-6 border-2 border-dashed border-gray-300 rounded-md">
              <div className="text-center">
                <FaPlus className="mx-auto h-10 w-10 text-gray-400 hover:cursor-pointer"  onClick={handleFileButtonClick} />
                <p className="mt-1 text-sm text-gray-600">
                  <button type="button" onClick={handleFileButtonClick} className="font-medium text-green-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out">
                    Upload a file
                  </button>
                  <span> or drag and drop</span>
                </p>
                <p className="mt-1 text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
            <input type="file" ref={fileInputRef} className="hidden" />
          </div>
          <div className="md:col-span-2 flex justify-end space-x-4">
            <button type="reset" className="py-2 px-4 border-2 border-green-800 hover:border-white bg-white hover:bg-green-800 text-green-800 hover:text-white font-semibold rounded-md transition duration-500 ease-in-out">
              Reset
            </button>
            <button type="submit" className="py-2 px-4 border-2 hover:border-green-800 bg-green-800 hover:bg-white text-white hover:text-green-800 font-semibold rounded-md transition duration-500 ease-in-out">
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default OnlineAdmission;
