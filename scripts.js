setInterval(getColor, 150);
var one = document.getElementsByClassName("one");
var two = document.getElementsByClassName("two");
var three = document.getElementsByClassName("three");
var four = document.getElementsByClassName("four");
var five = document.getElementsByClassName("five");
var six = document.getElementsByClassName("six");
var seven = document.getElementsByClassName("seven");
var eight = document.getElementsByClassName("eight");
var nine = document.getElementsByClassName("nine");
var ten = document.getElementsByClassName("ten");

var color1;
var color2;
var color3;
var color4;
var color5;
var color6;
var color7;
var color8;
var color9;
var color10;

function getColor(){
fetch('https://api.noopschallenge.com/hexbot')
.then((resp) => resp.json())
.then(function(data) {
  color = data.colors[0].value;
  one[0].style.backgroundColor = color;

  colorPush(color);
  doColors();
});
}

function colorPush(x) {
    color10 = color9;
    color9 = color8;
    color8 = color7;
    color7 = color6;
    color6 = color5;
    color5 = color4;
    color4 = color3;
    color3 = color2;
    color2 = color1;
    color1 = x;
}

function doColors() {
  one[0].style.backgroundColor = color1;
  two[0].style.backgroundColor = color2;
  three[0].style.backgroundColor = color3;
  four[0].style.backgroundColor = color4;
  five[0].style.backgroundColor = color5;
  six[0].style.backgroundColor =  color6;
  seven[0].style.backgroundColor =  color7;
  eight[0].style.backgroundColor =  color8;
  nine[0].style.backgroundColor =  color9;
  ten[0].style.backgroundColor =  color10;
}
