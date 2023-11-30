import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import useAdmin from "../../Hooks/useAdmin";


const AdminRoute = ({children}) => {
    const {user, loading} = UseAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();

    if (loading || isAdminLoading) {
        return <span className="loading loading-infinity loading-lg flex justify-center items-center"></span>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={location.pathname} replace ></Navigate>;
};

export default AdminRoute;