const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "My Node.js backend is working!"
  });
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from my own API!",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "Test from my own API!",
    timestamp: new Date().toISOString()
  });
});

app.post("/api/echo", (req, res) => {
  res.json({
    success: true,
    received: req.body
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
