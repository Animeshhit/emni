let showbtn = document.querySelector(".show-button");
let hidebtn = document.querySelector(".hide-button");
let navul = document.querySelector(".nav-ul");
showbtn.addEventListener("click", () => {
  navul.style.display = "flex";
  showbtn.style.display = "none";
  hidebtn.style.display = "inline-block";
});

hidebtn.addEventListener("click", () => {
  navul.style.display = "none";
  showbtn.style.display = "inline-block";
  hidebtn.style.display = "none";
});
let listitem = document.querySelectorAll(".ula");
listitem.forEach((ula) => {
  ula.addEventListener("click", () => {
    navul.style.display = "none";
    hidebtn.style.display = "none";
    showbtn.style.display = "inline-block";
  });
});
let submit = document.querySelector(".submit");
let name = document.querySelector(".name");
let email = document.querySelector(".email");
let number = document.querySelector(".number");
let dd = document.querySelector(".dd");

submit.addEventListener("click", () => {
  alert("continue your submit?");
});
