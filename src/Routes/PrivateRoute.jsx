import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { users, loading } = useContext(AuthContext)

    if(loading){
        return <span className="loading text-primary loading-spinner loading-lg"></span>
    }

    if (users) {
        return children;
    }
    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;