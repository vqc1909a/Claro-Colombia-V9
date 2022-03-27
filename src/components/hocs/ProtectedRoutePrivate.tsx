// import * as USER_SELECTORS from "redux/selectors/user";
// import useAppSelector from "utils/hooks/useAppSelector";
import {Navigate, Outlet} from "react-router-dom";

interface ProtectedRoutePrivateArgs {
    children?: JSX.Element | JSX.Element[],
    redirectPath?: string
}
// Outlet cuando aplicamos el renderizado anidado, caso contrario vendría siendo el children normal que envuelve el HOC
const ProtectedRoutePrivate = ({children, redirectPath = "/"}: ProtectedRoutePrivateArgs): any  => {
    const isLogged = localStorage.getItem("token") ? true : false;

    if (isLogged){
        return children ? children : <Outlet />; 
    }
    return <Navigate to={redirectPath} replace={true}></Navigate>
};

export default ProtectedRoutePrivate ;
