setInterval(getColor, 1000);

function getColor(){
fetch('https://api.noopschallenge.com/hexbot')
.then((resp) => resp.json())
.then(function(data) {
  console.log(data.colors[0].value);
});
}
