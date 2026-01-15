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
 }

 environments.production = {
    port: 5000,
    envName: 'production',
    secretKey: 'sdfsalfjdaklfjlkajflakfkajfdkj',
 }

 // determine which environments was passed
 const currentEnvironment = typeof(process.env.NODE_ENV)==='staging' ? process.env.NODE_ENV : 'staging'

 //export corresponding environment object
 const environmentToExport = typeof(environments[currentEnvironment])=== 'object' ? environments[currentEnvironment] : environments.staging

 //export module
 module.exports = environmentToExport