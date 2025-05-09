import joi from 'joi';

const registerUserValidation = joi.object({
    email : joi.string().email().required(),
    username : joi.string().required().min(4).max(100),
    password : joi.string().required().min(8).max(100),
    confirm_password : joi.string().required().min(8).max(100),
    name : joi.string().required().max(100).min(5),
});

const loginUserValidation = joi.object({
    username : joi.string().required().min(4).max(100),
    password : joi.string().required().min(8).max(100),
})

const getUserValidation = joi.string().required().min(4).max(100);

const updateUserValidation = joi.object({
    email : joi.string().email().required(),
    username : joi.string().required().min(4).max(100),
    password : joi.string().required().min(8).max(100),
    confirm_password : joi.string().required().min(8).max(100),
    name : joi.string().required().max(100).min(5),
});

export {
    registerUserValidation,
    loginUserValidation,
    getUserValidation,
    updateUserValidation
}