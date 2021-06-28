# API Documentation

## Response Codes 
### Response Codes
```
200: Success
400: Bad request
401: Unauthorized
50X: Server Error
```

**create:**
```json
POST /api/user/create HTTP/1.1
Content-Type: application/json

{
    "user":{
        "username": "name",
        "password": "p@ssw0rd123"
    }
}
```
**Successful response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
    "user": {
        "id": 1,
        "username": "ruggi",
        "password": "******"
    }
}
```
**Login:**
```json
POST /api/user/login HTTP/1.1
Content-Type: application/json

{
    "user" : 
    {
        "username":"ruggi",
        "password":"p@ssw0rd123"
    }
}
```
**Successful response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json

{
    "user": {
        "token": "b615062b-72e7-4970-afc4-2b5309367fad"
    }
}
```


**Logout:**
```json
POST /api/user/logout HTTP/1.1
Content-Type: application/json
Authorization: {Token}
```

**Successful response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json
Authorization: {Token}
{
    "message": "logout sucess "
}
```

**suma:**
```json
POST /api/operation/suma HTTP/1.1
Content-Type: application/json
Authorization: {Token}
{
    "suma":
        {
            "firstValue": 2,
            "secondValue": 14
        } 
}
```
**Successful response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json
Authorization: {Token}
{
    "message": "the sum of the value 2 plus the value 14 is 16 "
}
```

**Records:**
```json
GET /api/operation/records HTTP/1.1
Content-Type: application/json
Authorization: {Token}

```
**Successful response:**
```json
HTTP/1.1 200 OK
Content-Type: application/json
{
    "operations": [
        {
            "firstValue": 2,
            "secondValue": 11,
            "resultValue": 13,
            "message": " 0) the sum of the value 2 plus the value 11 is 13 ",
            "date": "2021-06-28T18:57:36.808Z"
        },
        {
            "firstValue": 2,
            "secondValue": 13,
            "resultValue": 15,
            "message": " 1) the sum of the value 2 plus the value 13 is 15 ",
            "date": "2021-06-28T18:58:22.973Z"
        }
    ]
}
```