
export const apiError=(statusCode, message="Something went wrong",errors=[], stacks="")=>{
    const error=new Error(message);

    error.statusCode=statusCode;
    error.data=null;
    error.message= message;
    error.errors=errors

    if(stacks){
        error.stack=stacks
    }


    return error

};

