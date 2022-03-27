import axios, {AxiosRequestConfig, AxiosPromise} from "axios";

interface GetMockArgs {
    params?: any;
    url: string;
    headers?: any;
}

interface PutMockArgs extends GetMockArgs {
    body: any;
    headers: any;
}
interface PostMockArgs extends PutMockArgs {}


// const newAxios = axios.create({
//     baseURL: "http://localhost:4000/",
// })

const mockServerService = {
    getMock({params, url, headers}: GetMockArgs): AxiosPromise<any> {
        let header: any;
        let headerValues: any = {};

        if (typeof headers === "undefined" || headers === null) {
            header = new Headers();
        } else {
            header = new Headers(headers);
        }
        //!Aqui puedo aumentar mas valores que acepta mi servidor a la respuesta;
        headerValues["Accept"] = ["application/json"];
        for (let val of headerValues["Accept"]) {
            header.append("Accept", val);
        }

        let requestOptions: AxiosRequestConfig = {
            method: "GET",
            url,
            headers: header,
            params,
        };
        return axios(requestOptions);
    },

    putMock({params, url, headers, body}: PutMockArgs): AxiosPromise<any> {
        let header: any;
        let headerValues: any = {};

        if (typeof headers === "undefined" || headers === null) {
            header = new Headers();
        } else {
            header = new Headers(headers);
        }
        //!Aqui puedo aumentar mas valores que acepta mi servidor a la respuesta;
        headerValues["Accept"] = ["application/json"];
        for (let val of headerValues["Accept"]) {
            header.append("Accept", val);
        }
        let requestOptions: AxiosRequestConfig = {
            method: "PUT",
            url: url,
            headers: header,
            params,
            data: body,
        };
        return axios(requestOptions);
    },

    postMock({params, url, headers, body}: PostMockArgs): AxiosPromise<any> {
        let header: any;
        let headerValues: any = {};
        if (typeof headers === "undefined" || headers === null) {
            header = new Headers();
        } else {
            header = new Headers(headers);
        }
        headerValues["Accept"] = ["application/json"];
        for (let val of headerValues["Accept"]) {
            header.append("Accept", val);
        }

        let requestOptions: AxiosRequestConfig = {
            method: "POST",
            url: url,
            headers: header,
            params,
            data: body,
        };
        return axios(requestOptions);
    },
};

export default mockServerService;