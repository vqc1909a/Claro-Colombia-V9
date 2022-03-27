//! JSON WEB TOKEN
import mockServerService from "../../axios";

export const getPlans = async () => {

    let url = "https://claroco-api-rest.herokuapp.com/servicios-hogar-planes";
    let headers = new Map([["Content-Type", "application/json"]]); 

    const {data, status, statusText} = await mockServerService.getMock({url, headers});
    return {data, status, statusText};
}


