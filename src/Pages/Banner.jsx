import Navbar from '../Components/Navbar/Navbar';
import bg from '../assets/Animated Shape (2).svg';
import mypic from '../assets/img.png';
import mbg from '../assets/Blob Group.svg'
import { TypeAnimation } from 'react-type-animation';
import animation from '../assets/109865-new-app-development-on-desktop.gif';
import Button from '../Components/Navbar/Button/Button';


const Banner = () => {
    return (
        <>
        
        <div style={{ backgroundImage: `url("${bg}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className="pb-8">
            <Navbar />
            <div className='max-w-screen-xl pt-28  mx-auto md:flex items-center justify-between'>
                <div className='w-1/2 '>
                    <p className='-mt-40 text-white text-5xl mb-10 font-bold'>Hello Im <br /> Barakat Tanzil</p>
                    <img className='rounded-full my-5' src={animation} alt="" />
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
                        style={{ fontSize: '2em', display: 'inline-block', color: 'white'  }}
                        repeat={Infinity}
                    />
                    <div className='mt-10'>
                       <Button text="Get Resume"></Button>
                    </div>
                </div>
                <div style={{ backgroundImage: `url("${mbg}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }} className='rounded-full' >
                    <img className='rounded-full' src={mypic} alt="" />
                </div>
            </div>
        </div>
        
        </>
    );
};

export default Banner;