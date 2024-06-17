const apiResponse = (statusCode, message = "Sucess", data) => {

    const response = {
        statusCode: statusCode,
        message: message,
        success: statusCode < 400,
        data: data
    }

    return response;
};


export default apiResponse;