const express = require("express");
const cors = require("cors");
const { json } = require("express/lib/response");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Sabana", email: "Sabana@gmail.com" },
  { id: 2, name: "Sabnoor", email: "Sabnoor@gmail.com" },
  { id: 3, name: "Imran", email: "Imran@gmail.com" },
  { id: 4, name: "Kaisar", email: "Kaisar@gmail.com" },
  { id: 5, name: "Humayun", email: "Humayun@gmail.com" },
  { id: 6, name: "Safia", email: "Safia@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Hello, I am Imran Khan!!!");
});

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((u) => u.name.toLowerCase().includes(search));
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id == userId);
  res.send(user);
});

// app.post("/user", (req, res) => {
//   console.log("request", req.body);
//   const newUser = req.body;
//   newUser.id = users.length + 1;
//   users.push(newUser);
//   res.send(newUser);
// });

app.post("/user", (req, res) => {
  const user = req.body;
  console.log("user", user);
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening", port);
});
