import Joi from "joi";

describe('Joi', () => {
  it('should can create schema', () => {
        const schema = Joi.string().min(3).max(100).required();
        const request = "ek";

        const result = schema.validate(request);
        if(result.error){
            console.info(result.error)
        }
  });

  it('Should can validate basic data type', () => {
    const userNameSchema = Joi.string().email().required();
    const isAdminSchema = Joi.boolean().required();
    const priceSchema = Joi.number().min(1000).max(1000000).required();

    const resultUsername = userNameSchema.validate("asep@gmail.com");
    console.info(resultUsername);

    const resultIsAdmin = isAdminSchema.validate("false");
    console.info(JSON.stringify(resultIsAdmin));

    const resultPriceSchem = priceSchema.validate("100")
    console.info(JSON.stringify(resultPriceSchem));
  });
})      
