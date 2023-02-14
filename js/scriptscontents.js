const btncatat = document.getElementById("btncatat");
const content1 = document.getElementById("content1");
const formcatat = document.getElementById("formcatat");
const formamplop = document.getElementById("formamplop");
const bntclose1 = document.getElementById("btnclose1");
const bntclose2 = document.getElementById("btnclose2");
btncatat.addEventListener("click", function () {
  if (content1.style.display === "none" || formcatat.style.display === "block") {
    content1.style.display = "block";
    formcatat.style.display = "none";
  } else {
    content1.style.display = "none";
    formcatat.style.display = "block";
  }
});

const btncatat1 = document.getElementById("btncatat1");
btncatat1.addEventListener("click", function () {
  if (content1.style.display === "none" || formamplop.style.display === "block") {
    content1.style.display = "block";
    formamplop.style.display = "none";
  } else {
    content1.style.display = "none";
    formamplop.style.display = "block";
  }
});

const btnclose1 = document.getElementById("btnclose1");
btnclose1.addEventListener("click", function () {
  if (btnclose1.style.display === "none") {
    formcatat.style.display = "block";
    content1.style.display = "none";
  } else {
    formcatat.style.display = "none";
    content1.style.display = "blocK";
  }
});

const btnclose2 = document.getElementById("btnclose2");
btnclose2.addEventListener("click", function () {
  if (btnclose2.style.display === "none") {
    formamplop.style.display = "block";
    content1.style.display = "none";
  } else {
    formamplop.style.display = "none";
    content1.style.display = "blocK";
  }
});

const input = document.getElementById("amount");

input.addEventListener("input", function (event) {
  let value = input.value;
  value = value.replace(/[^0-9]+/g, "");
  input.value = "Rp. " + value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
});

const scriptURL1 = "https://script.google.com/macros/s/AKfycbzKk4pzTMUbF74m7XVpEyygJ42gJqNBqeuExH9m3mmklimta_u6xbeigXkRSLEQVRZn/exec";
const form1 = document.forms["nama-undangan-bods"];

const btnKirim1 = document.querySelector(".iin");
const btnLoading1 = document.querySelector(".loaderbtn");
form1.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoading1.style.display = "block";
  btnKirim1.style.display = "none";
  fetch(scriptURL1, { method: "POST", body: new FormData(form1) })
    .then((response) => {
      btnLoading1.style.display = "none";
      btnKirim1.style.display = "block";

      Swal.fire("YUHUUUUU! BODS", "Data Kamu Telah Tersimpan", "success");
      form1.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

const scriptURL = "https://script.google.com/macros/s/AKfycbzuONqvZHSV1fxZU4HpDg_ZQ5da3TvC0td0FJvpgwDQ6Hj-_JzwnZrSS-8HuUf2kig/exec";
const form2 = document.forms["nama-kondangan"];
const btnKirim = document.querySelector(".iins");
const btnLoading = document.querySelector(".loaderbtn2");
form2.addEventListener("submit", (e) => {
  e.preventDefault();
  btnLoading.style.display = "block";
  btnKirim.style.display = "none";
  fetch(scriptURL, { method: "POST", body: new FormData(form2) })
    .then((response) => {
      btnLoading.style.display = "none";
      btnKirim.style.display = "block";

      Swal.fire("YUHUUUUU!", "Data Kamu Telah Tersimpan", "success");
      form2.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
