let errors = {
    NotFound : function(message){
        return {
            code : 404,
            message : message || 'Not Found'
        }
    },
    InternalServerError : function(message){
        return {
            code : 500,
            message : message || 'Internal Server Error'
        }
    }
}

let success = {
    Success : function(message){
        return {
            code : 200,
            message : message
        }
    }
}

module.exports = {
    errors,
    success
}