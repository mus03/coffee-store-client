import { NavLink } from "react-router-dom";

const Headers = () => {
    return (
        <div className="w-full border text-center space-x-4 mb-4 py-4 font-extrabold text-xl mx-auto">
         <NavLink to="/">Home</NavLink>
         <NavLink to="/users">Users</NavLink>  
         <NavLink to="/addCoffee/">Add Coffees</NavLink>  
         <NavLink to="/signup">Signup</NavLink>  
         <NavLink to="/signin">Signin</NavLink>  
        </div>
    );
};

export default Headers;