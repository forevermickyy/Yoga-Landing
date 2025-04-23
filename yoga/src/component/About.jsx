import { FaChalkboardTeacher } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { GiMeditation } from "react-icons/gi";
import { SlScreenDesktop } from "react-icons/sl";
import { motion } from "framer-motion";

export default function About() {
    return (
      <section id="about" className="py-16 px-6  bg-gradient-to-br from-[#E7DBCD] via-[#ffffff] to-[#FFFFFF] ">
  
        {/* Top Section - Image on Left, Text on Right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl mx-auto">
          {/* Image on Left */}
          <motion.div
          initial={{ x: -100, opacity: 0 }}   
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 2, ease: "easeIn" }} className="w-full flex justify-center items-center lg:w-1/3">
            <img
              src="./about1.png"
              alt="About Image"
              className="w-60 h-auto object-cover"
            />
          </motion.div>
          {/* Text on Right */}
          <motion.div
          initial={{ x: 100, opacity: 0 }}   
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 2, ease: "easeIn" }} className="w-full lg:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Start Your Yoga Journey Today</h2>
          <p className="text-lg text-gray-700 mb-6 md:max-w-2xl lg:max-w-2xl">
            Our yoga classes are designed to help you connect with your body, calm your mind, and unlock your full potential.
          </p>
          <div className="sm:flex sm:justify-center lg:mr-100">
                <button className="bg-[#5A4F41] rounded-4xl text-white px-5 py-3 w-auto">
          Learn More
        </button>
      </div>
    </motion.div>
</div>
  
        {/* Bottom Section - Grid of Icons on Left, Image on Right */}
        <div className="relative z-10 mt-16 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
    
    {/* Left Section - Header + Icon Grid */}
    <div className="w-full lg:w-3/5">
      <h1 className="text-3xl font-bold text-center justify-items-center">Why Choose Our Yoga Classes</h1>
      <div className="grid grid-cols-2 gap-8 p-10">
  {/* Card Item */}
  <div className="flex flex-col items-center text-center">
    <div className="bg-[#C8C5C5] text-white rounded-lg p-3 flex items-center justify-center h-[150px] w-[150px]">
      <div className="bg-[#FDF2E5] text-gray-800 rounded-full flex items-center justify-center h-full w-[120px]">
        <FaChalkboardTeacher className="text-7xl" />
      </div>
    </div>
    <p className="text-lg font-semibold text-gray-700 mt-3">Experienced Instructors</p>
  </div>

  <div className="flex flex-col items-center text-center">
    <div className="bg-[#C8C5C5] text-white rounded-lg p-3 flex items-center justify-center h-[150px] w-[150px]">
      <div className="bg-[#FDF2E5] text-gray-800 rounded-full flex items-center justify-center h-full w-[120px]">
        <LuCalendarDays className="text-7xl" />
      </div>
    </div>
    <p className="text-lg font-semibold text-gray-700 mt-3">Flexible Class Schedule</p>
  </div>

  <div className="flex flex-col items-center text-center">
    <div className="bg-[#C8C5C5] text-white rounded-lg p-3 flex items-center justify-center h-[150px] w-[150px]">
      <div className="bg-[#FDF2E5] text-gray-800 rounded-full flex items-center justify-center h-full w-[120px]">
        <GiMeditation className="text-7xl" />
      </div>
    </div>
    <p className="text-lg font-semibold text-gray-700 mt-3">Yoga For All Classes</p>
  </div>

  <div className="flex flex-col items-center text-center">
    <div className="bg-[#C8C5C5] text-white rounded-lg p-3 flex items-center justify-center h-[150px] w-[150px]">
      <div className="bg-[#FDF2E5] text-gray-800 rounded-full flex items-center justify-center h-full w-[120px]">
        <SlScreenDesktop className="text-7xl" />
      </div>
    </div>
    <p className="text-lg font-semibold text-gray-700 mt-3">Online & On-demand Classes</p>
  </div>
</div>


    </div>

    {/* Right Section - Image */}
    <motion.div
          initial={{ x: 50, opacity: 0 }}   
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 3, ease: "easeOut" }} className="w-full lg:w-2/5 flex items-center justify-center">
      <img
        src="about2.png"
        alt="About Section Image"
        className="w-full max-h-[600px] object-cover rounded-lg shadow-lg"
      />
    </motion.div>
  </div>
</section>
    );
  }
  