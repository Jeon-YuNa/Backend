const express = require("express");
const app = express();
const port = 3000;
app.use(express.text());

app.get("/coffee", (req, res) => {
  res.send("it 커피");
});

app.get("/cookie", (req, res) => {
  res.json({ name: "포로쿠키", hp: 300 });
});

app.get("/bread", (req, res) => {
  const { size, count } = req.query;
  res.json({ size, count, breadName: "식빵" });
});

app.post("/jelly", (req, res) => {
  console.log(req.body);
  res.json({ test: true });
});

app.post("/boardgame", (req, res) => {
  const boardgame = req.body;
  console.log(`${boardgame} 꿀잼`);
  res.json({ name: `${boardgame} 꿀잼` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
