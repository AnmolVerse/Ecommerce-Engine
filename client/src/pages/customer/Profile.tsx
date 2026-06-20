import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { useCart } from "../../context/CartContext";
import { useOrders } from "../../context/OrderContext";
import { useWishlist } from "../../context/WishlistContext";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {

    const navigate = useNavigate();
    const recentlyViewed =
  JSON.parse(
    localStorage.getItem("recentlyViewed") || "[]"
  );
   const { orders } = useOrders();
   const totalSpent = orders.reduce(
  (sum, order) => sum + order.price * order.quantity,
  0
);
//     const latestOrder =
//   orders.length > 0
//     ? orders[orders.length - 1]
//     : null;
    const [isEditing, setIsEditing] = useState(false);
const [profileImage, setProfileImage] = useState(
  localStorage.getItem("profileImage") || ""
);
const handleImageUpload = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    const image = reader.result as string;

    setProfileImage(image);

    localStorage.setItem(
      "profileImage",
      image
    );
  };

  reader.readAsDataURL(file);
};
const [name, setName] = useState(
  localStorage.getItem("profileName") ||
    "Kritika Bendwar"
);

const [email, setEmail] = useState(
  localStorage.getItem("profileEmail") ||
    "kritika@gmail.com"
);

const [phone, setPhone] = useState(
  localStorage.getItem("profilePhone") ||
    "9876543210"
);
useEffect(() => {
  localStorage.setItem("profileName", name);
  localStorage.setItem("profileEmail", email);
  localStorage.setItem("profilePhone", phone);
}, [name, email, phone]);
  const { cartItems } = useCart();
//   const { orders } = useOrders();
const { wishlistItems } = useWishlist();
const [isEditingAddress, setIsEditingAddress] =
  useState(false);

const [address, setAddress] = useState(
  localStorage.getItem("profileAddress") ||
    "Lokhande Layout, Godhani Railway"
);

const [city, setCity] = useState(
  localStorage.getItem("profileCity") ||
    "Nagpur"
);

const [pincode, setPincode] = useState(
  localStorage.getItem("profilePincode") ||
    "441111"
);
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "40px",
          minHeight: "70vh",
        }}
      >
        <h1 style={{fontSize:"22px",}}>👤 My Profile</h1>

        {/* Top Cards */}
        <div
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* Personal Info */}
          <div
            style={{
              flex: 1,
              minWidth: "300px",
              backgroundColor: "white",
              padding: "25px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              fontSize:"18px",
            }}
          >
<div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  }}

>
  <img
    src={
      profileImage ||
      "https://via.placeholder.com/120"
    }
    alt="Profile"
style={{
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "3px solid #ff9900",
}}
  />

  <input
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
 style={{
  marginTop: "15px",
  width: "220px",
}}
  />
</div>
            <h2 style={{fontSize:"20px",
                fontWeight:"bolder",
            }}>Personal Information</h2>

{isEditing ? (
  <>
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      style={inputStyle}
    />

    <input
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={inputStyle}
    />

    <input
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      style={inputStyle}
    />
  </>
) : (
  <>
    <p><strong>Name:</strong> {name}</p>
    <p><strong>Email:</strong> {email}</p>
    <p><strong>Phone:</strong> {phone}</p>
  </>
)}

