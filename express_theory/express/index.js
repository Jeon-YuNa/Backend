fetch("http://localhost:3000/boardgame", {
  method: "post",
  headers: {
    "Content-Type": "text/plain",
  },
  body: "젬블로",
})
  .then((v) => v.json())
  .then((v) => console.log(v));
