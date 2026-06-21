Authentication APIs

Signup

POST /api/auth/signup

Request:
{
“name”: “Anmol”,
“email”: “anmol@gmail.com”,
“password”: “123456”
}

Response:
{
“success”: true,
“message”: “User registered successfully”
}

⸻

Login

POST /api/auth/login

Request:
{
“email”: “anmol@gmail.com”,
“password”: “123456”
}

Response:
{
“success”: true,
“token”: “JWT_TOKEN”
}

⸻

Protected Route Example

GET /api/profile

Headers:
Authorization: Bearer JWT_TOKEN

Response:
{
“user”: {}
}
