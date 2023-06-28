import tree from '../assets/tree.avif';

import css from '../assets/tech/css.png';
import html from '../assets/tech/html.png';
import react from '../assets/tech/reactjs.png';
import js from '../assets/tech/javascript.png';
import nodejs from '../assets/tech/nodejs.png';
import mongodb from '../assets/tech/mongodb.png';
import tailwind from '../assets/tech/tailwind.png';
import figma from '../assets/tech/figma.png';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';



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

        <div className="bg-[#252731]">
            <div className='max-w-screen-xl mx-auto'>
                <div className=" md:flex py-24 items-center justify-between">
                    <div>
                        <p className="mb-5 text-slate-400 text-2xl border-dotted border-l-2 ps-2 border-slate-400">
                            My Skills
                        </p>
                        <p className="text-white font-bold text-4xl">My Special Skills Tree</p>
                    </div>
                    <div style={{ backgroundImage: `url("${tree}")`, height: '80vh' }} className="w-2/3 relative rounded-full">
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
                <div className='flex gap-5 pb-10'>
                    <motion.div
                        className='h-[250px] w-[200px] bg-[#2a2c39] card'
                        initial={{ opacity: 0, x: -100 }}
                        animate={controls}
                        transition={{ duration: 0.5 }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div>hlw</div>
                    </motion.div>
                    <motion.div
                        className='h-[250px] w-[200px] bg-[#2a2c39] card'
                        initial={{ opacity: 0, x: -100 }}
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                        }}
                    ></motion.div>
                    <motion.div
                        className='h-[250px] w-[200px] bg-[#2a2c39] card'
                        initial={{ opacity: 0, x: -100 }}
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                        }}
                    ></motion.div>
                    <motion.div
                        className='h-[250px] w-[200px] bg-[#2a2c39] card'
                        initial={{ opacity: 0, x: -100 }}
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                        }}
                    ></motion.div>
                    <motion.div
                        className='h-[250px] w-[200px] bg-[#2a2c39] card'
                        initial={{ opacity: 0, x: -100 }}
                        animate={controls}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                        }}
                    ></motion.div>
                    <motion.div
                        className='h-[250px] w-[200px] bg-[#2a2c39] card'
                        initial={{ opacity: 0, x: -100 }}
                        animate={controls}
                        transition={{ duration: 0.5, delay: 1 }}
                        variants={{
                            visible: { opacity: 1, x: 0 },
                        }}
                        
                    ></motion.div>
                </div>
            </div>
        </div>
    );
};

export default Skils;