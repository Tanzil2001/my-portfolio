import Wave from "react-wavify";
import icon1 from '../assets/service-icon-1.webp'
import icon2 from '../assets/service-icon-2.webp'
import icon3 from '../assets/seo-icon-png-2263.png'


const Services = () => {
    <Wave fill='#f79902'
        paused={false}
        options={{
            height: 20,
            amplitude: 20,
            speed: 0.35,
            points: 3
        }}
    />
    return (
        <>

            <div className=" max-w-screen-xl mx-auto mb-5">
                <div className="mt-32 mb-24">
                    <p className="mb-5 text-slate-400 text-2xl border-dotted border-l-2 ps-2 border-slate-400 ">My Services</p>
                    <p className="text-white font-bold text-4xl ">Service Provide For My Clients.</p>
                </div>
                <div>
                    <div className="md:flex items-center justify-between">
                        <div className="bg-[#252731] text-black hover:bg-black hover:text-white md:p-3 py-5 w-[352px] transition duration-700 ease-in-out hover:scale-110">
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
                        <div className="bg-[#252731] text-black hover:bg-black hover:text-white md:p-3 py-5 w-[352px] transition duration-700 ease-in-out hover:scale-110">
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
                        <div className="bg-[#252731] text-black hover:bg-black hover:text-white md:p-3 py-5 w-[352px] transition duration-700 ease-in-out hover:scale-110">
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
                    </div>
                </div>
            </div>

        </>

    );
};

export default Services;