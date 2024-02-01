import Joi from "joi";

describe('Joi', () => {
    it('should cant validate and get result', () => {
        const birthDateSechema = Joi.date().required().max("now").min("1-1-1988");
        const result =birthDateSechema.validate("1-1-1987");
        console.info(result.value)
        console.info(result.error)

        const result2 =birthDateSechema.validate("12-25-1995");
        console.info(result2.value)
        console.info(result2.error);
    });

    it('should returnt validation error', () => {
        const userNameSchema = Joi.string().min(5).email().required();

        const result =userNameSchema.validate("ups",{
            abortEarly:false
        });
        console.info(result.error);

        result.error.details.forEach((value)=>{
            console.info(`${value.path} = ${value.message}`);

        })
    });
});