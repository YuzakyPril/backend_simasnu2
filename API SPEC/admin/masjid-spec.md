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

Endpoint : PATCH /api/admin/masjids/:masjidId/status/:status

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