import userService from '../service/user-service.js';

const register = async(req, res, next) => {
    try {
        const result = await userService.register(req.body);
        res.status(200).json({
            data : result
        });
    } catch(e) {
        next(e) 
    }
}

const loginAdmin = async(req, res, next) => {
    try {
        const result = await userService.login(req.body, "ADMIN");

        res.cookie("token", result, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 1000 // 1 jam
          });

        res.status(200).json({
            data : result
        });
    } catch(e) {
        next(e) 
    }
}

const loginTakmir = async(req, res, next) => {
    try {
        const result = await userService.login(req.body, "TAKMIR");

        res.cookie("token", result, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 60 * 60 * 1000 // 1 jam
          });

        res.status(200).json({
            data : result
        });
    } catch(e) {
        next(e) 
    }
}

const getAdmin = async(req, res, next) => {
    try {
        const username = req.user.username;
        const result = await userService.getUser(username, "ADMIN");
        res.status(200).json({
            data : result
        });
    } catch(e) {
        next(e) 
    }
}

const getTakmir = async(req, res, next) => {
    try {
        const username = req.user.username;
        const result = await userService.getUser(username, "TAKMIR");
        res.status(200).json({
            data : result
        });
    } catch(e) {
        next(e) 
    }
}

const updateAdmin = async(req, res, next) => {
    try {
        const username = req.user.username;
        const request = req.body;
        request.username = username;

        const result = await userService.updateUser(request, "ADMIN");
        res.status(200).json({
            data : result
        });
    } catch(e) {
        next(e) 
    }
}

const updateTakmir = async(req, res, next) => {
    try {
        const username = req.user.username;
        const request = req.body;
        request.username = username;

        const result = await userService.updateUser(request, "TAKMIR");
        res.status(200).json({
            data : result
        });
    } catch(e) {
        next(e) 
    }
}

const logout = async(req, res, next) => {
    try {
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
          });
        res.status(200).json({
            message : "Logout success"
        });
    } catch(e) {
        next(e) 
    }
}

export default {
    register, 
    loginAdmin,
    loginTakmir,
    getAdmin,
    getTakmir,
    updateAdmin,
    updateTakmir,
    logout
}