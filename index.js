/* ====================================
 * Title       : 
 * Description : 
 * Author      : Md Kausar Hossain Bidyut
 * Date        : 2026-01-12
 =================================== */

 //dependencies
 const http = require("http")
 const {handleReqRes}= require("./helpers/handleReqRes")
 const environment =require('./helpers/environments')
 const data = require('./lib/data')

 //app object - module scaffolding
 const app ={}

//testing file system
//@TOTO pore muche dibo
// data.delete('test','newFile', (err)=>{
//    console.log(err,);
   
// })

 //create server
 app.createServer =()=>{
    const server = http.createServer(app.handleReqRes)
    server.listen(environment.port, ()=>{
        console.log(`server listening to port ${environment.port}`);
        
    })
 }

 //handle Request Response
 app.handleReqRes=handleReqRes



 //start the server
 app.createServer()