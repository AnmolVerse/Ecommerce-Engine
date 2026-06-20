import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [showForgot, setShowForgot] =
  useState(false);

const [resetEmail, setResetEmail] =
  useState("");
  const navigate = useNavigate();
const [showPassword, setShowPassword] =
  useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = () => {
  const savedEmail =
    localStorage.getItem("userEmail");

  const savedPassword =
    localStorage.getItem("userPassword");

  if (
    email === savedEmail &&
    password === savedPassword
  ) {
    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    alert("Login Successful");

    navigate("/");
  } else {
    alert("Invalid Email or Password");
  }
};

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "400px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={inputStyle}
        />

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={inputStyle}
        />
        <button
  onClick={() =>
    setShowPassword(!showPassword)
  }
>
  {showPassword
    ? "Hide Password"
    : "Show Password"}
</button>
        <button
          onClick={handleLogin}
          style={buttonStyle}
        >
          Login
        </button>
<p
  style={{
    textAlign: "center",
    cursor: "pointer",
    color: "#ff9900",
    marginTop: "10px",
  }}
  onClick={() =>
    setShowForgot(!showForgot)
  }
>
  Forgot Password?
</p>
{showForgot && (
  <div
    style={{
      marginTop: "15px",
    }}
  >
    <input
      type="email"
      placeholder="Enter Registered Email"
      value={resetEmail}
      onChange={(e) =>
        setResetEmail(e.target.value)
      }
      style={inputStyle}
    />

    <button
      style={{
        width: "100%",
        padding: "10px",
        backgroundColor: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      onClick={() => {
        const savedEmail =
          localStorage.getItem("userEmail");

        const savedPassword =
          localStorage.getItem("userPassword");

        if (resetEmail === savedEmail) {
          alert(
            `Your Password is: ${savedPassword}`
          );
        } else {
          alert("Email Not Found");
        }
      }}
    >
      Recover Password
    </button>
  </div>
)}
        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          Don't have an account?{" "}
          <Link to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "20px",
  backgroundColor: "#ff9900",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Login;