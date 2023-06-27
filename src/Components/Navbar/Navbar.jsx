

const Navbar = () => {
    return (
        <div className="sticky z-10 flex max-w-screen-xl justify-between mx-auto items-center bg-blue-950 rounded-full p-5">
            <div>
                web Hero 
            </div>
            <div className="flex list-none items-center gap-4 ">
                <li><a href="home">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="projects">Projects</a></li>
                <li><a href="contact">Contact</a></li>
            </div>
            <button>Hire me</button>
        </div>
    );
};

export default Navbar;