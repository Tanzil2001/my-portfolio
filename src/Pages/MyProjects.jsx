
import prj1 from '../assets/projetcs-pic/screencapture-assignment-10-cfefb-web-app-2023-06-29-02_19_04.jpg'
import prj2 from '../assets/projetcs-pic/screencapture-assignment-11-97483-web-app-2023-06-29-02_22_26.jpg'
import prj3 from '../assets/projetcs-pic/screencapture-dance-school-3ca5c-web-app-2023-06-29-02_23_43.jpg';
import '../Pages/MyProjects.css'

const MyProjects = () => {

    return (
        
        <div id='projects' className='max-w-screen-xl mx-auto py-24'>
            <div className=' md:flex justify-between items-center'>
                <div className="project-box bg-black p-5" style={{ width: '350px', height: '400px', overflow: 'hidden' }}>
                    <div className="image-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                        <img
                            className="project-image"
                            src={prj1}
                            alt=""
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <a className='text-white' href="https://assignment-10-cfefb.web.app/">Live Link</a>
                </div>

                <div className="project-box bg-black p-5" style={{ width: '350px', height: '400px', overflow: 'hidden' }}>
                    <div className="image-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                        <img
                            className="project-image"
                            src={prj2}
                            alt=""
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>

                <div className="project-box bg-black p-5" style={{ width: '350px', height: '400px', overflow: 'hidden' }}>
                    <div className="image-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
                        <img
                            className="project-image"
                            src={prj3}
                            alt=""
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;