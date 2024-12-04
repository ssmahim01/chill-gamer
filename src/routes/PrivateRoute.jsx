import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        <div className="flex justify-center items-center pt-36">
            <p className="text-3xl text-center font-bold">loading...</p>
        </div>
        return;
    };

    if(user && user?.email){
       return children;
    };

    return (
        <div>
            <Navigate state={location.pathname} to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;