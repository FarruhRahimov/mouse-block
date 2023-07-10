let elem = document.querySelector(".mouse");
// console.log(mouse);
let big = document.querySelector(".big");
// console.log(big);
let left = document.querySelector("#left");
// console.log(left);
let right = document.querySelector("#right");
// console.log(right);
let minLeft = document.querySelector("#mbl");
// console.log(minLeft);
let minRight = document.querySelector("#mbr");
// console.log(minRight);

// elem.addEventListener("dragstart", function (event) {
//     // console.log(event.offsetX, event.offsetY);

//     offsetX = event.offsetX;
//     offsetY = event.offsetY;
//   });

//   elem.addEventListener("dragend", function (event) {
//     console.log(event.pageX, event.pageY);

//     elem.style.top = event.pageY - offsetY + "px";
//     elem.style.left = event.pageX - offsetX + "px";
//   });

left.addEventListener("dragover", function (event) {
  event.preventDefault();
});

left.addEventListener("drop", function () {
  this.appendChild(elem);
});

right.addEventListener("dragover", function (event) {
  event.preventDefault();
});

right.addEventListener("drop", function () {
  this.appendChild(elem);
});
