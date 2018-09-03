const got = require('got')

const data = {
    reserveFund: '100',
    outcomeCount: '2'
}

const postFn = async () => {
    try {
    //    const res = await got('http://192.168.31.124:5678/serialize/7333cce0dd4a4fed9891d4e330cebe36', {body: data,form: true}) 
    //    const res = await got('http://192.168.31.124:5678/preprofit/7333cce0dd4a4fed9891d4e330cebe36', {body: {index: 0, cash: '100'},form: true}) 
    //    const res = await got('http://192.168.31.124:5678/percentage/7333cce0dd4a4fed9891d4e330cebe36', {body: {index: 0},form: true}) 
    const res2 = await got('http://192.168.31.124:5678/preprofit/7333cce0dd4a4fed9891d4e330cebe36', {body: {index: 0, cash: '100'},form: true}) 
    const res3 = await got('http://192.168.31.124:5678/percentage/7333cce0dd4a4fed9891d4e330cebe36', {body: {index: 0},form: true}) 

    // const res = await got('http://192.168.31.124:5678/addq/7333cce0dd4a4fed9891d4e330cebe36', {body: {index: 0, quantity: '200'},form: true}) 
    
    const res4 = await got('http://192.168.31.124:5678/preprofit/7333cce0dd4a4fed9891d4e330cebe36', {body: {index: 0, cash: '100'},form: true}) 
    const res5 = await got('http://192.168.31.124:5678/percentage/7333cce0dd4a4fed9891d4e330cebe36', {body: {index: 0},form: true}) 
    
       console.log(res2.body,res3.body,res4.body,res5.body)
    } catch (error) {
        console.error(error)
    }
}

postFn()
