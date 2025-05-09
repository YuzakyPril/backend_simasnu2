import { prismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { validate } from "../validation/validation.js";
import { createTakmirUserValidation, 
  statusTakmirUserValidation, 
  updateTakmirUserValidation, 
  searchTakmirUserValidation,
  getTakmirUserValidation
 } from "../validation/dkm-validation.js";
import bcrypt from "bcrypt";
import path from "path";
import fs from "fs";

// Hapus file jika gagal
const deleteFileIfExist = (filename) => {
    if (!filename) return;
    const filePath = path.join("uploads", filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  };


  // untuk mengecek role user
const checkRole = async (user, expectedRole) => {
    const userRole = await prismaClient.user.findUnique({
      where: { username: user.username },
      select: { role: true },
    });
  
    if (!userRole || userRole.role !== expectedRole) {
      throw new ResponseError(403, "You are not authorized");
    } 
    
    return userRole.role;
}
  
// untuk membuat user dkm
const createTakmirUser = async (user, request, expectedRole) => {
    const { file, ...body } = request;
  
    const filename = file?.filename;
      // Cek role
      expectedRole = await checkRole(user, expectedRole);
  
      // Validasi
      const takmirData = validate(createTakmirUserValidation, body);
  
      // Cek username/email
      const [existUsername, existEmail] = await Promise.all([
        prismaClient.user.findUnique({ where: { username: takmirData.username } }),
        prismaClient.user.findFirst({ where: { email: takmirData.email } }),
      ]);
  
      if (existUsername) throw new ResponseError(400, "Username already exists");
      if (existEmail) throw new ResponseError(400, "Email already exists");
  
      // Hash password
      const hashedPassword = await bcrypt.hash(takmirData.password, 10);
  
      // Buat user
      await prismaClient.user.create({
        data: {
          name: takmirData.name,
          username: takmirData.username,
          password: hashedPassword,
          email: takmirData.email,
          role: takmirData.role,
          status: takmirData.status,
        },
      });
  
      // Buat data Takmir
      await prismaClient.takmir.create({
        data: {
          first_name: takmirData.first_name,
          last_name: takmirData.last_name,
          phone: takmirData.phone,
          address: takmirData.address,
          sk_masjid: filename,
          user: {
            connect: {
              username: takmirData.username,
            },
          },
        },
      });
  
      return {
        message: "Takmir user created successfully",
        data: {
          username: takmirData.username,
          email: takmirData.email,
          name: takmirData.name,
          role: takmirData.role,
          status: takmirData.status,
          first_name: takmirData.first_name,
          last_name: takmirData.last_name,
          phone: takmirData.phone,
          address: takmirData.address,
          sk_masjid: filename,
        },
      };
  } 

// untuk mengupdate user Takmir
const updateTakmirUser = async (takmirId, requestBody, file, user, expectedRole) =>  {
    const data = { ...requestBody };
    data.id = parseInt(takmirId);

    expectedRole = await checkRole(user, expectedRole);
  
    const validated = validate(updateTakmirUserValidation, data);
  
    const takmir = await prismaClient.takmir.findUnique({
      where: {
        id: validated.id,
      },
      include: {
        user: true // untuk ambil data user termasuk username, email, dll
      }
    });
  
    if (!takmir) {
      throw new ResponseError(404, "Takmir not found");
    }

    const existUsername = await prismaClient.user.findUnique({
      where: { username: validated.username },
    });

    const existEmail = await prismaClient.user.findFirst({
      where: { email: validated.email },
    });

    if (existUsername && existUsername.username !== takmir.user.username) {
      throw new ResponseError(400, "Username already exists");
    }
    if (existEmail && existEmail.email !== takmir.user.email) {
      throw new ResponseError(400, "Email already exists");
    }
  
    // Jika ada file baru, hapus file lama
    let newFileName = takmir.sk_masjid;
    if (file) {
      deleteFileIfExist(takmir.sk_masjid);
      newFileName = file.filename;
    }
  
    // Update ke tabel User
    await prismaClient.user.update({
      where: {
        username: takmir.user.username,
      },
      data: {
        username: validated.username,
        name: validated.name,
        email: validated.email,
        status: validated.status,
        role: validated.role,
      },
    });
  
    // Update ke tabel Takmir
    await prismaClient.takmir.update({
      where: {
        id: validated.id,
      },
      data: {
        first_name: validated.first_name,
        last_name: validated.last_name,
        phone: validated.phone,
        address: validated.address,
        sk_masjid: newFileName,
      },
    });
  
    return {
      message: "Takmir user updated successfully",
    };
  };

// untuk mengupdate status user Takmir
const updateStatusTakmirUser = async (takmirId, status, user, expectedRole) => {
    expectedRole = await checkRole(user, expectedRole);
  
    const validated = validate(statusTakmirUserValidation,{id:takmirId, status});

    const takmir = await prismaClient.takmir.findUnique({
      where: {
        id: validated.id,
      },
      include: {
        user: true // untuk ambil data user termasuk username, email, dll
      }
    });

    if (!takmir) {
      throw new ResponseError(404, "Takmir not found");
    }

    // Update status user
    return await prismaClient.user.update({
      where : {
        username : takmir.user.username
      },
      data : {
        status : validated.status

      }

    })

    
}

// untuk mencari user Takmir
const searchTakmirUser = async (user, request, expectedRole) => {
    expectedRole = await checkRole(user, expectedRole);

    request = await validate(searchTakmirUserValidation, request);

    const page = Number(request.page) || 1;
    const size = Number(request.size) || 10;
    const skip = (page - 1) * size;

    
    const filter = []
    if(request.name) {
        filter.push({
          OR : [
            {
              user : {
                name : {
                  contains : request.name
                }
              }
            },
            {
              first_name : {
                contains : request.first_name
              }
            },
            {
              last_name : {
                contains : request.last_name
              }
            }
          ]
        })
    }

    if(request.email) {
        filter.push({
            user : {
                email : {
                    contains : request.email
                }
            }
        })
    }
    if(request.username) {
        filter.push({
            user : {
                username : {
                    contains : request.username
                }
            }
        })
    }
    if(request.status) {
        filter.push({
            user : {
                status : request.status
            }
        })
    }
    if(request.role) {
        filter.push({
            user : {
                role : request.role
            }
        })
    }
    if(request.phone) {
        filter.push({
            phone : {
                contains : request.phone
            }
        })
    }


    const userTakmir = await prismaClient.takmir.findMany({
        where : {
            AND : filter
        },
        include : {
            user : true
        },
        skip : skip,
        take : size,
    })

    const total = await prismaClient.takmir.count({
        where : {
            AND : filter
        }

    })

    return {
        data : userTakmir,
        paging : {
            page : request.page,
            size : request.size,
            total : total
        }
    }
 

}

// untuk mendapatkan user Takmir
const getTakmirUser = async (takmirId, user, expectedRole) => {
    expectedRole = await checkRole(user, expectedRole);

    const takmirUser = validate(getTakmirUserValidation, takmirId);

    const id = parseInt(takmirId);
  
    const takmir = await prismaClient.takmir.findUnique({
      where: {
        id: id,
      },
      include: {
        user: true, // untuk ambil data user termasuk username, email, dll
      }
  })

  if (!takmir) {
    throw new ResponseError(404, "Takmir not found");
  }

  return {
    data: {
      id: takmir.id,
      first_name: takmir.first_name,
      last_name: takmir.last_name,
      phone: takmir.phone,
      address: takmir.address,
      sk_masjid: takmir.sk_masjid,
      user: {
        username: takmir.user.username,
        email: takmir.user.email,
        name: takmir.user.name,
        status: takmir.user.status,
        role: takmir.user.role,
      },
    },
  };


};

// untuk menghapus user Takmir
const deleteTakmirUser = async (takmirId, user, expectedRole) => {
    expectedRole = await checkRole(user, expectedRole);

    const id = parseInt(takmirId);

    const takmir = await prismaClient.takmir.findUnique({
        where : {
            id : id
        },
        include : {
            user : true
        }
    })

    if(!takmir) {
        throw new ResponseError(404, "takmir not found")
    }

    // Hapus file SK Masjid jika ada
    deleteFileIfExist(takmir.sk_masjid)

    // Hapus takmir
    await prismaClient.takmir.delete({
        where : {
            id : id
        }
    })

    // Hapus User
    await prismaClient.user.delete({
        where : {
            username : takmir.user.username
        }
    })
};
  
  export default {
    createTakmirUser,
    updateTakmirUser,
    deleteFileIfExist,
    updateStatusTakmirUser,
    searchTakmirUser,
    getTakmirUser,
    deleteTakmirUser
  };
