import React from "react";

const AddMemberForm = () => {
  return (
    <form className="max-w-2xl mx-auto p-6 rounded-lg shadow-lg">
      {/* Full Name Input */}
      <div className="mb-6">
        <label
          className="block text-white font-semibold mb-2"
          htmlFor="fullName"
        >
          Personal Information
        </label>
        <input
          type="text"
          id="fullName"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter full name"
        />
      </div>

      {/* Date of Birth Input */}
      <div className="mb-6 relative text-white font-thin italic">
        <input
          type="date"
          id="date"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
          placeholder="Choose date of birth"
        />
        Select Date of Birth
      </div>

      {/* Contact Input */}
      <div className="mb-6">
        <input
          type="number"
          id="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Phone Number"
          min="0"
          max="9999999999"
          onInput={(e) => {
            const value = e.target.value;
            if (value.length > 10) {
              e.target.value = value.slice(0, 10);
            }
          }}
        />
      </div>

      {/* Sex Radio Buttons */}
      <p className="block font-semibold text-white">Sex</p>
      <div className="text-white flex font-thin italic">
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="male"
            name="sex"
            value="male"
            className="mr-2"
          />
          <label htmlFor="male" className="mr-4">
            Male
          </label>
        </div>
        <div className="flex items-center mb-2">
          <input
            type="radio"
            id="female"
            name="sex"
            value="female"
            className="mr-2"
          />
          <label htmlFor="female" className="mr-4">
            Female
          </label>
        </div>
      </div>
      {/* Separator Line */}
      <div className="my-7">
      <hr className="border-t-2 border-[#EBC41F]" />
      </div>

      {/* Membership Details Input */}
      <div className="mb-2">
        <label
          className="block text-white font-semibold "
          htmlFor="membershipDetails"
        >
          Membership Details
        </label>
      </div>
      <div className=" relative text-white font-thin italic">
        <input
          type="date"
          id="dateJoined"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
          placeholder="Choose date joined"
        />
        Select Date Joined
      </div>
      {/* Separator Line */}
      <div className="my-7">
        <hr className="border-t-2 border-[#EBC41F]" />
      </div>

      {/* Membership Details Input */}
      <div className="mb-2">
        <label
          className="block text-white font-semibold "
          htmlFor="membershipDetails"
        >
          Emergency Contact Details
        </label>
      </div>
      {/* Full Name Input */}
      <div className="mb-6">
        <input
          type="text"
          id="fullName"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter full name"
        />
      </div>
      {/* Contact Input */}
      <div className="mb-6">
        <input
          type="number"
          id="number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Phone Number"
          min="0"
          max="9999999999"
          onInput={(e) => {
            const value = e.target.value;
            if (value.length > 10) {
              e.target.value = value.slice(0, 10);
            }
          }}
        />
      </div>

      {/* File Upload Input */}
      <div className="mb-6">
        <label className="block text-white font-semibold mb-2" htmlFor="image">
          Upload Member Image
        </label>
        <input
          type="file"
          id="image"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <p className="text-gray-500 text-sm mt-2">Max file size 50 MB.</p>
      </div>

      {/* Submit Button */}
      <div className="text-right">
        <button
          type="submit"
          className="bg-white text-[#04133F] rounded-lg px-6 py-2 hover:bg-[#020b25] hover:text-white transition duration-200"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddMemberForm;
