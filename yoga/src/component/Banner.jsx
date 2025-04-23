export default function Banner() {
    return (
      <section className="relative bg-[#D1C5B6] text-white py-16 px-6 md:px-16">
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready To Begin Your Journey?
          </h2>
          <p className="text-lg sm:text-xl mb-6">
            Discover the best resources to enhance your skills and grow.
          </p>
          <a
            href="#"
            className="inline-block bg-[#5A4F41] hover:bg-gray-500 text-white py-2.5 px-6 rounded-md text-lg font-semibold transition duration-300"
          >
            Sign Up Today
          </a>
        </div>
      </section>
    )
  }
  