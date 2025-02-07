`use strict`;
/* #завдання */
/*
/*
Завдання 5
Додайде слухач кліку і визначте, коли клік відбувається
всередині елемента з id "place" і коли клік припадає поза зоною елемента
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/
document.addEventListener("click", function (event) {
  const place = document.getElementById("place");
  if (place.contains(event.target)) {
    console.log("Клік всередині елемента #place");
  } else {
    console.log("Клік поза елементом #place");
  }
});
