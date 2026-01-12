/* ====================================
 * Title       : 
 * Description : 
 * Author      : Md Kausar Hossain Bidyut
 * Date        : 2026-01-12
 =================================== */

 const handle = {}

 handle.sampleHandlers = (requestProperties, callback) =>{
    console.log(requestProperties);
    
    callback(200, {
        message : "this is sample url"
    })
    
 }

 module.exports= handle