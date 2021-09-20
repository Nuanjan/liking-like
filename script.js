// var like = document.querySelector("#like");
var count1 = 0,
  count2 = 0,
  count3 = 0;
function increaseLike(el) {
  if (el === like1) {
    count1++;
    like1.innerText = count1;
  } else if (el === like2) {
    count2++;
    like2.innerText = count2;
  } else {
    count3++;
    like3.innerText = count3;
  }
}
