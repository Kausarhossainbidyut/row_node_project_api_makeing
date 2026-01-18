/* ====================================
 * Title       : Environments
 * Description : Environments related things
 * Author      : Md Kausar Hossain Bidyut
 * Date        : 2026-01-14
 =================================== */

 //dependencies


 //module scaffolding
 const environments = {}

 environments.staging={
    port: 3000,
    envName: 'staging',
    secretKey: 'hjdhjdshdkfalfjalkfdjlafalkfal',
    maxChecks: 5,
    twilio: {
      fromPhone: '+15005550006',
      accountSid: 'AC6a18e8d211123c36d5f7a403abb0d183',
      authToken: '14f43445ac1c1e64519155f14f9d713c'
    },
   
 }

 environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'sdfsalfjdaklfjlkajflakfkajfdkj',
    maxChecks: 5,
    twilio: {
      fromPhone: '+15005550006',
      accountSid: 'AC6a18e8d211123c36d5f7a403abb0d183',
      authToken: '14f43445ac1c1e64519155f14f9d713c'
    },
 }

 // determine which environments was passed
 const currentEnvironment = typeof(process.env.NODE_ENV)==='staging' ? process.env.NODE_ENV : 'staging'

 //export corresponding environment object
 const environmentToExport = typeof(environments[currentEnvironment])=== 'object' ? environments[currentEnvironment] : environments.staging

 //export module
 module.exports = environmentToExport