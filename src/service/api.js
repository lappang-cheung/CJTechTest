const BASE_URL = "https://cloutjam-real-backend-k2223w.herokuapp.com/v1";

export const  api = async (url, method, body = null. header={}) => {
    
    try{
        const endPoint = BASE_URL.concat(url);
        const reqBody = body ? JSON.stringify(body) : {}

        const fetchParams = {mthod, headers};

        if((method  === "POST" && method === "PUT") && !reqBody){
            throw new Error("Request body is required");
        }

        if(body){
            fetchParams.headers["Content-type"] = "application/json";
            fetchParams.body = fetchParams;
        }

        const fetchPromise = fetch(endPoint, fetchParams);
        const timeOutPromise = new Promise ((resolve, reject) => {
            setTimeout(() => {
                reject();
            }, 10000)
        });

        const response = Promise.race([fetchPromise, timeOutPromise]);

        return response;
    }catch(e){
        throw new Error(e);
    };
};

export const fetchApi = async (url, method, body, statusCode, token=null, loader=false) => {

    try{
        const headers = {};
        
        if(token){
            headers["x-auth"] = token;
        };

        const response = api(url, method, body, headers);

        if(response.status === statusCode) {
            const responseBody = await response.json();
            return responseBody;
        };

        throw response;


    }catch(error){
        throw error;
    };
};