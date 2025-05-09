import joi from "joi";

const createTakmirUserValidation = joi.object({
    // user model
    email: joi.string().email().required(),
    username: joi.string().required().min(4).max(100),
    password: joi.string().required().min(8).max(100),
    name: joi.string().required().max(100).min(5),
    status : joi.string().valid("PENDING", "ACTIVE", "INACTIVE").default("PENDING"),
    role: joi.string().valid("ADMIN", "TAKMIR").default("TAKMIR"),

    // Takmir model
    first_name: joi.string().required().max(100).min(2),
    last_name: joi.string().max(100).min(2).optional(),
    phone: joi.string().optional().max(15).min(5),
    address: joi.string().optional().max(255).min(5),
})


const updateTakmirUserValidation = joi.object({
    // user model
    username: joi.string().required().min(4).max(100),
    email: joi.string().email().required(),
    name: joi.string().required().max(100).min(5),
    status : joi.string().valid("PENDING", "ACTIVE", "INACTIVE").default("PENDING"),
    role: joi.string().valid("ADMIN", "TAKMIR").default("TAKMIR"),

    // Takmir model
    id : joi.number().required().positive(),
    first_name: joi.string().required().max(100).min(2),
    last_name: joi.string().max(100).min(2).optional(),
    phone: joi.string().optional().max(15).min(5),
    address: joi.string().optional().max(255).min(5),
})

const statusTakmirUserValidation = joi.object({
    id: joi.number().required().positive(),
    status: joi.string().valid("PENDING", "ACTIVE", "INACTIVE")
})

const getTakmirUserValidation = joi.number().required().positive();

const searchTakmirUserValidation = joi.object({
    name : joi.string().optional(),
    email : joi.string().optional(),
    username : joi.string().optional(),
    status : joi.string().valid("PENDING", "ACTIVE", "INACTIVE").optional(),
    role : joi.string().valid("ADMIN", "TAKMIR").optional(),
    phone : joi.string().optional(),
    page : joi.number().min(1).positive().default(1),
    size : joi.number().min(1).positive().max(100).default(10),

})

export {
    createTakmirUserValidation,
    updateTakmirUserValidation,
    statusTakmirUserValidation,
    getTakmirUserValidation,
    searchTakmirUserValidation
}