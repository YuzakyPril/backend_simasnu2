# User SPEC

## Registrasi DKM

Endpoint : POST /api/register/

Request Body :
```json
{
    "name" : "jhon doe",
    "usename" : "jhon",
    "password" : "rahasia",
    "confirm_password" : "rahasia",
    "email" : "jhondoe@gmail.com",
}
```

Response Body :
```json
{
    "data" : {
        "name" : "jhon doe",
        "username" : "jhon",
        "email" : "jhondoe@gmail.com",
        "status" : "PENDING",
        "role" : "DKM",      
    }
}
```

## Login User
Endpoint : 
- POST /api/admin/login (For Admin)
- POST /api/dkm/login (For DKM)


Request body :
```json
{
    "username" : "admin",
    "password" : "rahasia"
}
```

Response body success :
```json
{
    "token" : "jwt-token",
}
```

Response body failed :
```json
{
    "error" : "username or password are wrong"
}
```

## Get User

Endpoint : 
- GET /api/admin/profile (For Admin)
- GET /api/dkm/profile (For DKM)

Headers
- Authorization : token-jwt

Response Body Success :
```json
{
    "data" : {
        "id" : 1,
        "username" : "admin",
        "nama" : "admin"
    }
}
```

Response body Failed :
```json
{
    "error" : "Unauthorization"
}
```

## Update password user

- PUT /api/admin/profile (For Admin)
- PUT /api/dkm/profile (For DKM)

Headers
- Authorization : token-jwt

Request body :
```json
{
    "email" : "jhondoe@gmail.com",
    "username" : "jhondoe",
    "name" : "jhon doe",
    "password_baru" : "rahasia123",
    "confirm_password" : "rahasia123"
}
```

Response Body :
```json
{
    "message" : "profile berhasil di perbarui"
}
```

## Logout admin

Endpoint : DELETE /api/logout

Header :
- Authorization : token-jwt

Response body : 
```json
{
    "data" : "OK"
}
```