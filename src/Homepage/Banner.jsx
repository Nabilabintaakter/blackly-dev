import image1 from "../assets/websd.jpg"; 
import image2 from "../assets/image2.jpg"; 
import Container from "../Shared/Container";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#0d0d0d] to-[#1a1a1a] text-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center relative pb-12 pt-20 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Delivering Fast, Reliable and <span className="text-blue-800">Scalable Digital Solutions</span>
            </h1>
            <p className="text-lg text-gray-300 mt-4">
              Handcrafted solutions to accelerate your business growth. From startups to enterprises, we deliver innovative, fast, and high-quality applications that bring your vision to life. Our affordable web and mobile services ensure fast delivery without compromising quality.
            </p>
            <div className="mt-6 flex justify-center md:justify-start gap-4">
              <button className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition">
                Get Started ➜
              </button>
              <button className="px-6 py-3 border border-gray-500 text-gray-300 rounded-lg hover:border-white hover:text-white transition">
                How It Work
              </button>
            </div>
          </div>

          {/* Right Side Images with z-index effect */}
          <div className="hidden md:flex md:w-1/2 justify-center relative">
            <img
              src={image1}
              alt="Development"
              className="w-3/5 rounded-lg shadow-lg absolute -top-14 z-10"
            />
            <img
              src={image2}
              alt="Tech Solutions"
              className="w-3/6 rounded-lg shadow-lg absolute -top-44 right-20 z-0 opacity-80"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;