import { Outlet } from "react-router-dom";
import Headers from './Headers.jsx';


const MainIndex = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default MainIndex;