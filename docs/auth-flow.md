# Authentication Flow

## Signup Flow

User enters:
- Name
- Email
- Password

Backend:
1. Validate input
2. Check if email already exists
3. Hash password using bcrypt
4. Store user in database
5. Return success response

---

## Login Flow

User enters:
- Email
- Password

Backend:
1. Find user by email
2. Compare password using bcrypt
3. Generate JWT token
4. Return token and user details

---

## Protected Route Flow

1. User sends JWT token in Authorization header
2. Backend verifies token
3. If token is valid → Allow access
4. If token is invalid → Deny access

---

## Role Based Authorization

Roles:
- User
- Admin

Admin:
- Add Product
- Update Product
- Delete Product

User:
- View Products
- Add to Cart
- Place Orders
