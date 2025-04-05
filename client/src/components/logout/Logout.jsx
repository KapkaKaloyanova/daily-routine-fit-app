import { Navigate } from "react-router";
import { useLogout } from "../../api/authApi";
import Loader from "../Loader";


export default function Logout() {
    const { isLoggedOut } = useLogout()

    return isLoggedOut
        ? <Navigate to="/" />
        : <Loader />; // or null or <div>Logging out...</div>
}