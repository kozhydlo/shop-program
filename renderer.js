const fs = require("fs");
const path = require("path");

function saveData() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let item = document.getElementById("item").value;
  let price = document.getElementById("price").value;

  let data = `Ім'я: ${name}, Номер телефону: ${phone}, Товар: ${item}, Ціна: ${price}`;

  fs.writeFile(path.join(__dirname, "data.txt"), data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Дані було збережено.");
  });
}
