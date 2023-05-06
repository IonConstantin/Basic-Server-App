import express from "express";
import path from "path";

const __dirname = path.resolve();
const __filename = path.resolve();
const app = express();
const PORT = 5500;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname +"/public/index.html"));
});

app.get("/about", (req, res) => {
  const data = {
    name: "My Basic App",
    version: "1.0.0",
    author: "Constantin",
  };
  res.json(data);
});

app.post("/", (req, res) => {
  const { username, password } = req.body;
  console.log(req.body)
  if (username === "ion" && password === "123456") {
    res.send(`Welcome, ${username}!`);
  } else {
    res.send("Login failed");
  }
});
app.get("/contact", (req, res) => {
  res.json(`The absolute path to server.js is: ${__filename}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
