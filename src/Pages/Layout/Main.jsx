import { Outlet } from "react-router-dom";


const Main = () => {
    return (
        <div  className="bg-blue-900">
            <Outlet/>
        </div>
    );
};

export default Main;