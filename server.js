const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(__dirname + "/public"));

app.post("/run", (req, res) => {
  res.send(req.body.encryptedData);
  console.log(req.body.encryptedData);
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("Server is Running...");
});
