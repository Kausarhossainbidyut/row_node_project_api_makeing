/* ====================================
 * Title       : user handler
 * Description : Handler to handler to handle user related data
 * Author      : Md Kausar Hossain Bidyut
 * Date        : 2026-01-16
 =================================== */

 //dependencies
 const data = require('../../lib/data')
//  const {hash, parseJSON} = require('../../helpers/utilities')

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