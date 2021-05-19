// Bai 1

var colorCar = document.getElementById("colorCar");
var btnRedCar = document.getElementById("btnRedCar");
var btnSilverCar = document.getElementById("btnSilverCar");
var btnBlackCar = document.getElementById("btnBlackCar");
var btnSteelCar = document.getElementById("btnSteelCar");

btnBlackCar.onclick = function () {
  colorCar.src = "./images/black-car.jpg";
};
btnRedCar.onclick = function () {
  colorCar.src = "./images/red-car.jpg";
};
btnSilverCar.onclick = function () {
  colorCar.src = "./images/silver-car.jpg";
};
btnSteelCar.onclick = function () {
  colorCar.src = "./images/steel-car.jpg";
};

// Bai 2

var btnCalcAvgMark = document.getElementById("btnCalcAvgMark");
var literatureMark = document.getElementById("literatureMark");
var historyMark = document.getElementById("historyMark");
var geographyMark = document.getElementById("geographyMark");
var englishMark = document.getElementById("englishMark");
var alertMark = document.getElementById("alertMark");

btnCalcAvgMark.onclick = function () {
  var _literatureMark = Number(literatureMark.value);
  var _historyMark = Number(historyMark.value);
  var _geographyMark = Number(geographyMark.value);
  var _englishMark = Number(englishMark.value);
  var result = (
    (_literatureMark +
      _historyMark +
      _geographyMark +
      _englishMark +
      _englishMark) /
    5
  ).toFixed(2);
  alertMark.innerHTML = result;
};
