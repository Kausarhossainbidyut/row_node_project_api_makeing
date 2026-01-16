/* ====================================
 * Title       : Routes
 * Description : Application Routes
 * Author      : Md Kausar Hossain Bidyut
 * Date        : 2026-01-12
 =================================== */

 //dependency
 const {sampleHandlers} = require("./handlers/routeHandlers/sampleHandlers")
 const {userHandlers} = require("./handlers/routeHandlers/userHandlers")
 const {tokenHandler} = require("./handlers/routeHandlers/tokenHandler")

 const routes = {
    sample: sampleHandlers,
    user : userHandlers,
    token : tokenHandler,
 }

 module.exports= routes