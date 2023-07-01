import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div>
            <div className="mt-5 p-10 md:p-0" id="about">
                <p className="text-slate-400 text-5xl mb-10 font-semibold">About Me</p>
                <div className="text-white text-lg text-justify">
                    <p><p>My name is Barakat Ahmed Tanzil, and I am a CSE (Computer Science and Engineering) student at Sonargoan University. Over the past 6 months, I have been focused on learning and developing my skills in web development.</p>

                        <p className="my-5">I have specialized in front-end development, which involves creating visually appealing and user-friendly interfaces for websites and web applications. I am proficient in <span className="text-orange-600 font-bold">HTML</span>, <span className="text-blue-600 font-bold">CSS</span>,  <span className="text-yellow-600 font-bold">Javascript</span>, <span className="text-blue-500 font-bold">React</span>, <span className="text-blue-400 font-bold">Tailwind</span>, <span className="text-purple-600 font-bold">Bootstrap</span>, <span className="text-red-600 font-bold">Animation</span>. allowing me to build engaging and interactive user experiences. </p>

                        Additionally, I have also gained expertise in MERN stack development. This means I am proficient in working with MongoDB, Express.js, React.js, and Node.js. This stack enables me to develop full-stack web applications, handling both the front-end and back-end components, as well as integrating them with a database.

                        <p className="my-5">  As a CSE student, I am continuously learning and honing my skills to stay up-to-date with the latest technologies and industry best practices. I am eager to apply my knowledge and contribute to the field of web development.</p>

                        Overall, my skills as a front-end and MERN stack developer allow me to create dynamic and functional web applications, and I am enthusiastic about further expanding my abilities in this area.</p>
                </div>
                <div className="text-white flex gap-5 items-center mt-10">
                    <span className="text-4xl shadow-lg shadow-white cursor-pointer rounded-full p-2"><a href="https://github.com/Tanzil2001"> <FaGithub/> </a></span>
                    <span className="text-4xl shadow-lg shadow-white cursor-pointer rounded-full p-2"><a href="https://www.linkedin.com/in/barakat-tanzil/"> <FaLinkedin/> </a></span>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;