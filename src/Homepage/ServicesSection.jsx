import Container from '@/Shared/Container';
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import webDevelopment from '../assets/web.png';
import appDevelopment from '../assets/app-development.png';
import appPublishing from '../assets/publishing.png';
import appPromotion from '../assets/promotion.png';
import adPromotion from '../assets/add-promotion.jpg';
import lead from '../assets/lead.png';
import softwareTesting from '../assets/Softwaretesting.jpg';
import console from '../assets/console.png';

const ServicesSection = () => {
    const offers = [
        { title: 'Web Development', description: 'Create modern and responsive websites for your business.', icon: webDevelopment },
        { title: 'App Development', description: 'Build custom apps for Android and iOS platforms.', icon: appDevelopment },
        { title: 'App Publishing', description: 'Publish your apps on the App Store and Play Store easily.', icon: appPublishing },
        { title: 'App Promotion', description: 'Effective promotion services to increase your app users.', icon: appPromotion },
        { title: 'Ad Promotion', description: 'Advertise your products and reach more customers.', icon: adPromotion },
        { title: 'Lead Generation', description: 'Collect potential customer information for your business.', icon: lead },
        { title: 'Testing Service', description: 'Find errors in your app or website and ensure quality.', icon: softwareTesting },
        { title: 'Console Service', description: 'Support for Google Play Console and Apple Developer Console.', icon: console },
    ];

    return (
        <div className="bg-[#111722] relative pt-4 pb-16 md:pb-24">
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#21304b] to-transparent opacity-60 z-0"></div>
            <Container>
                <div className="text-center mb-12 w-[95%] lg:w-[60%] mx-auto">
                    <h2 className="text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 mb-5 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                    Your Success, Our Services
                    </h2>
                    <p className="text-gray-300">Discover our expert services tailored to accelerate your business growth and ensure long-term success.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {offers.map((offer, index) => (
                        <div key={index} className="bg-[#090F1B] bg-opacity-90 backdrop-blur-lg rounded-tr-3xl rounded-bl-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform border border-gray-700 overflow-hidden hover:border-blue-300 group relative">
                            <div className="h-48 w-48 xl:w-52 xl:h-52 mb-6 mx-auto rounded-full border-[3px] border-gray-700 group-hover:border-blue-300 shadow-md overflow-hidden">
                                <img src={offer.icon} alt={offer.title} className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2 text-center">{offer.title}</h3>
                            <p className="text-gray-300 mb-16 text-center text-sm">{offer.description}</p>
                            <div className="flex gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                <button className="flex justify-center items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 lg:px-2 lg:py-1 xl:px-4 xl:py-2 rounded-full transition-all shadow-md w-1/2 text-sm xl:text-base">
                                   Details <FaArrowRight />
                                </button>
                                <button className="flex justify-center items-center gap-2 text-white bg-green-600 hover:bg-green-700 lg:px-2 lg:py-1 px-4 py-2 xl:px-4 xl:py-2 rounded-full transition-all shadow-md w-1/2 text-sm xl:text-base">
                                    <FaPhoneAlt  /> Contact
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default ServicesSection;
