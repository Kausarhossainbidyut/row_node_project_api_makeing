/* ====================================
 * Title       : user handler
 * Description : Handler to handler to handle user related data
 * Author      : Md Kausar Hossain Bidyut
 * Date        : 2026-01-16
 =================================== */

 //dependencies
 const data = require('../../lib/data')
 const {hash, parseJSON, createRandomString} = require('../../helpers/utilities')

 const handle = {}

 handle.tokenHandler = (requestProperties, callback) =>{
    const acceptedMethods = ['get', 'post', 'put', 'delete']
    if(acceptedMethods.indexOf(requestProperties.method)> -1){
        handle._token[requestProperties.method](requestProperties, callback)
    }else{
        callback(405)
    }
    
    
 }

 handle._token={}

 handle._token.post = (requestProperties, callback)=>{
     const phone = typeof(requestProperties.body.phone)=== 'string' && requestProperties.body.phone.trim().length === 11 ? requestProperties.body.phone : false

    const password = typeof(requestProperties.body.password)=== 'string' && requestProperties.body.password.trim().length > 1 ? requestProperties.body.password : false

    if(phone && password){
        data.read('users', phone, (err1, userData)=>{
            let hashedPassword =hash(password)
            if(hashedPassword === parseJSON(userData).password){
                let tokenId = createRandomString(20)
                let expires = Date.now()+ 60 * 60 * 1000
                let tokenObject ={
                    phone,
                    'id': tokenId,
                    expires
                }

                // store the token
                data.create('tokens', tokenId, tokenObject, (err2)=>{
                    if(!err2){
                        callback(200, tokenObject)
                    }else{
                        callback(500, {
                            'error': 'there was a problem in server side'
                        })
                    }
                })
            }else{
                callback(400, {
                    'error': 'Password is not valid'
                })
            }
        })
    }else{
        callback(400, {
            'error': 'You have a problem in your request'
        })
    }
 }

  // @Todo Authentication
 handle._token.get = (requestProperties, callback)=>{
 }

 // @Todo Authentication
 handle._token.put = (requestProperties, callback)=>{
 }

  // @Todo Authentication
 handle._token.delete = (requestProperties, callback)=>{

 }


 module.exports= handle