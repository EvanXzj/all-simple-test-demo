const CronJob = require('cron').CronJob


const fn = function stop(){
    console.log(111)
    
    this.stop()
}
const job = new CronJob('30 * * * * *', fn, ()=> console.log('complete'), true)

job.start()
