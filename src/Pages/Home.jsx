import Banner from "./Banner";
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
        </div>
    );
};

export default Home;