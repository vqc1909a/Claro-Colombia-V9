//! JSON WEB TOKEN
import jwt_decode from "jwt-decode";
import mockServerService from "../../axios";
import {LoginUserArgs, GetLoggedUserArgs, SendSMSArgs, VerifySMSArgs, SendEmailArgs, VerifyEmailArgs} from "./interfaces";

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

    //!Si estaría trabajando con mi propio servidor, no haría este tipo de petición, haría una petición al /user/profile mandando el token como cabecera y recuperar los datos del user desde el server
    const {data, status, statusText} = await mockServerService.getMock({url});
    console.log(data);
    return {data, status, statusText}
}

export const sendSMS = async ({cellphone}:SendSMSArgs) => {
    let url = `http://localhost:5000/api/send-sms`;
    let headers = new Map([["Content-Type", "application/json"]]); 
    let body = {cellphone};

    const {data, status, statusText} = await mockServerService.postMock({url, headers, body});
    return {data, status, statusText};
}

export const verifySMS = async ({cellphone, pin}: VerifySMSArgs) => {
    let url = `http://localhost:5000/api/verify-sms`;
    let headers = new Map([["Content-Type", "application/json"]]); 
    let body = {cellphone, pin};

    const {data, status, statusText} = await mockServerService.postMock({url, headers, body});
    return {data, status, statusText};
}

export const sendEmail = async ({email}: SendEmailArgs) => {
    let url = `http://localhost:5000/api/send-email`;
    let headers = new Map([["Content-Type", "application/json"]]); 
    let body = {email};

    const {data, status, statusText} = await mockServerService.postMock({url, headers, body});
    return {data, status, statusText};
}

export const verifyEmail = async ({email, pin}: VerifyEmailArgs) => {
    let url = `http://localhost:5000/api/verify-email`;
    let headers = new Map([["Content-Type", "application/json"]]); 
    let body = {email, pin};

    const {data, status, statusText} = await mockServerService.postMock({url, headers, body});
    return {data, status, statusText};
}

