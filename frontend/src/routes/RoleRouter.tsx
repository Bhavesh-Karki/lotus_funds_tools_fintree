import { Navigate } from "react-router-dom";

const RoleRouter = () => {
    const role = localStorage.getItem("role");

    if (!role) return <Navigate to="/login" replace />;

    if (role === "ADMIN") return <Navigate to="/admin" replace />;

    if (role === "EMPLOYEE") return <Navigate to="/automation" replace />;

    if (role === "RA") return <Navigate to="/" replace />;

    if (role === "CLIENT") return <Navigate to="/client" replace />;

    return <Navigate to="/login" replace />;
};

export default RoleRouter;