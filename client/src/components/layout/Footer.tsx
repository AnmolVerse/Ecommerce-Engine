function Footer() {
return (
    <footer
    style={{
        backgroundColor: "#001540",
        color: "white",
        padding: "40px 30px",
        }}
    >
    <div
        style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "30px",
        }}
>
        {/* ShopVerse */}
        <div>
            <h2>🛒 ShopVerse</h2>
            <p>Smart Shopping Powered by AI</p>
        </div>

        {/* Quick Links */}
        <div>
            <h3>Quick Links</h3>
            <p>Home</p>
            <p>Categories</p>
            <p>Featured Products</p>
            <p>Deals</p>
        </div>

        {/* Customer Support */}
        <div>
            <h3>Support</h3>
            <p>Help Center</p>
            <p>Contact Us</p>
            <p>Returns</p>
            <p>Privacy Policy</p>
        </div>

        {/* Social */}
        <div>
            <h3>Follow Us</h3>
            <p>📘 Facebook</p>
            <p>📷 Instagram</p>
            <p>🐦 Twitter</p>
            <p>💼 LinkedIn</p>
        </div>
    </div>

    <hr
        style={{
            margin: "30px 0",
            borderColor: "#555",
        }}
/>

    <p
        style={{
            textAlign: "center",
        }} >
        © 2026 ShopVerse. All Rights Reserved.
    </p>
    </footer>
);
}

export default Footer;