import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
  } from 'react-icons/fa'
  
  export default function Footer() {
    return (
      <footer className=" bg-[#E2E0DC] text-gray-800">
        {/* Top: Columns */}
        <div className="max-w-7xl mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center text-center">
    {/* Column 1 */}
    <div>
      <div className="flex justify-center mt-10 mb-5 space-x-6">
        <a href="#" className="text-xl hover:text-[#7C7062]"><FaFacebookF /></a>
        <a href="#" className="text-xl hover:text-[#7C7062]"><FaTwitter /></a>
        <a href="#" className="text-xl hover:text-[#7C7062]"><FaInstagram /></a>
        <a href="#" className="text-xl hover:text-[#7C7062]"><FaLinkedinIn /></a>
      </div>
      <img
        src="/Yoga-Landing/logo.png"
        alt="Logo"
        className="mx-auto h-20"
      />
      <ul className="flex justify-center mt-3 gap-4">
        <li><a href="#" className="hover:text-[#7C7062]">Home</a></li>
        <li><a href="#" className="hover:text-[#7C7062]">About</a></li>
        <li><a href="#" className="hover:text-[#7C7062]">Privacy Policy</a></li>
      </ul>
    </div>

    {/* Column 2 */}
    <div>
      <h3 className="text-lg lg:mt-10 mt-3 font-semibold lg:mb-5">Resources</h3>
      <ul className="space-y-3">
        <li><a href="#" className="hover:text-[#7C7062]">Wellness Tips</a></li>
        <li><a href="#" className="hover:text-[#7C7062]">Yoga Dictionary</a></li>
        <li><a href="#" className="hover:text-[#7C7062]">Meditation Techniques</a></li>
      </ul>
    </div>

    {/* Column 3 */}
    <div>
      <h3 className="text-lg lg:mt-10 mt-3 font-semibold lg:mb-5">Explore</h3>
      <ul className="space-y-3">
        <li><a href="#" className="hover:text-[#7C7062]">Services</a></li>
        <li><a href="#" className="hover:text-[#7C7062]">Careers</a></li>
        <li><a href="#" className="hover:text-[#7C7062]">Contact</a></li>
      </ul>
    </div>
  </div>
</div>

  

  
        {/* Bottom Info */}
        <div className="flex flex-col md:flex-row lg:mt-30 justify-between items-center pl-30 pr-30 pt-10 pb-10 bg-[#dbd8d6]  text-sm text-gray-700">
          <p>© Copyright {new Date().getFullYear()}. All rights reserved.</p>
          <a href="#" className="mt-2 md:mt-0 hover:text-[#7C7062]">Terms & Conditions</a>
        </div>
      </footer>
    )
  }
  