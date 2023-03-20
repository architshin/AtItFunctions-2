import {jsonData} from "./data.js";

export const handler = async (event, context) => {
    const responseData = {...jsonData, ...event.queryStringParameters};
    const response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(responseData),
    };
    return response;
    // return responseData;
};
