
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";


export default function Contact() {
  return (
    <main>
      <section>
        
{/* CONTACT */}
<div className="flex flex-col md:flex-row mt-20 md:space-x-20 lg:space-x-96 lg:ml-[400px] lg:mt-40">
  {/* Box 1 */}
  <div className="space-y-6 px-4 md:w-[300px] lg:px-0 lg:ml-0 md:ml-14 sm:ml-6">
    <h4 className="text-xl text-gray-600 font-medium">CONTACT INFO</h4>
    <h1 className="text-2xl lg:text-4xl text-blue-900 font-semibold">
      Get in touch
    </h1>
    {/* Contact Details */}
    <div className="flex items-center pt-6">
    <p className="text-4xl">
      <IoCall />
        </p>
      <p className="ml-4">+1 (281) 652-8539</p>
    </div>
    <div className="flex items-center">
    <p className="text-4xl">
        <IoIosMail />
        </p>
      <p className="ml-4">info@1designinghub.com</p>
    </div>
    <div className="flex items-center">
    <p className="text-4xl">
      <FaMapMarkerAlt />
        </p>
      <p className="ml-4">
        Apt 1106 De Moss drive <br /> Houston TX
      </p>
    </div>
  </div>

  {/* Box 2 */}
  <div className="space-y-4 px-4 md:w-1/2 lg:px-0 md:mx-6 lg:pr-[250px] mt-10 md:mt-0">
    <h4 className="text-xl text-gray-600 font-medium">
      Discuss With Our Team
    </h4>
    <h1 className="text-2xl lg:text-4xl text-blue-900 font-semibold">
      Request Free Quote
    </h1>
    {/* Form Inputs */}
    <div className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Full Name"
        className="text-lg py-2 px-3 w-full md:w-1/2 border-b border-gray-400 focus:outline-none mt-4"
      />
      <input
        type="text"
        placeholder="Email Address"
        className="text-lg py-2 px-3 w-full md:w-1/2 border-b border-gray-400 focus:outline-none"
      />
    </div>
    <div className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Contact Number"
        className="text-lg py-2 px-3 w-full md:w-1/2 border-b border-gray-400 focus:outline-none mt-2"
      />
      <input
        type="text"
        placeholder="Subject"
        className="text-lg py-2 px-3 w-full md:w-1/2 border-b border-gray-400 focus:outline-none"
      />
    </div>
    <div className="space-y-5">
      <textarea
        placeholder="Message"
        className="mt-5 text-lg py-2 px-3 w-full md:w-auto h-[120px] border border-gray-300 focus:outline-none rounded-lg resize-none"
      />
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          defaultChecked
        />
        <label className="text-lg">
          I agree to the terms and conditions
        </label>
      </div>
      <button className="bg-blue-950 text-xl text-white py-4 px-8 w-full lg:w-auto md:px-40 lg:px-[210px] sm:px-60 rounded-full hover:bg-yellow-400 transition-all duration-1000 hover:text-black">
        Submit&gt;
      </button>
      <div className="flex items-center justify-center sm:justify-start">
        <p className="mr-2 text-xl">
        <FaLock></FaLock>
        </p>
        <p>We hate spam, and we respect privacy.</p>
      </div>
    </div>
  </div>
</div>
      </section>
    </main>
  );
}
