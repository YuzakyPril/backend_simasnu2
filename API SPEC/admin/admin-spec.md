# ADMIN SPEC

## Login User
Endpoint : POST /api/admin/login

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

Endpoint : Get /api/admin/current

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

Endpoint : PUT /api/admin/current

Headers
- Authorization : token-jwt

Request body :
```json
{
    "password_lama" : "rahasia",
    "password_baru" : "rahasia123",
    "confirm_password" : "rahasia123"
}
```

Response Body :
```json
{
    "message" : "password berhasil diperbarui"
}
```

## Logout admin

Endpoint : DELETE /api/admin/logout

Header :
- Authorization : token-jwt

Response body : 
```json
{
    "data" : "OK"
}
```

##

# Masjid Spec For Admin

## Create Masjid 
 
Endpoint : POST /api/admin/masjids

Headers 
- Authorization : token-jwt

Request body :
```json
{
    "nama" : "test",
    "email" : "test@gmail.com",
    "no_telp" : "08123456789",
    "alamat" : "Jl. test no.01",
    "Kabupaten/kota" : "Semarang",
    "kecamatan" : "Pedurngan",
    "Kelurahan" : "Tlogosari",
    "jenis_tipologi" : "masjid besar",
    "no_badan_hukum" : 12345,
    "tahun berdiri" : "2004",
    "luas_tanah" : "1000",
    "luas_bangunan" : "2000",
    "status_tanah" : "wakaf",
    "nomor_aiw" : "xxxx",
    "akte_ikrar_wakaf" : "base-64",
    "daya_tampung" : "1000",
    "jumlah_pengurus" : "10",
    "ketua_pengurus" : "test",
    "jumlah_imam" : "7",
    "jumlah_khatib" : "5",
    "jumlah_muazin" : "5",
}
```

Response body :
```json
{
    "messages" : "data berhasil di simpan",
    "data" : {
        "nama" : "test",
        "email" : "test@gmail.com",
        "no_telp" : "08123456789",
        "alamat" : "Jl. test no.01",
        "Kabupaten/kota" : "Semarang",
        "kecamatan" : "Pedurngan",
        "Kelurahan" : "Tlogosari",
        "jenis_tipologi" : "masjid besar",
        "no_badan_hukum" : 12345,
        "tahun berdiri" : "2004",
        "luas_tanah" : "1000",
        "luas_bangunan" : "2000",
        "status_tanah" : "wakaf",
        "nomor_aiw" : "xxxx",
        "akte_ikrar_wakaf" : "base-64",
        "daya_tampung" : "1000",
        "jumlah_pengurus" : "10",
        "ketua_pengurus" : "test",
        "jumlah_imam" : "7",
        "jumlah_khatib" : "5",
        "jumlah_muazin" : "5",
    }
}
```

## Update Masjid

Endpoint : PUT /api/admin/masjids/:masjidId

Headers
- Authorization : token-jwt

Request body : 
```json
{
     "nama" : "test",
    "email" : "test@gmail.com",
    "no_telp" : "08123456789",
    "alamat" : "Jl. test no.01",
    "Kabupaten/kota" : "Semarang",
    "kecamatan" : "Pedurngan",
    "Kelurahan" : "Tlogosari",
    "jenis_tipologi" : "masjid besar",
    "no_badan_hukum" : 12345,
    "tahun berdiri" : "2004",
    "luas_tanah" : "1000",
    "luas_bangunan" : "2000",
    "status_tanah" : "wakaf",
    "nomor_aiw" : "xxxx",
    "akte_ikrar_wakaf" : "base-64",
    "daya_tampung" : "1000",
    "jumlah_pengurus" : "10",
    "ketua_pengurus" : "test",
    "jumlah_imam" : "7",
    "jumlah_khatib" : "5",
    "jumlah_muazin" : "5",
}
```

Response body :
```json
{
    "messages" : "Data berhasil di update",
    "data" : {
        "id" : 1,
        "nama" : "test",
        "email" : "test@gmail.com",
        "no_telp" : "08123456789",
        "alamat" : "Jl. test no.01",
        "Kabupaten/kota" : "Semarang",
        "kecamatan" : "Pedurngan",
        "Kelurahan" : "Tlogosari",
        "jenis_tipologi" : "masjid besar",
        "no_badan_hukum" : 12345,
        "tahun berdiri" : "2004",
        "luas_tanah" : "1000",
        "luas_bangunan" : "2000",
        "status_tanah" : "wakaf",
        "nomor_aiw" : "xxxx",
        "akte_ikrar_wakaf" : "base-64",
        "daya_tampung" : "1000",
        "jumlah_pengurus" : "10",
        "ketua_pengurus" : "test",
        "jumlah_imam" : "7",
        "jumlah_khatib" : "5",
        "jumlah_muazin" : "5",
    }
}
```

## Delete masjid

Endpoint : DELETE /api/admin/masjids/:masjidId

Headers
- Authorization : token-jwt

Response body :
```json
{
    "message" : "Data berhasil di hapus"
}
```

## Verication Masjid by Admin

Endpoint : PATCH /api/admin/masjids/:masjidId

Headers
- Authorization : token-jwt

Request body :
```json
{
    "actived" : 1 // dari angka 0(not actived) menjadi angka 1(active) atau angka 2 (banned)
}
```

