const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/", express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.post("/run", (req, res) => {
  let decryptedData = decrypt(req.body.encryptedData);
  let decodedData = new Buffer(decryptedData, "base64")
    .toString("ascii")
    .trim();
  let output;
  try {
    output = eval(decodedData);
  } catch (err) {
    output = err;
  }
  res.render("result", {
    output,
    decodedData,
  });
});

app.listen(3000, () => {
  console.log("Server is Running...");
});

function decrypt(data) {
  let newData = "";
  for (let i = 0; i < data.length; i++) {
    //check lower
    let item = data[i];

    if (data[i] != data[i].toUpperCase() && data[i] === data[i].toLowerCase()) {
      item = data[i].toUpperCase();
    } else if (
      data[i] != data[i].toLowerCase() &&
      data[i] === data[i].toUpperCase()
    ) {
      item = data[i].toLowerCase();
    }
    newData += item;
  }
  return newData;
}
