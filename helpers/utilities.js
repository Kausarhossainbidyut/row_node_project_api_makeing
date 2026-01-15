/* ====================================
 * Title       : utilities
 * Description : utilities
 * Author      : Md Kausar Hossain Bidyut
 * Date        : 2026-01-14
 =================================== */

 //dependencies


 //module scaffolding
 const crypto = require('crypto');

 const utilities = {}
 const environments = require('./environments')

 // parse JSON string to Object
 utilities.parseJSON = (jsonString) =>{
    let output 

    try{
        output= JSON.parse(jsonString)
    }catch{
        output = {}
    }

    return output
 }
 // hash string
 utilities.hash = (str) =>{
   if(typeof(str)=== 'string'  && str.length > 0 ){
    let hash = crypto.createHmac('sha256', environments.secretKey).update(str).digest('hex')

    return hash
   }
   return false
 }



 //export module
 module.exports = utilities