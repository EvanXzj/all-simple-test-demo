const bluebird = require('bluebird')

const arr = [1,2,3,4]

const result = []

const run  =  async () => {
    await bluebird.map(arr, (val, index) => {
        try {
            
            if (val === 3) {
                throw new Error('test')
            }
        } catch (error) {
            console.log(error.message)

            return
        }

        return result.push(val * 2,index)
    })

    console.log(result)
}

run()