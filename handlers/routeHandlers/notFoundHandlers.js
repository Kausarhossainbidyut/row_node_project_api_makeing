/* ====================================
 * Title       : 
 * Description : 
 * Author      : Md Kausar Hossain Bidyut
 * Date        : 2026-01-12
 =================================== */

 const handle = {}

 handle.notFoundHandlers = (requestProperties, callback) =>{
    
    callback(404, {
        message : "your requested url is not found"
    })
    
 }

 module.exports= handle