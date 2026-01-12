/* ====================================
 * Title       : 
 * Description : 
 * Author      : Md Kausar Hossain Bidyut
 * Date        : 2026-01-12
 =================================== */

 //dependencies
 const http = require("http")

 //app object - module scaffolding
 const app ={}

 //configuration
 app.config={
    port: 3000
 }

 //create server
 app.createServer =()=>{
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, ()=>{
        console.log(`server listening to port ${app.config.port}`);
        
    })
 }

 //handle Request Response
 app.handleReqRes=(req,res)=>{
    //response handle
    res.end("Hello world ho")
 }



 //start the server
 app.createServer()