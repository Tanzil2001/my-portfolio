import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
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
        <nav className=" z-10 flex max-w-screen-xl w-full items-center justify-between bg-[#2a2c39] md:rounded-full p-5 mx-auto">
            <div className="flex items-center">
                <div>
                    <span className="text-white text-xl font-bold">Web Hero</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden md:block">
                    <ul className="flex list-none gap-4">
                        <li>
                            <a href="#home" className="text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="text-white">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="text-white">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="text-white">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button
                        onClick={handleMenuToggle}
                        className="text-white focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <FaTimes size={24} />
                        ) : (
                            <FaBars size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={menuVariants}
                    className="md:hidden w-full mt-4 bg-blue-950 p-4"
                >
                    <ul className="flex flex-col list-none gap-4">
                        <li>
                            <a href="#home" className="text-white">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#services" className="text-white">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="text-white">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="text-white">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="text-white">
                                Contact
                            </a>
                        </li>
                    </ul>
                </motion.div>
            )}
            
        </nav>
    );
};

export default Navbar;