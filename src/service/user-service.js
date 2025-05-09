import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { validate } from "../validation/validation.js";
import { registerUserValidation, loginUserValidation, getUserValidation, updateUserValidation } from "../validation/user-validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// register user
const register = async (request) => {
    const user = validate(registerUserValidation, request);

    const countUser = await prismaClient.user.count({
        where : {
            username : user.username
        }
    });

    if(countUser === 1){
        throw new ResponseError(400, "Username already exist")
    }

    const countEmail = await prismaClient.user.count({
        where : {
            email : user.email
        }
    });

    if(countEmail === 1){
        throw new ResponseError(400, "Email already exist")
    }

    if(user.password !== user.confirm_password) {
        throw new ResponseError(400, "Password and confirm password do not match")
    }

    user.password = await bcrypt.hash(user.password, 10);

    await prismaClient.user.create({
        data : {
            username : user.username,
            email : user.email,
            password : user.password,
            name : user.name,
            status : user.status,
            role : user.role
        },
        select : {
            email : true,
            username : true,
            name : true,
        }
    });

    return await prismaClient.takmir.create({
        data : {
            userId : user.username,
        },
        include : {
            user : {
                select : {
                    username : true,
                    email : true,
                    name : true,
                    status : true,
                    role : true
                }
            }
        }
    })
}

// end of register user

// Login User
const login = async (request, expectedRole) => {
    const loginUser = validate(loginUserValidation, request);
  
    const user = await prismaClient.user.findUnique({
      where: { username: loginUser.username },
      select: {
        username: true,
        password: true,
        role: true,
      },
    });
  
    if (!user) throw new ResponseError(400, "Username or password is incorrect");
  
    if (user.role !== expectedRole) {
      throw new ResponseError(403, "You are not authorized to access this resource");
    }
  
    const isValidPassword = await bcrypt.compare(loginUser.password, user.password);
    if (!isValidPassword) {
      throw new ResponseError(400, "Username or password is incorrect");
    }
  
    if (!process.env.JWT_SECRET) {
      throw new ResponseError(500, "JWT secret key is missing");
    }
  
    const token = jwt.sign(
      { username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
  
    return {
      token,
      username: user.username,
      role: user.role,
    };
  };
// end of login user


// Get User
const getUser = async (username, expectedRole) => {
    username = validate(getUserValidation, username);

    const user = await prismaClient.user.findUnique({
        where : {
            username : username
        },
        select : {
            username : true,
            email : true,
            name : true,
            role : true,
            status : true,
        }
    })

    if(!user) {
        throw new ResponseError(404, "User not found")
    }

    if(user.role !== expectedRole) {
        throw new ResponseError(403, "You are not authorized to access this resource")
    }

    return user;
}
// end of get user


// Update User
const updateUser = async (request, expectedRole) => {
    const user = validate(updateUserValidation, request);

    const totalUser = await prismaClient.user.count({
        where : {
            username : user.username
        },
        select : {
            username : true,
            role : true
        }
    })

    const role = await prismaClient.user.findUnique({
        where : {
            username : user.username
        },
        select : {
            role : true
        }
    })

    if(role.role !== expectedRole) {
        throw new ResponseError(403, "You are not authorized to access this resource")
    }

    if(totalUser === 0) {
        throw new ResponseError(404, "User not found")
    }

    if(user.password !== user.confirm_password) {
        throw new ResponseError(400, "Password and confirm password do not match")
    }

    user.password = await bcrypt.hash(user.password, 10);

    const data = {}
    if(user.name) {
        data.name = user.name
    }
    if(user.email) {
        data.email = user.email
    }
    if(user.password) {
        data.password = user.password
    }
    if(user.username) {
        data.username = user.username
    }

    return await prismaClient.user.update({
        where : {
            username : user.username
        },
        data : data,
        select : {
            username : true,
            email : true,
            name : true,
            role : true,
            status : true
        }
    })

}
// end of update user

export default {
    register,
    login,
    getUser,
    updateUser
}