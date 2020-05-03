const jsCode = $("#jsCode");
const encodedData = $("#encodedData");
const encryptedData = $("#encryptedData");

const encodeBtn = $("#encodeBtn");
const encryptBtn = $("#encryptBtn");
const runBtn = $("#runBtn");

const clear1 = $("#clear1");
const clear2 = $("#clear2");
const clear3 = $("#clear3");

function clear() {
  jsCode.text(`let x = 10;\nlet y = 20;\nx+y;`);
  encodedData.text(" ");
  encryptedData.text(" ");
}
clear();

clear1.click(() => {
  jsCode.text(` `);
});
clear2.click(() => {
  encodedData.text(" ");
});
clear3.click(() => {
  encryptedData.text(" ");
});

encodeBtn.click((e) => {
  let data = btoa(jsCode.val());
  encodedData.text(data);
});

encryptBtn.click((e) => {
  let data = encodedData.val();
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
  encryptedData.val(newData);
  document.getElementById("encryptedData").value = newData;
  encryptedData.text(newData);
});
