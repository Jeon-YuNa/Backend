fetch("http://localhost:3000/dog", {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "바보",
    age: 1,
    species: "말티즈",
    gender: "female",
  }),
})
  .then((v) => v.json())
  .then((v) => console.log(v));
