
import icon1 from '../assets/service-icon-1.webp'
import icon2 from '../assets/service-icon-2.webp'
import icon3 from '../assets/seo-icon-png-2263.png'
import AOS from 'aos';
import { useEffect } from 'react';
import { Tilt } from 'react-tilt';


const Services = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <>

            <div id='services' className=" max-w-screen-xl mx-auto px-10 pb-32">
                <div className="mt-32 mb-24">
                    <p className="mb-5 text-slate-400 text-2xl border-dotted border-l-2 ps-2 border-slate-400 ">My Services</p>
                    <p className="text-white font-bold text-4xl ">Service Provide For My Clients.</p>
                </div>
                <div>
                    <div className="md:flex xs:flex-col items-center  justify-between">
                        <Tilt >
                            <div data-aos="fade-up-right" className=" bg-[#252731] text-black hover:bg-black hover:text-white md:p-3 py-5 w-full md:w-[352px]  rounded-full shadow-xl shadow-blue-800">
                                <img className="mt-14 ml-14" src={icon1} alt="" />
                                <p className="ml-14 mt-10 text-white text-3xl font-bold">Web Design</p>
                                <div className="ml-14 my-16 space-y-2 text-slate-400 font-bold text-xl">
                                    <li>Accessibility</li>
                                    <li>Visual Appeal</li>
                                    <li>User Interface</li>
                                    <li>User Experience</li>
                                    <li>Responsive Design</li>
                                </div>
                            </div>
                        </Tilt>
                        <Tilt>
                            <div data-aos="fade-zoom-in"
                                data-aos-easing="ease-in-back"
                                data-aos-delay="200"
                                data-aos-offset="0" className="bg-[#252731] text-black hover:bg-black hover:text-white md:p-3 my-5 py-5 w-full md:w-[352px]   rounded-full shadow-xl shadow-blue-800">
                                <img className="mt-14 ml-14" src={icon2} alt="" />
                                <p className="ml-14 mt-10 text-white text-3xl font-bold">Web Development</p>
                                <div className="ml-14 my-16 space-y-2 text-slate-400 font-bold text-xl">
                                    <li>HTML/CSS</li>
                                    <li>React js</li>
                                    <li>Javascript</li>
                                    <li>Animation</li>
                                    <li>MERN Stack</li>
                                </div>
                            </div>
                        </Tilt>
                        <Tilt>
                            <div data-aos="fade-up-left" className="bg-[#252731] text-black hover:bg-black hover:text-white md:p-3 py-5 w-full md:w-[352px]   rounded-full shadow-xl shadow-blue-800">
                                <img className="w-16 h-16 mt-14 ml-14 border-4 p-1 rounded-md " src={icon3} alt="" />
                                <p className="ml-14 mt-10 text-white text-3xl font-bold">SEO</p>
                                <div className="ml-14 my-16 space-y-2 text-slate-400 font-bold text-xl">
                                    <li>Keyword Research</li>
                                    <li>Link Building</li>
                                    <li>Technical SEO </li>
                                    <li>On-Page Optimization</li>
                                    <li>SEO Reporting</li>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Services;