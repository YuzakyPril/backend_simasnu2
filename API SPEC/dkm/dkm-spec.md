# DKM Spec

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
        "usename" : "jhon",
        "password" : "rahasia",
        "confirm_password" : "rahasia",
        "email" : "jhondoe@gmail.com",      
    }
}
```

## Login DKM

Endpoint : POST /api/dkm/login

Request body :
```json
{
    "email" : "jhondoe@gmail.com",
    "password" : "rahasia"
}
```

Response Body :
```json
{
    "token" : "token-jwt"
}
```

## Edit DKM

Endpoint : PUT /api/dkm/current

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
    "no_telp" : "08123456789",
    "surat_keputusan_takmir_masjid" : "base-64"
}
```

Response Body :
```json
{
    "data" : {
        "id" : 1,
        "nama" : "jhon doe",
        "usename" : "jhon",
        "password" : "rahasia",
        "email" : "jhondoe@gmail.com",
        "no_telp" : "08123456789",
        "surat_keputusan_takmir_masjid" : "base-64",
    }
}
```

## Logout admin

Endpoint : DELETE /api/dkm/logout

Header :
- Authorization : token-jwt

Response body : 
```json
{
    "data" : "OK"
}
```

## Get DKM
Endpoint : GET /api/dkm/current

Header :
- Authorization : token-jwt

Response Body :
```json
{
    "data" : {
        "id" : 1,
        "nama" : "jhon doe",
        "usename" : "jhon",
        "password" : "rahasia",
        "email" : "jhondoe@gmail.com",
        "no_telp" : "08123456789",
        "surat_keputusan_takmir_masjid" : "base-64",
    }
}
```

##
# Masjid Spec for DKM
 
## Create Masjid 
 
Endpoint : POST /api/dkm/current/masjid

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

Endpoint : PUT /api/dkm/current/masjid

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

## Get Masjid

Endpoint : GET /api/dkm/current/masjid

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