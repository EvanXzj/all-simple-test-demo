const Joi =require('joi')

const func = Joi.func();
func.val
const schema = Joi.object().keys({
    aa: Joi.number()
    .min(0.01)
    .max(0.99)
    .required()
})

const obj = {
    aa: 0.003
}

console.log(Joi.validate(obj, schema).error)
/^0\.\d{2}$