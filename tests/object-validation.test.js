import Joi from "joi";

describe('Joi Validation Object', () => {
    it('should can validate object', () => {
        const loginSchema = Joi.object({
            username: Joi.string().required().min(3).max(100).email(),
            password: Joi.string().required().min(6).max(100)
        });

        const request = {
           username:"asepriki@gmail.com",
           password:"salah1234"
        }

        const result = loginSchema.validate(request,{
            abortEarly:false
        })

        // console.info(result)
        if(result.error){
            result.error.details.forEach((details)=>{
                console.info(`${details.path} = ${details.message}`)
            })
        }else{
            console.info(result);
        }
        
    });
});