import { motion } from 'framer-motion';

export default function Explore() {
    return (
      <section id='classes' className="py-16 px-10 bg-gradient-to-br from-[#E7DBCD] via-[#fcf6f6] to-[#FFFFFF] relative">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
            Yoga Style & Classes
          </h2>
          <p className="text-lg text-gray-600 md:max-w-2xl lg:max-w-4xl mx-auto">
          At YogaEra, we believe there's no one-size-fits-all practice. Whether you're seeking calm, strength, flexibility,
           or simply a moment of peace, our wide range of yoga styles meets you exactly where you are.
          </p>
        </div>
  
        {/* Explore Cards Grid */}
        <div className="flex justify-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 lg:gap-20 max-w-5xl w-full">
    {/* Card 1 */}
    <motion.div
          initial={{ y: 50, opacity: 0 }}   
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 2, ease: "easeIn" }} className="rounded overflow-hidden w-full mx-auto">
      <img
        src="/Yoga-Landing/.jpg"
        alt="Card 1"
        className="w-full h-64 lg:h-100 rounded-2xl object-cover mb-5"
      />
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Yoga</h3>
        <p className="text-gray-600 mb-6">
          Slow down, breathe deep. This gentle, traditional practice is perfect for beginners or anyone seeking balance and calm.
        </p>
        <div className="grid  lg:grid-cols-3 grid-cols-2 gap-2">
          <button className="bg-[#5F4729] text-white rounded-md hover:bg-[#7C7062]">
            All
          </button>
          <button className="text-gray-800 rounded-md hover:bg-[#7C7062] border border-gray-700">
            Get Started
          </button>
          <button className="text-gray-800 rounded-md hover:bg-[#7C7062] border border-gray-700">
            Get Started
          </button>
          <button className="text-gray-800 rounded-md hover:bg-[#7C7062] border border-gray-700 col-span-2 sm:col-span-1">
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  
          {/* Card 2 */}
    <motion.div
          initial={{ y: 50, opacity: 0 }}   
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 2, ease: "easeIn" }} className="rounded overflow-hidden w-full mx-auto">
      <img
        src="/Yoga-Landing/two.jpg"
        alt="Card 1"
        className="w-full h-64 lg:h-100 rounded-2xl object-cover mb-5"
      />
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Vinyasa</h3>
        <p className="text-gray-600 mb-6">
         Flow with your breath. A dynamic  style that links movement with breath. Vinyasa energizes the body and mind.
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-2">
          <button className="bg-[#5F4729] text-white rounded-md hover:bg-[#7C7062]">
            All
          </button>
          <button className="text-gray-800 rounded-md hover:bg-[#7C7062] border border-gray-700">
            Beginner
          </button>
          <button className="text-gray-800 rounded-md hover:bg-[#7C7062] border border-gray-700">
            Intermediate
          </button>
          <button className="text-gray-800 rounded-md hover:bg-[#7C7062] border border-gray-700 col-span-2 sm:col-span-1">
            Advanced
          </button>
        </div>
      </div>
    </motion.div>
  
          {/* Card 3 */}
    <motion.div
          initial={{ y: 50, opacity: 0 }}   
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 2, ease: "easeIn" }} className="rounded overflow-hidden w-full mx-auto">
      <img
        src="/Yoga-Landing/three.jpg"
        alt="Card 1"
        className="w-full h-64 lg:h-100 rounded-2xl object-cover mb-5"
      />
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Meditation</h3>
        <p className="text-gray-600 mb-6">
          Slow down, breathe deep. This gentle, traditional practice is perfect for beginners or anyone seeking balance and calm.
       </p>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-2">
          <button className="bg-[#5F4729] text-white rounded-md hover:bg-[#7C7062]">
            All
          </button>
          <button className="text-gray-800 rounded-md hover:bg-[#7C7062] border border-gray-700">
            Get Started
          </button>
          <button className="text-gray-800 rounded-md hover:bg-[#7C7062] border border-gray-700">
            Get Started
          </button>
          <button className="text-gray-800 rounded-md hover:bg-[#7C7062] border border-gray-700 col-span-2 sm:col-span-1">
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  
          {/* Card 4 */}
    <motion.div
          initial={{ y: 50, opacity: 0 }}   
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 2, ease: "easeIn" }} className="rounded overflow-hidden w-full mx-auto">
      <img
        src="/Yoga-Landing/four.jpg"
        alt="Card 1"
        className="w-full h-64 lg:h-100 rounded-2xl object-cover mb-5"
      />
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Power Yoga</h3>
        <p className="text-gray-600 mb-6">
         Flow hard. Feel Strong. Power yoga is a high energy class blends strength, balance into an uplifting workout.
        </p>
        <div className="grid lg:grid-cols-3 grid-cols-2  gap-2">
          <button className=" bg-[#5F4729] text-white rounded-md hover:bg-[#7C7062]">
            All
          </button>
          <button className=" text-gray-800 rounded-md hover:bg-[#7C7062] border border-gray-700">
            Get Started
          </button>
          <button className=" text-gray-800 rounded-md hover:bg-[#7C7062] border border-gray-700">
            Get Started
          </button>
          <button className=" text-gray-800 rounded-md hover:bg-[#7C7062] border border-gray-700 col-span-2 sm:col-span-1">
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
        </div>
        </div>
      </section>
    );
  }
  