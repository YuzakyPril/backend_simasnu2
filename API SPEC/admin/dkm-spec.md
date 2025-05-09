# DKM Spec for Admin

## Create DKM

Endpoint : POST /api/admin/dkms

Header :
- Authorization : token-jwt

Request Body :
```json
{
    "nama" : "jhon doe",
    "usename" : "jhon",
    "password" : "rahasia",
    "confirm_password" : "rahasia",
    "email" : "jhondoe@gmail.com",
    "role" : "DKM",
    "active" : "PENDING",
    "first_name" : "Jhon",
    "last_name" : "Doe",
    "phone" : "08123456789",
    "address" : "Semarang",
    "sk_masjid" : "181506052025-surat_keputusan_takmir_masjid.pdf"
}
```

Response Body :
```json
{
    "data" : {
        "id" : 1,
        "nama" : "jhon doe",
        "usename" : "jhon",
        "email" : "jhondoe@gmail.com",
        "role" : "DKM",
        "active" : "PENDING",
        "first_name" : "Jhon",
        "last_name" : "Doe",
        "phone" : "08123456789",
        "address" : "Semarang",
        "sk_masjid" : "181506052025-surat_keputusan_takmir_masjid.pdf"
    }
}
```

## Update DKM

Endpoint : PUT /api/admin/dkms/:dkmId

Header :
- Authorization : token-jwt

Request Body :
```json
{
    "id" : 1,
    "nama" : "jhon doe",
    "usename" : "jhon",
    "email" : "jhondoe@gmail.com",
    "role" : "DKM",
    "active" : "PENDING",
    "first_name" : "Jhon",
    "last_name" : "Doe",
    "phone" : "08123456789",
    "address" : "Semarang",
    "sk_masjid" : "181506052025-surat_keputusan_takmir_masjid.pdf"
}
```

Response Body :
```json
{
    "data" : {
        "id" : 1,
        "nama" : "jhon doe",
        "usename" : "jhon",
        "email" : "jhondoe@gmail.com",
        "role" : "DKM",
        "active" : "PENDING",
        "first_name" : "Jhon",
        "last_name" : "Doe",
        "phone" : "08123456789",
        "address" : "Semarang",
        "sk_masjid" : "181506052025-surat_keputusan_takmir_masjid.pdf"
        }
}
```

## Actived DKM

Endpoint : PATCH /api/admin/dkms/:dkmID/status/:status

Headers
- Authorization : token-jwt

Request body :
```json
{
    "id" : 1,
    "actived" : 1 // dari angka 0(not actived) menjadi angka 1(active) atau angka 2 (banned)
}
```

Response body :
```json
{
    "messages" : "DKM berhasil di aktifkan/non-aktif/ banned",
    "data" : {
        "id" : 1,
        "actived" : 1
    }
}
```

## Delete DKM

Endpoint : DELETE /api/admin/dkms/:dkmId

Headers
- Authorization : token-jwt

Response body :
```json
{
    "message" : "Data berhasil di hapus"
}
```

## GET DKM
Endpoint : GET /api/admin/dkms/:dkmId

Headers
- Authorization : token-jwt

Response Body :
```json
{
    "data" : {
        "id" : 1,
        "nama" : "jhon doe",
        "username" : "jhon",
        "email" : "jhondoe@gmail.com",
        "role" : "DKM",
        "active" : "PENDING",
        "first_name" : "Jhon",
        "last_name" : "Doe",
        "phone" : "08123456789",
        "address" : "Semarang",
        "sk_masjid" : "181506052025-surat_keputusan_takmir_masjid.pdf"
    }
}
```

## List DKM

Endpoint : GET /api/admin/dkms

Headers
- Authorization : token-

Query Params
- name : Search by first_name or last_name, using like or optional
- email : Search by email, using like or optional
- phone : Search by phone, using like or optional
- role : Search by role, using like or optional
- status : Search by status, using like or optional
- page : Number of page, default 1
- size : Size per page, default 10 

Response Body :
```json
{
    "data" : [
        {
            "id" : 1,
            "nama" : "jhon doe",
            "username" : "jhon",
            "email" : "jhondoe@gmail.com",
            "role" : "DKM",
            "active" : "PENDING",
            "first_name" : "Jhon",
            "last_name" : "Doe",
            "phone" : "08123456789",
            "address" : "Semarang",
            "sk_masjid" : "181506052025-surat_keputusan_takmir_masjid.pdf"
        },
        {
            "id" : 2,
            "nama" : "jhon doe",
            "username" : "jhon",
            "email" : "jhondoe@gmail.com",
            "role" : "DKM",
            "active" : "PENDING",
            "first_name" : "Jhon",
            "last_name" : "Doe",
            "phone" : "08123456789",
            "address" : "Semarang",
            "sk_masjid" : "181506052025-surat_keputusan_takmir_masjid.pdf"
        }
    ]
}
```
