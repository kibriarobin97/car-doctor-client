import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { users, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <span className="loading text-primary loading-spinner loading-lg"></span>
    }

    if (users) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoute;