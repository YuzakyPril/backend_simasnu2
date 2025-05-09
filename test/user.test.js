import supertest from "supertest";
import { web } from "../src/application/web.js";
// import { prismaClient } from "../src/application/database.js";
import { logger } from "../src/application/logging.js";
// import { createTestUser, getTestUser, removeTestUser } from "./test-util.js";
// import bcrypt from "bcrypt";

describe("POST /api/admin/login", () => {

    it("should can login", async() => {
        const result = await supertest(web)
        .post("/api/admin/login")
        .send({
            username : "admin1",
            password : "admin123"
        })

        logger.info(result.body)

        expect(result.status).toBe(200)
        expect(result.body.data.token).toBeDefined()           
    });
})