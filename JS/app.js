"use strict";
const item = document.querySelectorAll(".item");
const card = document.querySelectorAll(".card");
const backGround = document.querySelector("#bg");
const closeBtn = document.querySelectorAll(".fa-xmark");
const body = document.getElementById("body");

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", function () {
    card[i].classList.remove("hidden");
    backGround.classList.add("deneme");
    body.style.overflowY = "hidden";
  });
}

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function () {
    for (let j = 0; j < card.length; j++) {
      card[j].classList.add("hidden");
    }
    backGround.classList.remove("deneme");
    body.style.overflowY = "scroll";
  });
}

backGround.addEventListener("click", function () {
  for (let i = 0; i < card.length; i++) {
    card[i].classList.add("hidden");
  }
  backGround.classList.remove("deneme");
  body.style.overflowY = "scroll";
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    for (let i = 0; i < card.length; i++) {
      card[i].classList.add("hidden");
    }
    backGround.classList.remove("deneme");
    body.style.overflowY = "scroll";
  }
});
// for (let i = 0; i < card.length; i++) {
//   card[i].addEventListener("click", function () {
//     card[i].classList.add("hidden");
//     backGround.classList.remove("deneme");
//   });
// }
