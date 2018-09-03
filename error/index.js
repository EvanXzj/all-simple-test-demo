// const codes = require('./error-code')
const {TooManyRequestsError} = require('./error')

try {
    throw new TooManyRequestsError({message: 'You have exceeded your API rate limit'})  
} catch (error) {
    console.error(error.message)
    console.log()
    console.error(error)
}