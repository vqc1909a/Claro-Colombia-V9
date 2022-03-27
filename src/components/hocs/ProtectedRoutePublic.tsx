// import * as USER_SELECTORS from "redux/selectors/user";
// import useAppSelector from "utils/hooks/useAppSelector";
import {Navigate, Outlet} from "react-router-dom";

interface ProtectedRoutePublicArgs {
    children?: JSX.Element | JSX.Element[],
    redirectPath?: string
}

// Outlet cuando aplicamos el renderizado anidado, caso contrario vendría siendo el children normal que envuelve el HOC
const ProtectedRoutePublic = ({children, redirectPath = "/"}: ProtectedRoutePublicArgs): any  => {
    //!Esto no va xq ni bien cambia el isLogged se volvera a renderizar lo que contiene;
    // const isLogged = useAppSelector(USER_SELECTORS.selectIsLogged);
    const isLogged = localStorage.getItem("token") ? true : false;

    if (isLogged){
        return <Navigate to={redirectPath} replace={true}></Navigate>
    }
    return children ? children : <Outlet />;
};

export default ProtectedRoutePublic ;
