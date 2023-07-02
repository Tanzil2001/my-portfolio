
import prj1 from '../assets/projetcs-pic/screencapture-assignment-10-cfefb-web-app-2023-06-29-02_19_04.jpg'
import prj2 from '../assets/projetcs-pic/screencapture-assignment-11-97483-web-app-2023-06-29-02_22_26.jpg'
import prj3 from '../assets/projetcs-pic/screencapture-dance-school-3ca5c-web-app-2023-06-29-02_23_43.jpg';
import '../Pages/MyProjects.css'
import prj4 from '../assets/projetcs-pic/screencapture-cars-doctor-4e14a-web-app-2023-07-01-21_01_45.jpg'
import prj5 from '../assets/projetcs-pic/screencapture-bistro-boss-9cf4a-web-app-2023-07-01-21_12_38.jpg'
import prj6 from '../assets/projetcs-pic/screencapture-cozy-sorbet-7917c0-netlify-app-2023-07-01-21_20_45.jpg'
import { useEffect } from 'react';
import AOS from 'aos';


const MyProjects = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (

        <div id='projects' className='max-w-screen-xl mx-auto py-24 px-10 md:px-0'>
            <div className='text-center text-white text-4xl font-bold my-10'>
                <h2>My Projects</h2>
            </div>
            {/* one */}
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 items-center '>
                <div data-aos="zoom-in-right" className='bg-[#252731] p-5 mt-8 shadow-xl shadow-blue-600'>
                    <div className="project-box  w-full " style={{ height: '400px', overflow: 'hidden' }}>
                        <div className="image-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                            <img
                                className="project-image"
                                src={prj1}
                                alt=""
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className='text-white flex justify-between mt-5'>
                        <a className='' href="https://assignment-10-cfefb.web.app/">Live Link</a>
                        <a href="https://github.com/Tanzil2001/chefs-recipe-web">Code Link</a>
                    </div>
                </div>
                {/* two */}
                <div data-aos="zoom-in-down" className='bg-[#252731] p-5 mt-8 shadow-xl  shadow-blue-600'>
                    <div className="project-box  w-full" style={{ height: '400px', overflow: 'hidden' }}>
                        <div className="image-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                            <img
                                className="project-image"
                                src={prj2}
                                alt=""
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className='text-white flex justify-between mt-5'>
                        <a className='' href="https://assignment-10-cfefb.web.app/">Live Link</a>
                        <a href="https://github.com/Tanzil2001/toy-shop-web">Code Link</a>
                    </div>
                </div>
                {/* three */}
                <div data-aos="zoom-in-left" className='bg-[#252731] p-5 mt-8 shadow-xl shadow-blue-600'>
                    <div className="project-box  w-full" style={{ height: '400px', overflow: 'hidden' }}>
                        <div className="image-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                            <img
                                className="project-image"
                                src={prj3}
                                alt=""
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className='text-white flex justify-between mt-5'>
                        <a className='' href="https://assignment-10-cfefb.web.app/">Live Link</a>
                        <a href="https://github.com/Tanzil2001/dance-school-web">Code Link</a>
                    </div>
                </div>
                {/* four */}
                <div data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='bg-[#252731] p-5 mt-8 shadow-xl shadow-blue-600'>
                    <div className="project-box  w-full" style={{ height: '400px', overflow: 'hidden' }}>
                        <div className="image-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                            <img
                                className="project-image"
                                src={prj4}
                                alt=""
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className='text-white flex justify-between mt-5'>
                        <a href="https://cars-doctor-4e14a.web.app/#slide1">Live Link</a>
                        <a href="https://github.com/Tanzil2001/cars-doctor">Code Link</a>
                    </div>
                </div>
                {/* five */}
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className='bg-[#252731] p-5 mt-8 shadow-xl shadow-blue-600'>
                    <div className="project-box  w-full" style={{ height: '400px', overflow: 'hidden' }}>
                        <div className="image-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                            <img
                                className="project-image"
                                src={prj5}
                                alt=""
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className='text-white flex justify-between mt-5'>
                        <a href="https://bistro-boss-9cf4a.web.app/">Live Link</a>
                        <a href="https://github.com/Tanzil2001/bistro-boss">Code Link</a>
                    </div>
                </div>
                {/* six*/}
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" className='bg-[#252731] p-5 mt-8 shadow-xl shadow-blue-600'>
                    <div className="project-box  w-full" style={{ height: '400px', overflow: 'hidden' }}>
                        <div className="image-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                            <img
                                className="project-image"
                                src={prj6}
                                alt=""
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    </div>
                    <div className='text-white flex justify-between mt-5'>
                        <a href="https://cozy-sorbet-7917c0.netlify.app/#">Live Link</a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;