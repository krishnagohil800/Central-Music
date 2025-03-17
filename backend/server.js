// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors()); // Allow frontend to communicate with backend

// // Database Connection
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root", // Default MySQL user in XAMPP
//   password: "", // Default XAMPP password is empty
//   database: "login", // Your database name
// });

// // Connect to Database
// db.connect((err) => {
//   if (err) {
//     console.error("Database connection failed:", err);
//   } else {
//     console.log("Connected to MySQL database");
//   }
// });

// // User Login Route
// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   // Query to check user in database
//   const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
//   db.query(sql, [email, password], (err, result) => {
//     if (err) {
//       return res.status(500).json({ success: false, message: "Database error" });
//     }
//     if (result.length > 0) {
//       res.json({ success: true, message: "Login successful!" });
//     } else {
//       res.json({ success: false, message: "Invalid credentials" });
//     }
//   });
// });

// // Start Server
// app.listen(5000, () => {
//   console.log("Server running on http://localhost:5000");
// });



const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "music",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// ✅ Signup Route - Save New Users
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const checkUser = "SELECT * FROM userdata WHERE email = ?";
  db.query(checkUser, [email], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });

    if (result.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const sql = "INSERT INTO userdata (name, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, password], (err, result) => {
      if (err) return res.status(500).json({ message: "Signup failed" });

      res.json({ success: true, message: "Signup successful! You can now log in." });
    });
  });
});

const bcrypt = require("bcrypt");

// ✅ Login Route - Check User
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM userdata WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });

      if (result.length > 0) {
        res.json({ success: true, message: "Login successful!" });
      } else {
        res.json({ success: false, message: "No account found. Redirecting to Signup..." });
      }
    });
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
