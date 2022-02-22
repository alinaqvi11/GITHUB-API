const {statusCode,respMessage} = require ("./httpStatus");
class HttpResponse {

    constructor (statusCode,body){
        this.statusCode = statusCode;
        this.body = body;
    }
    static create(responseCode, body) {
        if (responseCode === statusCode.SERVER_ERROR) {            
            return new HttpResponse(responseCode, {message: body});
        }       
        return new HttpResponse(responseCode, body);
    }

    static convertToExpress(res, httpResponse) {
        return res.status(httpResponse.statusCode).json(httpResponse.body);

    }
    
}

module.exports =  HttpResponse;