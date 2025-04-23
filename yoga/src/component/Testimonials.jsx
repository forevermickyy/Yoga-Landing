import { motion } from 'framer-motion';

export default function Testimonial() {
    return (
      <section id="testimonial" className="relative py-16 px-6 md:px-16 bg-gradient-to-br from-[#E7DBCD] via-[#ffffff] to-[#FFFFFF] ">
        {/* Clip Art Background with Blur
        <div className="absolute inset-0 z-0">
          <img
            src="https://via.placeholder.com/1600x800?text=Clip+Art" // Replace with your clip art image URL
            alt="Background Clip Art"
            className="w-full h-full object-cover filter blur-lg"
          />
        </div> */}
  
        {/* Testimonial Grid */}
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
            Testimonials
          </h2>
          <p className="text-center text-lg mb-10 text-gray-600 md:max-w-2xl lg:max-w-3xl mx-auto">
  At Yoga Era, our community is at the heart of everything we do. From first-time yogis to seasoned 
  practitioners, our students find space to grow, heal, and reconnect.
</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image 1 */}
            <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 2 }} className="relative flex flex-col items-center p-6 rounded-lg">
              <img
                src="/a.jpg"
                alt="Testimonial 1"
                className="w-full h-60 object-cover rounded-lg transition-transform transform group-hover:scale-105"
              />
              <div className="mt-4 text-center">
                <div className="bg-[#BBAFA0] text-gray-800 p-4 rounded-b-lg">
                  <p className="text-lg font-medium">Kalta Josha Kosh</p>
                  <p className="text-sm">“Stronger, calmer, more present”
                  “I never thought I’d enjoy yoga this much. The Power Yoga flows are challenging but energizing, and
                   I’ve seen a huge difference in my strength and focus."</p>
                </div>
              </div>
            </motion.div>
  
            {/* Image 2 (Middle Image Raised) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 4 }} className="relative flex flex-col items-center p-6 rounded-lg transform -translate-y-10">
              <img
                src="/b.jpg"
                alt="Testimonial 2"
                className="w-full h-60 object-cover rounded-lg transition-transform transform group-hover:scale-105"
              />
              <div className="mt-4 text-center">
                <div className="bg-[#D1C5B6] text-gray-800 p-4 rounded-b-lg">
                  <p className="text-lg font-medium">Amelia Simple Life</p>
                  <p className="text-sm">
                  “I started with Hatha classes to slow down after long workdays, and now I practice almost every morning. Yoga Era 
                  helped me reconnect with my breath and body, it’s been life-changing.”</p>
                </div>
              </div>
            </motion.div>
  
            {/* Image 3 */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }} className="relative flex flex-col items-center p-6 rounded-lg">
              <img
                src="/c.jpg"
                alt="Testimonial 3"
                className="w-full h-60 object-cover rounded-lg transition-transform transform group-hover:scale-105"
              />
              <div className="mt-4 text-center">
                <div className="bg-[#A6998A] text-gray-800 p-4 rounded-b-lg">
                  <p className="text-lg font-medium">Josephine Melis Sam</p>
                  <p className="text-sm">“I travel often, and Yoga Era makes it easy to stay centered no matter where I am. The instructors
                     are so grounding, and the classes flow beautifully.”</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
  