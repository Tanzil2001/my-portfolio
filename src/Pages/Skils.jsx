import tree from '../assets/tree.avif';

import css from '../assets/tech/css.png';
import html from '../assets/tech/html.png';
import react from '../assets/tech/reactjs.png';
import js from '../assets/tech/javascript.png';
import nodejs from '../assets/tech/nodejs.png';
import mongodb from '../assets/tech/mongodb.png';
import tailwind from '../assets/tech/tailwind.png';
import figma from '../assets/tech/figma.png';
import git from '../assets/tech/github.png';
import backend from '../assets/tech/backend.png';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Tilt } from 'react-tilt';



const Skils = () => {

    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY + windowHeight;

            const cards = document.querySelectorAll('.card');
            cards.forEach((card) => {
                const cardTop = card.offsetTop;

                if (cardTop < scrollPosition) {
                    controls.start('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [controls]);
    return (

        <div id='skills' className="bg-[#252731]">
            <div className='max-w-screen-xl mx-auto p-10 md:p-0'>
                <div className=" md:flex py-24 items-center justify-between">
                    <div>
                        <p className="mb-5 text-slate-400 text-2xl border-dotted border-l-2 ps-2 border-slate-400">
                            My Skills
                        </p>
                        <p className="text-white font-bold text-4xl">My Special Skills <span className='hidden md:block'>Tree</span> </p>
                    </div>
                    <div style={{ backgroundImage: `url("${tree}")`, height: '80vh', backgroundRepeat: 'no-repeat' }} className="w-2/3 relative rounded-full hidden md:block">
                        {/* one */}
                        <div className="absolute top-11 h-16 w-0.5 bg-red-900 left-1/2 transform -translate-x-1 translate-y-16" />
                        <div className="absolute top-40 left-1/2 animate-pulse  transform -translate-x-1/2">
                            <img className="w-16 h-16 mb-6 bg-[#252731] rounded-full p-2 shadow-lg shadow-blue-600" src={js} alt="" />
                        </div>
                        {/* two  */}
                        <div className="absolute top-28 h-16 w-0.5 bg-red-900 left-52 transform -translate-x-1 translate-y-16" />
                        <div className="absolute top-56 left-52 animate-pulse  transform -translate-x-1/2">
                            <img className="w-16 h-16 mb-6 bg-[#252731] rounded-full p-2 shadow-lg shadow-blue-600" src={css} alt="" />
                        </div>
                        {/* three */}
                        <div className="absolute top-[150px] left-80 h-16 w-0.5 bg-red-900 transform -translate-x-1 translate-y-16" />
                        <div className="absolute top-[270px] left-80 animate-pulse  transform -translate-x-1/2">
                            <img className="w-16 h-16 mb-6 bg-[#252731] rounded-full p-2 shadow-lg shadow-blue-600" src={html} alt="" />
                        </div>
                        {/* four */}
                        <div className="absolute top-[65px] right-[300px] h-16 w-0.5 bg-red-900 transform -translate-x-1 translate-y-16" />
                        <div className="absolute top-[180px] right-[242px] animate-pulse  transform -translate-x-1/2">
                            <img className="w-16 h-16 mb-6 bg-[#252731] rounded-full p-2 shadow-lg shadow-blue-600" src={react} alt="" />
                        </div>
                        {/* five */}
                        <div className="absolute top-[160px] right-[228px] h-16 w-0.5 bg-red-900 transform -translate-x-1 translate-y-16" />
                        <div className="absolute top-[270px] right-[170px] animate-pulse  transform -translate-x-1/2">
                            <img className="w-16 h-16 mb-6 bg-[#252731] rounded-full p-2 shadow-lg shadow-blue-600" src={figma} alt="" />
                        </div>
                        {/* six */}
                        <div className="absolute top-[182px] left-[147px] h-16 w-0.5 bg-red-900 transform -translate-x-1 translate-y-16" />
                        <div className="absolute top-[292px] left-[143px] animate-pulse  transform -translate-x-1/2">
                            <img className="w-16 h-16 mb-6 bg-[#252731] rounded-full p-2 shadow-lg shadow-blue-600" src={tailwind} alt="" />
                        </div>
                        {/* seven */}
                        <div className="absolute top-[300px] left-[200px] h-16 w-0.5 bg-red-900 transform -translate-x-1 translate-y-16" />
                        <div className="absolute top-[415px] left-[197px] animate-pulse  transform -translate-x-1/2">
                            <img className="w-16 h-16 mb-6 bg-[#252731] rounded-full p-2 shadow-lg shadow-blue-600" src={nodejs} alt="" />
                        </div>
                        {/* eight */}
                        <div className="absolute top-[262px] right-[174px] h-16 w-0.5 bg-red-900 transform -translate-x-1 translate-y-16" />
                        <div className="absolute top-[380px] right-[115px] animate-pulse  transform -translate-x-1/2">
                            <img className="w-16 h-16 mb-6 bg-[#252731] rounded-full p-2 shadow-lg shadow-blue-600" src={mongodb} alt="" />
                        </div>
                    </div>
                </div>
                <div className='md:flex xs:flex-col items-center justify-between gap-5 pb-10'>
                    <Tilt>
                        <motion.div
                            className='h-[250px] w-full  md:w-[200px] mt-10 rounded-full shadow-xl shadow-orange-600 bg-[#2a2c39] card flex flex-col items-center justify-center'
                            initial={{ opacity: 0, x: -100 }}
                            animate={controls}
                            transition={{ duration: 0.5 }}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <img className='w-32 ' src={html} alt="" />
                            <p className="text-white">HTML 5</p>
                            <p className="text-white text-3xl">98 %</p>
                        </motion.div>
                    </Tilt>
                    <Tilt>
                        <motion.div
                            className="h-[250px] w-full mt-10 md:mt-0 md:w-[180px] rounded-full shadow-xl shadow-blue-600 bg-[#2a2c39] card flex flex-col items-center justify-center"
                            initial={{ opacity: 0, x: -100 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <img className='w-32' src={css} alt="" />
                            <p className="text-white">CSS 3</p>
                            <p className="text-white text-3xl">80 %</p>
                        </motion.div>
                    </Tilt>
                    <Tilt>
                        <motion.div
                            className='h-[250px] mt-10 md:-mt-5 w-full md:w-[200px] rounded-full shadow-xl shadow-yellow-500 bg-[#2a2c39] card flex flex-col items-center justify-center'
                            initial={{ opacity: 0, x: -100 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <img className='w-32' src={js} alt="" />
                            <p className="text-white">Javascript</p>
                            <p className="text-white text-3xl">80 %</p>
                        </motion.div>
                    </Tilt>
                    <Tilt>
                        <motion.div
                            className='h-[250px] mt-10 md:-mt-5 w-full md:w-[200px] rounded-full shadow-xl shadow-blue-500 bg-[#2a2c39] card flex flex-col items-center justify-center'
                            initial={{ opacity: 0, x: -100 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <img className='w-32' src={react} alt="" />
                            <p className="text-white">React Js</p>
                            <p className="text-white text-3xl">80 %</p>
                        </motion.div>
                    </Tilt>
                    <Tilt>
                        <motion.div
                            className='h-[250px] mt-10 md:mt-0 w-full md:w-[180px] rounded-full shadow-xl shadow-white bg-[#2a2c39] card flex flex-col items-center justify-center'
                            initial={{ opacity: 0, x: -100 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <img className='w-32' src={git} alt="" />
                            <p className="text-white">GitHub</p>
                            <p className="text-white text-3xl">80 %</p>
                        </motion.div>
                    </Tilt>
                    <Tilt>
                        <motion.div
                            className='h-[250px] mt-10 w-full md:w-[200px] rounded-full shadow-xl shadow-purple-600 bg-[#2a2c39] card flex flex-col items-center justify-center'
                            initial={{ opacity: 0, x: -100 }}
                            animate={controls}
                            transition={{ duration: 0.5, delay: 1 }}
                            variants={{
                                visible: { opacity: 1, x: 0 },
                            }}

                        >
                            <img className='w-32' src={backend} alt="" />
                            <p className="text-white">Backend</p>
                            <p className="text-white text-3xl">50 %</p>
                        </motion.div>
                    </Tilt>
                </div>
            </div>
        </div>
    );
};

export default Skils;