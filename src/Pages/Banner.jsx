import Navbar from '../Components/Navbar/Navbar';
import bg from '../assets/Animated Shape (1).svg';
import mypic from '../assets/img.png';
import mbg from '../assets/Blob Group.svg'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url("${bg}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} className="">
            <Navbar/>
            <div className='max-w-screen-xl mx-auto mt-10 md:flex items-center justify-between'>
                <div className='w-1/2 '>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente! Enim ea itaque natus maiores doloribus. Quibusdam odit sed minus maxime, beatae, molestias, architecto corporis fuga labore veritatis tenetur illo!
                </div>
                <div style={{backgroundImage: `url("${mbg}")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}} className='rounded-full' >
                    <img className='rounded-full' src={mypic} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;