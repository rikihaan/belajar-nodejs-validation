import Joi from "joi";

describe('Joi Date Vallidation', () => {
    it('should can validate date', () => {
        const birthDateSechema= Joi.date().required().min("09/20/1993").max("now");

        // validate error min
        const result = birthDateSechema.validate("08/20/1993");
        console.info(result);   

        // validate error max
        const result2= birthDateSechema.validate("09/20/2029");
        console.info(result2);

        //success validate
        const result3 = birthDateSechema.validate("09/20/1994");
        console.info(result3);
    });

    it('should can validation nested object', () => {
        const createUserSechema = Joi.object({
            id :Joi.string().required().max(100),
            name:Joi.string().required().max(20),
            address: Joi.object({
                street:Joi.string().required().max(100),
                city:Joi.string().required().max(100),
                country:Joi.string().required().max(20),
                zipCode:Joi.string().required().max(20)
            })
        })

        const request ={}

        const result = createUserSechema.validate(request,{
            abortEarly:false
        })
    });
});