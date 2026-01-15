/* ====================================
 * Title       : user handler
 * Description : Handler to handler to handle user related data
 * Author      : Md Kausar Hossain Bidyut
 * Date        : 2026-01-15
 =================================== */

 //dependencies
 const data = require('../../lib/data')
 const {hash, parseJSON} = require('../../helpers/utilities')

 const handle = {}

 handle.userHandlers = (requestProperties, callback) =>{
    const acceptedMethods = ['get', 'post', 'put', 'delete']
    if(acceptedMethods.indexOf(requestProperties.method)> -1){
        handle._users[requestProperties.method](requestProperties, callback)
    }else{
        callback(405)
    }
    
    
 }

 handle._users={}

 handle._users.post = (requestProperties, callback)=>{
    const firstName = typeof(requestProperties.body.firstName)=== 'string' && requestProperties.body.firstName.trim().length >0 ? requestProperties.body.firstName : false

    const lastName = typeof(requestProperties.body.lastName)=== 'string' && requestProperties.body.lastName.trim().length >0 ? requestProperties.body.lastName : false

    const phone = typeof(requestProperties.body.phone)=== 'string' && requestProperties.body.phone.trim().length === 11 ? requestProperties.body.phone : false

    const password = typeof(requestProperties.body.password)=== 'string' && requestProperties.body.password.trim().length > 1 ? requestProperties.body.password : false

     const tosAgreement =typeof requestProperties.body.tosAgreement === 'boolean' &&requestProperties.body.tosAgreement === true;

    if(firstName && lastName && password && phone && tosAgreement){
        // make sure that the user doesn't already exists
        data.read('users', phone, (err1)=>{
            if(err1){
                let userObject = {
                    firstName,
                    lastName,
                    phone,
                    password : hash(password),
                    tosAgreement
                }
                // store the user to db
                data.create('users', phone, userObject, (err2)=>{
                    if(!err2){
                        callback(200,{
                            'message': 'User was created successfully!'
                        })
                    }else{
                        callback(500, {'error': 'Could not create user!'})
                    }
                })
            }else{
                callback(500, {
                    'error': 'There was a problem in server side'
                })
            }
        })
    }else{
        callback(400, {
            'error': 'You have a problem in your request'
        })
    }

 }

 handle._users.get = (requestProperties, callback)=>{
    // check the phon number is valid
    const phone = typeof(requestProperties.queryStringObject.phone)=== 'string' && requestProperties.queryStringObject.phone.trim().length === 11 ? requestProperties.queryStringObject.phone : false

    if(phone){
        // lookup the user
        data.read('users', phone, (err, u)=>{
            const user = {...parseJSON(u)}
            if(!err && user){
                delete user.password
                callback(200, user)
            }else{
                callback(400, {
                    'error': 'Requested user was not found phone!'
                })
            }
        })
    }else{
        callback(400, {
            'error': 'Requested user was not found!'
        })
    }

 }

 handle._users.put = (requestProperties, callback)=>{
    const firstName = typeof(requestProperties.body.firstName)=== 'string' && requestProperties.body.firstName.trim().length >0 ? requestProperties.body.firstName : false

    const lastName = typeof(requestProperties.body.lastName)=== 'string' && requestProperties.body.lastName.trim().length >0 ? requestProperties.body.lastName : false

    const phone = typeof(requestProperties.body.phone)=== 'string' && requestProperties.body.phone.trim().length === 11 ? requestProperties.body.phone : false

    const password = typeof(requestProperties.body.password)=== 'string' && requestProperties.body.password.trim().length > 1 ? requestProperties.body.password : false

    if(phone){
        if (firstName || lastName || password ){
            // lookup the user
            data.read('users', phone, (err1, uData)=>{
                const userData = {...parseJSON(uData)}
                if(!err1 && userData){
                    if(firstName){
                        userData.firstName= firstName
                    }
                    if(lastName){
                        userData.lastName= lastName
                    }
                    if(password){
                        userData.password= hash(password)
                    }
                    // store ba update to database
                    data.update('users', phone, userData, (err2)=>{
                        if(!err2){
                            callback(200, {
                                'message': 'User was updated successfully!'
                            })
                        }else{
                            callback(500,{
                                'error': 'There was a problem in the server side!'
                            })
                        }
                    })
                }else{
                    callback(400, {
                    'error': 'You have a problem in your request!'
                    })
                }
            })
        }else{
        callback(400, {
            'error': 'You have a problem in your request!'
        })
    }
    }else{
        callback(400, {
            'error': 'Invalid phone number. please try again!'
        })
    }
 }

 handle._users.delete = (requestProperties, callback)=>{

 }


 module.exports= handle