import { Outlet } from "react-router-dom";
// import bg from '../../assets/cool-background (1).png';

const Main = () => {
    return (
        <div   className="bg-[#2a2c39]">
            <Outlet/>
        </div>
    );
};

export default Main;