Response body :
```json
{
    "messages" : "Masjid berhasil di aktifkan/non-aktif/ banned",
    "data" : {
        "id" : 1,
        "actived" : 1
    }
}
```

## Get Masjid

Endpoint : GET /api/admin/masjids/:masjidId

Headers
- Authorization : token-jwt

Response Body :
```json
{
    "data" : {
        "id" : 1,
        "nama" : "test",
        "email" : "test@gmail.com",
        "no_telp" : "08123456789",
        "alamat" : "Jl. test no.01",
        "Kabupaten/kota" : "Semarang",
        "kecamatan" : "Pedurngan",
        "Kelurahan" : "Tlogosari",
        "jenis_tipologi" : "masjid besar",
        "no_badan_hukum" : 12345,
        "tahun berdiri" : "2004",
        "luas_tanah" : "1000",
        "luas_bangunan" : "2000",
        "status_tanah" : "wakaf",
        "nomor_aiw" : "xxxx",
        "akte_ikrar_wakaf" : "base-64",
        "daya_tampung" : "1000",
        "jumlah_pengurus" : "10",
        "ketua_pengurus" : "test",
        "jumlah_imam" : "7",
        "jumlah_khatib" : "5",
        "jumlah_muazin" : "5",
    }
}
```

## List Masjid

Endpoint : GET /api/admin/masjids

Headers
- Authorization : token-jwt

Response Body :
```json
{
    "data" : [
        {
            "id" : 1,
            "nama" : "test",
            "email" : "test@gmail.com",
            "no_telp" : "08123456789",
            "alamat" : "Jl. test no.01",
            "Kabupaten/kota" : "Semarang",
            "kecamatan" : "Pedurngan",
            "Kelurahan" : "Tlogosari",
            "jenis_tipologi" : "masjid besar",
            "no_badan_hukum" : 12345,
            "tahun berdiri" : "2004",
            "luas_tanah" : "1000",
            "luas_bangunan" : "2000",
            "status_tanah" : "wakaf",
            "nomor_aiw" : "xxxx",
            "akte_ikrar_wakaf" : "base-64",
            "daya_tampung" : "1000",
            "jumlah_pengurus" : "10",
            "ketua_pengurus" : "test",
            "jumlah_imam" : "7",
            "jumlah_khatib" : "5",
            "jumlah_muazin" : "5",
        },
        {
            "id" : 2,
            "nama" : "test",
            "email" : "test@gmail.com",
            "no_telp" : "08123456789",
            "alamat" : "Jl. test no.01",
            "Kabupaten/kota" : "Semarang",
            "kecamatan" : "Pedurngan",
            "Kelurahan" : "Tlogosari",
            "jenis_tipologi" : "masjid besar",
            "no_badan_hukum" : 12345,
            "tahun berdiri" : "2004",
            "luas_tanah" : "1000",
            "luas_bangunan" : "2000",
            "status_tanah" : "wakaf",
            "nomor_aiw" : "xxxx",
            "akte_ikrar_wakaf" : "base-64",
            "daya_tampung" : "1000",
            "jumlah_pengurus" : "10",
            "ketua_pengurus" : "test",
            "jumlah_imam" : "7",
            "jumlah_khatib" : "5",
            "jumlah_muazin" : "5",
        }
    ]
}
```
##
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

Endpoint : PATCH /api/admin/dkms/:dkmId

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
- Authorization : token-jwt

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

##
# Berita Spec for Admin

# Create Berita

Endpoint : POST /api/admin/news

Header :
- Authorization : token-jwt

Request Body :
```json
{
    "judul_berita" : "lorem ipsum",
    "isi_berita" : "lorem ipsum",
}
```

Response Body :
```json
{
    "data" : {
        "id" : 1,
        "judul_berita" : "lorem ipsum",
        "isi_berita" : "lorem ipsum",
        "tanggal" : timestamp,
    }
}
```
## Update Berita

Endpoint : PUT /api/admin/news/:newId

Header :
- Authorization : token-jwt

Request Body :
```json
{
    "judul_berita" : "lorem ipsum",
    "isi_berita" : "lorem ipsum",
}
```

Response Body :
```json
{
    "data" : {
        "id" : 1,
        "judul_berita" : "lorem ipsum",
        "isi_berita" : "lorem ipsum",
        "tanggal" : timestamp,
    }
}
```

## Delete Berita

Endpoint : DELETE /api/admin/news/:newId

Header :
- Authorization : token-jwt

Response Body :
```json
{
    "message" : "Berita berhasil dihapus"
}
```

## Get Berita
Endpoint : Get /api/admin/news/:newId

Header :
- Authorization : token-jwt

Response Body :
```json
{
    "data" : 
    {
        "id" : 1,
        "judul_berita" : "lorem ipsum",
        "isi_berita" : "lorem ipsum",
        "tanggal" : timestamp,
    }
}
```

## List Berita
Endpoint : Get /api/admin/news/

Header :
- Authorization : token-jwt

Response Body :
```json
{
    "data" : [
        {
            "id" : 1,
            "judul_berita" : "lorem ipsum",
            "isi_berita" : "lorem ipsum",
            "tanggal" : timestamp,
        },
        {
            "id" : 1,
            "judul_berita" : "lorem ipsum",
            "isi_berita" : "lorem ipsum",
            "tanggal" : timestamp,
        },
    ]
}
```
