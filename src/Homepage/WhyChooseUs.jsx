import Container from '@/Shared/Container';
import React from 'react';
import { FaTrophy, FaRocket, FaHandsHelping, FaCogs, FaUsers, FaRegCheckCircle } from 'react-icons/fa';

const WhyChooseUs = () => {
    return (
        <div className="bg-[#101010] py-20">
            <Container>
                <div>
                    <h2 className="text-4xl lg:text-5xl font-semibold text-white text-center mb-4">Why Choose Us</h2>
                    <p className="text-lg text-gray-400 text-center mb-16">We combine creativity, technology, and strategy to drive your business forward.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {/* Card 1 */}
                        <div className="bg-blue-400/10 border-[1px] border-[#1a1a1a] hover:border-blue-400 p-8 rounded-[32px] shadow-lg hover:shadow-[0_0_8px_5px_rgba(59,130,246,0.5)] transition-all duration-500 transform hover:translate-y-[-5px] flex flex-col items-center justify-center">
                            <div className="mb-4 text-blue-400">
                                <FaTrophy className="text-5xl md:text-6xl" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-semibold text-blue-400 mb-4 text-center">Multiple Area Expertise</h3>
                            <p className="text-gray-300 text-center">
                            We specialize in web and mobile app development, offering user-centric digital solutions. We also provide expert video editing and promotional services to help your brand engage customers and thrive.
                            </p>
                        </div>



                        {/* Card 2 */}
                        <div className=" bg-green-400/10 border-[1px] border-[#1a1a1a] hover:border-green-400 p-8 rounded-[32px] shadow-lg hover:shadow-[0_0_8px_5px_rgba(34,197,94,0.5)] transition-all duration-500 transform hover:translate-y-[-5px] flex flex-col items-center justify-center">
                            <div className="mb-4 text-green-400">
                                <FaRocket className="text-5xl md:text-6xl" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-semibold text-green-400 mb-4 text-center">Result-Driven Strategies</h3>
                            <p className="text-gray-300 text-center">
                            Our services focus on driving installs, increasing conversions, and boosting visibility. We use data-driven strategies to measure success and optimize for maximum growth.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-yellow-400/10 border-[1px] border-[#1a1a1a] hover:border-yellow-400 p-8 rounded-[32px] shadow-lg hover:shadow-[0_0_8px_5px_rgba(253,230,138,0.5)] transition-all duration-500 transform hover:translate-y-[-10px] flex flex-col items-center justify-center">
                            <div className="mb-4 text-yellow-400">
                                <FaHandsHelping className="text-5xl md:text-6xl" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-semibold text-yellow-400 mb-4 text-center">Reliable Execution</h3>
                            <p className="text-gray-300 text-center">
                            Our team ensures precision and efficiency in every task, maintaining high standards. We focus on delivering exceptional quality, meeting deadlines, and exceeding expectations.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-pink-400/10 border-[1px] border-[#1a1a1a] hover:border-pink-400 p-8 rounded-[32px] shadow-lg hover:shadow-[0_0_8px_5px_rgba(236,72,153,0.5)] transition-all duration-500 transform hover:translate-y-[-10px] flex flex-col items-center justify-center">
                            <div className="mb-4 text-pink-400">
                                <FaCogs className="text-5xl md:text-6xl" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-semibold text-pink-400 mb-4 text-center">Innovative Solutions</h3>
                            <p className="text-gray-300 text-center">
                            We specialize in crafting custom, innovative solutions that align with your business needs. By understanding your goals, we create strategies that drive growth, boost efficiency, and ensure long-term success.
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-purple-400/10 border-[1px] border-[#1a1a1a] hover:border-purple-400 p-8 rounded-[32px] shadow-lg hover:shadow-[0_0_8px_5px_rgba(139,92,246,0.5)] transition-all duration-500 transform hover:translate-y-[-10px] flex flex-col items-center justify-center">
                            <div className="mb-4 text-purple-400">
                                <FaUsers className="text-5xl md:text-6xl" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-semibold text-purple-400 mb-4 text-center">Client-Centric Approach</h3>
                            <p className="text-gray-300 text-center">
                                WWe prioritize clear communication, keeping you informed at all times. Our support team is always available, and we offer flexible service models tailored to ensure smooth, successful collaboration.
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-orange-400/10 border-[1px] border-[#1a1a1a] hover:border-orange-400 p-8 rounded-[32px] shadow-lg hover:shadow-[0_0_8px_5px_rgba(251,146,60,0.5)] transition-all duration-500 transform hover:translate-y-[-10px] flex flex-col items-center justify-center">
                            <div className="mb-4 text-orange-400">
                                <FaRegCheckCircle className="text-5xl md:text-6xl" />
                            </div>
                            <h3 className="text-xl lg:text-2xl font-semibold text-orange-400 mb-4 text-center">Proven Track Record</h3>
                            <p className="text-gray-300 text-center">
                            We help startups, brands, and enterprises grow with innovative digital solutions. Our expertise enhances your digital presence, optimizes operations, and scales your business in a competitive market.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WhyChooseUs;
