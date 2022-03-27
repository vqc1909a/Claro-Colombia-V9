//! JSON WEB TOKEN
import jwt_decode from "jwt-decode";
import mockServerService from "../../axios";
import {LoginUserArgs, GetLoggedUserArgs} from "./interfaces";

export const loginUser = async ({user}: LoginUserArgs) => {

    let url = "http://localhost:4000/api/login";
    let headers = new Map([["Content-Type", "application/json"]]); 
    let body = user;

    const {data, status, statusText} = await mockServerService.postMock({url, headers, body});
    return {data, status, statusText};
}

export const getLoggedUser = async ({token}: GetLoggedUserArgs) => {

    const decoded: any = jwt_decode(token);
    const {email} = decoded;
    let url = `http://localhost:4000/api/users?email=${email}`;

    //!Si estaría trabajando con mi propio servidor, no haría este tipo de petición, haría una petición al /user mandando el token como cabecera y recuperar los datos del user desde el server
    const {data, status, statusText} = await mockServerService.getMock({url});
    console.log(data);
    return {data, status, statusText}
}

