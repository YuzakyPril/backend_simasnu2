import dkmService from "../service/dkm-service.js";

const createTakmirUser = async (req, res, next) => {
    const file = req.file;
    try {
        const user = req.user;
        const request = {
            ...req.body,
            file: req.file // agar file ikut dikirim ke service
          };
        const expectedRole = "ADMIN";

        const result = await dkmService.createDkmUser(user, request, expectedRole);

        res.status(201).json({
            data: result
        });
    } catch (e) {
        dkmService.deleteFileIfExist(file?.filename); // hapus file jika ada error
        next(e);
    }
}

const updateTakmirUser = async (req, res, next) => {
    const file = req.file;
    try {
        const user = req.user;
        const takmirId = req.params.takmirId;
        const requestBody = req.body;
        const file = req.file; // agar file ikut dikirim ke service
        const expectedRole = "ADMIN";

        const result = await dkmService.updateTakmirUser(takmirId, requestBody, file, user, expectedRole);

        res.status(200).json({
            data: result
        });
    } catch (e) {
        // 🔥 Jika ada file dan error, hapus file
        if (file && file.filename) {
          dkmService.deleteFileIfExist(file.filename);
        }
        next(e);
    }
}

const updateStatusUser = async (req, res, next) => {
    const user = req.user;
    const takmirId = req.params.takmirId;
    const status = req.params.status;
    const expectedRole = "ADMIN";

    try {
        const result = await dkmService.updateStatusTakmirUser(takmirId, status, user, expectedRole);

        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const searchTakmir = async (req, res, next) => {
    const user = req.user;
    const request = {
        name: req.query.name,
        email : req.query.email,
        username: req.query.username,
        phone : req.query.phone,
        page: req.query.page,
        status: req.query.status,
    }
    const expectedRole = "ADMIN";

    try {
        const result = await dkmService.searchTakmirUser(user, request, expectedRole);

        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const getTakmirUser = async (req, res, next) => {
    const user = req.user;
    const takmirId = req.params.takmirId;
    const expectedRole = "ADMIN";

    try {
        const result = await dkmService.getDkmUser(takmirId, user, expectedRole);

        res.status(200).json({
            data: result
        });
    } catch (e) {
        next(e);
    }
}

const deleteTakmirUser = async (req, res, next) => {
    const user = req.user;
    const takmirId = req.params.takmirId;
    const expectedRole = "ADMIN";

    try {
        const result = await dkmService.deleteTakmirUser(takmirId, user, expectedRole);

        res.status(200).json({
            data: "User deleted successfully"
        });
    } catch (e) {
        next(e);
    }
}

export default {
    createTakmirUser,
    updateTakmirUser,
    updateStatusUser,
    searchTakmir,
    getTakmirUser,
    deleteTakmirUser
}