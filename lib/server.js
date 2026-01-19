/* ====================================
 * Title       : 
 * Description : 
 * Author      : Md Kausar Hossain Bidyut
 * Date        : 2026-01-12
 =================================== */

 //dependencies
 const http = require("http")
 const {handleReqRes}= require("../helpers/handleReqRes")

 //server object - module scaffolding
 const server ={}


 //create server
 server.createServer =()=>{
    const createServerVariable = http.createServer(server.handleReqRes)
    createServerVariable.listen(environment.port, ()=>{
        console.log(`server listening to port ${environment.port}`);
        
    })
 }

 //handle Request Response
 server.handleReqRes=handleReqRes



 //start the server
 server.init=()=>{
     server.createServer()
 }


 // exports
 module.exports= server
