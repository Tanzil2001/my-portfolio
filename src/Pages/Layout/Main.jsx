import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader";


const Main = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    return (
        <div className="bg-[#2a2c39] overflow-hidden">
           {isLoading ? <Loader/> : <Outlet/>}
        </div>
    );
};

export default Main;