<button
  onClick={() => setIsEditing(!isEditing)}
  style={{
    marginTop: "15px",
    padding: "10px 20px",
    backgroundColor: "#d3540a",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  {isEditing ? "Save Profile" : "Edit Profile"}
</button>
          </div>

    {/* Address Card */}
<div
  style={{
    flex: 1,
    minWidth: "300px",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  }}
>
  <h2  style={{fontSize:"20px",
                fontWeight:"bolder",
            }}>📍 Address</h2>

  {isEditingAddress ? (
    <>
      <input
        type="text"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
        placeholder="Address"
        style={inputStyle}
      />

      <input
        type="text"
        value={city}
        onChange={(e) =>
          setCity(e.target.value)
        }
        placeholder="City"
        style={inputStyle}
      />

      <input
        type="text"
        value={pincode}
        onChange={(e) =>
          setPincode(e.target.value)
        }
        placeholder="Pincode"
        style={inputStyle}
      />

      <button
        onClick={() =>
          setIsEditingAddress(false)
        }
        style={buttonStyle}
      >
        Save Address
      </button>
    </>
  ) : (
    <>
      <p>{address}</p>
      <p>{city}</p>
      <p>{pincode}</p>

      <button
        onClick={() =>
          setIsEditingAddress(true)
        }
        style={buttonStyle}
      >
        Edit Address
      </button>
    </>
  )}
</div>
        </div>

        {/* Statistics Cards */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: 1,
              minWidth: "220px",
              backgroundColor: "#dcfb88",
              padding: "25px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              fontSize:"18px",
            }}
          >
<h2>📦</h2>
<h3>Total Orders</h3>
<h1>{orders.length}</h1>

<button
  onClick={() => navigate("/orders")}
  style={buttonStyle}
>
  View Orders
</button>
          </div>

          <div
            style={{
              flex: 1,
              minWidth: "220px",
              backgroundColor: "#dcfb88",
              padding: "25px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              fontSize:"18px",
            }}
          >
           <h2>❤️</h2>
<h3>Wishlist</h3>
<h1>{wishlistItems.length}</h1>

<button
  onClick={() => navigate("/wishlist")}
  style={buttonStyle}
>
  View Wishlist
</button>       </div>

          <div
            style={{
              flex: 1,
              minWidth: "220px",
              backgroundColor: "#dcfb88",
              padding: "25px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
               fontSize:"18px",
            }}
          >
           <h2>🛒</h2>
<h3>Cart Items</h3>
<h1>{cartItems.length}</h1>

<button
  onClick={() => navigate("/cart")}
  style={buttonStyle}
>
  View Cart
</button>
          </div>
        </div>


<div
  style={{
    flex: 1,
    minWidth: "220px",
    backgroundColor: "#ace50f",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    fontSize:"20px",
    fontWeight:"bolder",
  }}
>
  <h2>💰</h2>
  <h3>Total Spent</h3>
  <h1>₹{totalSpent}</h1>
</div>

        {/* Recent Orders */}
        <div
          style={{
            marginTop: "30px",
            backgroundColor: "white",
            padding: "25px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            fontSize:"18px",
          }}
        >
          <h2>📦 Recent Orders</h2>

          {orders.length === 0 ? (
            <p>No Orders Yet</p>
          ) : (
            [...orders]
              .reverse()
              .slice(0, 3)
              .map((order, index) => (
                <div
                  key={`${order.id}-${index}`}
                  style={{
                    padding: "12px 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <strong>{order.name}</strong>

                 <div
  style={{
    display: "inline-block",
    backgroundColor: "#fff3cd",
    color: "#856404",
    padding: "5px 10px",
    borderRadius: "20px",
    fontSize: "14px",
    marginTop: "5px",
  }}
>
  🚚 Processing
</div>
                </div>
              ))
          )}
        </div>
<div
  style={{
    marginTop: "30px",
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  }}
>
  <h2>👀 Recently Viewed Products</h2>

  {recentlyViewed.length > 0 ? (
    recentlyViewed.map((item: any) => (
      <div
        key={item.id}
        style={{
          padding: "10px 0",
          borderBottom: "1px solid #eee",
        }}
      >
        <strong>{item.name}</strong>

        <p>₹{item.price}</p>
      </div>
    ))
  ) : (
    <p>No products viewed yet</p>
  )}
</div>

        {/* Logout */}
        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <button
onClick={() => {
  localStorage.clear();
  localStorage.removeItem("isLoggedIn");
  navigate("/login");
}}
            style={{
              backgroundColor: "#dc3545",
              color: "white",
              border: "none",
              padding: "12px 30px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            🚪 Logout
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  marginBottom: "10px",
  border: "1px solid #ccc",
  borderRadius: "6px",
};
const buttonStyle = {
  marginTop: "15px",
  padding: "10px 20px",
  backgroundColor: "#d3540a",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default Profile;