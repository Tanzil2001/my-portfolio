import Navbar from '../Components/Navbar/Navbar';
import bg from '../assets/Animated Shape (2).svg';
import mypic from '../assets/img.png';
import mbg from '../assets/Blob Group.svg'
import { TypeAnimation } from 'react-type-animation';
import animation from '../assets/109865-new-app-development-on-desktop.gif';
import resume from '../assets/projetcs-pic/tanzil.pdf';
import { FaCloudUploadAlt, FaUser } from 'react-icons/fa';
import AboutMe from './AboutMe';
import GoogleFontLoader from 'react-google-font-loader';


const Banner = () => {

    return (
        <>
             <GoogleFontLoader
                fonts={[
                    {
                        font: 'Racing Sans One',
                        weights: [400, 700],
                    },
                    {
                        font: 'Lobster Two',
                        weights: [400, '400i', 700],
                    },
                ]}
            />
            <div style={{ backgroundImage: `url("${bg}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} id='home' className="pb-8">
                <div className='max-w-screen-xl mx-auto'>
                    <Navbar />
                    <div className=' md:pt-40 pt-72  md:flex xs:flex-col items-center justify-between p-10 md:p-0'>
                        <div className='md:w-1/2 xs:full'>
                            <p style={{ fontFamily:'Lobster Two' }} className='-mt-40 text-white text-5xl mb-10 font-bold'>Hello Im <br /> Barakat Tanzil</p>
                            <img className='rounded-full w-full md:w-[200px]  my-5' src={animation} alt="" />
                            <TypeAnimation
                                sequence={[
                                    'I Am a MERN Stack Web Developer',
                                    1000,
                                    'I Am a Front-End Web Developer',
                                    1000,
                                    'I Am a Web Designer',
                                    1000,
                                ]}
                                wrapper="span"
                                speed={30}
                                style={{ fontFamily:'Racing Sans One', fontSize: '2em', display: 'inline-block', color: 'white' }}
                                repeat={Infinity}
                            />
                            <div className='my-10 flex items-center justify-start gap-5'>
                                <a href={resume} className="relative inline-flex items-center justify-start px-6 py-3  overflow-hidden font-medium transition-all bg-slate-700 shadow-lg shadow-blue-600 rounded-xl group">
                                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-slate-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full  bg-blue-700 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex items-center gap-3">Get Resume <span><FaCloudUploadAlt/></span> </span>
                                </a>
                                <a href="#contact" className="relative inline-flex items-center justify-start px-6 py-3  overflow-hidden font-medium transition-all bg-slate-700 shadow-lg shadow-blue-600 rounded-xl group">
                                    <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-slate-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                    </span>
                                    <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full  bg-blue-700 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white flex items-center gap-3">Hire Me <span><FaUser/></span> </span>
                                </a>
                            </div>
                        </div>
                        <div style={{ backgroundImage: `url("${mbg}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className='rounded-full shadow-xl shadow-blue-600' >
                            <img className='rounded-full' src={mypic} alt="" />
                        </div>
                    </div>
                    <AboutMe/>
                </div>
            </div>

        </>
    );
};

export default Banner;