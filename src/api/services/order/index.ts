//! JSON WEB TOKEN
import mockServerService from "api/axios";

import {PaySavedCardArgs} from "./interfaces";

export const paySavedCard = async ({amount, token, installments, email}: PaySavedCardArgs) => {
    let url = `http://localhost:7000/payment-saved-card`;
    let headers = new Map([["Content-Type", "application/json"]]); 
    let body = {amount, token, installments, email};
    console.log(body);
    const {data, status, statusText} = await mockServerService.postMock({url, headers, body});
    return {data, status, statusText};
}

