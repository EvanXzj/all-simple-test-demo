const  LMSR = require('lmsr')

const lmsr = new LMSR(2)

lmsr.fromLossLimit(100)

lmsr.initMarketWithShare([0.5,0.5])

console.log(lmsr)

console.log(lmsr.getLossLimit().toNumber())
console.log(lmsr.getReserveFund().toNumber())