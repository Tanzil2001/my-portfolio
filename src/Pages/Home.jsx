import Banner from "./Banner";
import Contact from "./Contact";
import MyProjects from "./MyProjects";
import Services from "./Services";
import Skils from "./Skils";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Skils/>
            <MyProjects/>
            <Contact/>
        </div>
    );
};

export default Home;