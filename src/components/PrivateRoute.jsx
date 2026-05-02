import { Navigate } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

function PrivateRoute({ children }) {
    const token = localStorage.getItem("token");
    if (!token) return <Navigate to="/login" />
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    );
}

export default PrivateRoute;