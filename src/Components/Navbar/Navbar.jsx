import { useState } from 'react';
import { FaBars, FaEnvelope, FaFileAlt, FaLaptopCode, FaReadme, FaTimes, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex flex-col items-end justify-start">
            <nav className="max-w-screen-xl fixed top-0 z-10 w-full items-center justify-between bg-[#2a2c39] md:rounded-full p-5 mx-auto">
                <div className="flex justify-between items-center w-full">
                    <div className="md:flex md:items-center">
                        <p className="text-white md:text-lg">Tanzil</p>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <ul className="list-none flex gap-5">
                            <li className='bg-black p-2 rounded-full shadow-lg shadow-blue-600'>
                                <a href="#home" className="text-white">
                                    <FaUser />
                                </a>
                            </li>
                            <li className='bg-black p-2 rounded-full shadow-lg shadow-blue-600'>
                                <a href="#services" className="text-white">
                                    <FaReadme />
                                </a>
                            </li>
                            <li className='bg-black p-2 rounded-full shadow-lg shadow-blue-600'>
                                <a href="#skills" className="text-white">
                                    <FaLaptopCode />
                                </a>
                            </li>
                            <li className='bg-black p-2 rounded-full shadow-lg shadow-blue-600'>
                                <a href="#projects" className="text-white">
                                    <FaFileAlt />
                                </a>
                            </li>
                            <li className='bg-black p-2 rounded-full shadow-lg shadow-blue-600'>
                                <a href="#contact" className="text-white">
                                    <FaEnvelope />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden">
                        <button onClick={handleMenuToggle} className="text-white focus:outline-none">
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className="flex justify-between">
                    {isMenuOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={menuVariants}
                            className="md:hidden w-full mt-4 bg-[#2a2c39] p-4"
                        >
                            <ul className="flex justify-between list-none gap-4">
                                <li className='bg-black p-2 rounded-full shadow-lg shadow-blue-600'>
                                    <a href="#home" className="text-white">
                                        <FaUser />
                                    </a>
                                </li>
                                <li className='bg-black p-2 rounded-full shadow-lg shadow-blue-600'>
                                    <a href="#services" className="text-white">
                                        <FaReadme />
                                    </a>
                                </li>
                                <li className='bg-black p-2 rounded-full shadow-lg shadow-blue-600'>
                                    <a href="#skills" className="text-white">
                                        <FaLaptopCode />
                                    </a>
                                </li>
                                <li className='bg-black p-2 rounded-full shadow-lg shadow-blue-600'>
                                    <a href="#projects" className="text-white">
                                        <FaFileAlt />
                                    </a>
                                </li>
                                <li className='bg-black p-2 rounded-full shadow-lg shadow-blue-600'>
                                    <a href="#contact" className="text-white">
                                        <FaEnvelope />
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </div>
            </nav>
        </div>



    );
};

export default Navbar;