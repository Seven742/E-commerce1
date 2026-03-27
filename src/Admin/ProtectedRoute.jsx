import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const isAdmin = localStorage.getItem("admin");

    // if not logged in → go login
    if (!isAdmin) {
        return <Navigate to="/admin/login" />;
    }

    return children;
};

export default ProtectedRoute;