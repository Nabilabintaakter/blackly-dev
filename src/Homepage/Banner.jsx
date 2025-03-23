import image1 from "../assets/websd.jpg";
import image2 from "../assets/image2.jpg";
import Container from "../Shared/Container";

const Banner = () => {
  return (
    <div id="home" className="bg-[#111722] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#21304b] to-transparent opacity-60 z-0"></div>
      <Container>
        <div className="flex flex-col md:flex-row items-center relative pb-12 pt-24 md:pb-20 md:pt-28 lg:pt-32">
          {/* Left Content */}
          <div className="w-full md:w-1/2 ">
            <div className='bg-[#3a435e7e] px-4 rounded-full flex items-center w-fit mb-4 p-2'>
              <div className="h-2 w-2 bg-blue-600 rounded-full mr-2 animate-ping"></div>
              <h3 className="font-bold text-[10px] md:text-sm text-white">
              Building Success with Web, App & Digital Marketing!
              </h3>
            </div>
            <h1 className="w-[96%] text-white text-4xl lg:text-5xl font-bold leading-tight">
            Empowering Your Vision with  <span className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 mb-3 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)] ">
            Cutting-Edge Digital Solutions
              </span>
            </h1>
            <p className="lg:text-lg text-gray-300 md:mt-4 mt-10">
              Handcrafted solutions to accelerate your business growth. From startups to enterprises, we deliver innovative, fast, and high-quality applications that bring your vision to life. Our affordable web and mobile services ensure fast delivery without compromising quality.
            </p>
            <div className="mt-10 md:mt-6 flex justify-center md:justify-start gap-4">
              <button className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition">
                Get Started ➜
              </button>
              <button className="px-6 py-3 border border-gray-500 text-gray-300 rounded-lg hover:border-white hover:text-white transition">
                How It Works
              </button>
            </div>
          </div>

          {/* Right Side Images with overlay and z-index effect */}
          <div className="hidden md:flex md:w-1/2 justify-center relative">
            <img
              src={image1}
              alt="Development"
              className="w-3/5 rounded-tl-4xl rounded-br-4xl shadow-lg absolute -top-14 z-10 border-l-[3px] border-b-[3px] border-l-blue-400 border-b-blue-400"
            />
            <img
              src={image2}
              alt="Tech Solutions"
              className="w-3/6 rounded-tl-4xl rounded-br-4xl shadow-lg absolute -top-44 right-0 z-0  border-r-[3px] border-t-[3px] border-r-blue-400 border-t-blue-400"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
