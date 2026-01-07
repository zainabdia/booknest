import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "booknest",
});

db.connect((err) => {
  if (err) {
    console.log("db connection error:", err);
    return;
  }
  console.log("✅ connected to mysql (booknest)");
});

app.get("/api/books", (req, res) => {
  const search = req.query.q;

  let q = "SELECT id, title, author, price, cover_image_url FROM books";
  let values = [];

  if (search && search.trim() !== "") {
    q += " WHERE title LIKE ? OR author LIKE ?";
    const like = `%${search}%`;
    values = [like, like];
  }

  db.query(q, values, (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "failed to fetch books" });
    }
    return res.json(data);
  });
});

app.get("/api/books/:id", (req, res) => {
  const q = "SELECT id, title, author, price, cover_image_url FROM books WHERE id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json({ error: "failed to fetch book" });
    if (!data.length) return res.status(404).json({ error: "book not found" });
    return res.json(data[0]);
  });
});

app.post("/api/books", (req, res) => {
  const { title, author, price, cover_image_url } = req.body;

  if (!title || !author || price === undefined) {
    return res.status(400).json({ error: "title, author, price are required" });
  }

  const q =
    "INSERT INTO books (title, author, price, cover_image_url) VALUES (?,?,?,?)";

  db.query(q, [title, author, price, cover_image_url || null], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "failed to add book" });
    }
    return res.status(201).json({ ok: true, id: data.insertId });
  });
});

app.post("/api/contact", (req, res) => {
  const { full_name, email, message, user_id } = req.body;

  if (!full_name || !email || !message) {
    return res.status(400).json({ error: "full_name, email, message are required" });
  }

  const q =
    "INSERT INTO contact_messages (full_name, email, message, user_id) VALUES (?,?,?,?)";

  db.query(q, [full_name, email, message, user_id || null], (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "failed to save message" });
    }
    return res.status(201).json({ ok: true, id: data.insertId });
  });
});


app.get("/api/contact", (req, res) => {
  const q =
    "SELECT id, full_name, email, message, created_at FROM contact_messages ORDER BY created_at DESC";
  db.query(q, (err, data) => {
    if (err) return res.status(500).json({ error: "failed to fetch messages" });
    return res.json(data);
  });
});

app.post("/api/signup", (req, res) => {
  const { full_name, email, password } = req.body;

  if (!full_name || !email || !password) {
    return res.status(400).json({ error: "full_name, email, password are required" });
  }

  const q = "INSERT INTO users (full_name, email, password) VALUES (?,?,?)";
  db.query(q, [full_name, email, password], (err, data) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") return res.status(409).json({ error: "email already exists" });
      console.log(err);
      return res.status(500).json({ error: "signup failed" });
    }
    return res.status(201).json({ ok: true, id: data.insertId });
  });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "email and password are required" });
  }

  const q = "SELECT id, full_name, email FROM users WHERE email = ? AND password = ?";
  db.query(q, [email, password], (err, rows) => {
    if (err) return res.status(500).json({ error: "login failed" });
    if (!rows.length) return res.status(401).json({ error: "invalid email or password" });
    return res.json(rows[0]); // frontend stores this in localStorage
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("✅ backend running on http://localhost:5000");
});

