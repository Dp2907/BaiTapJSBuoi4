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

function calcAvgMark(
  _literatureMark,
  _historyMark,
  _geographyMark,
  _englishMark
) {
  var result = (
    (_literatureMark + _historyMark + _geographyMark + _englishMark) /
    4
  ).toFixed(2);
  return result;
}

btnCalcAvgMark.onclick = function () {
  var _literatureMark = Number(literatureMark.value);
  var _historyMark = Number(historyMark.value);
  var _geographyMark = Number(geographyMark.value);
  var _englishMark = Number(englishMark.value);

  if (
    _literatureMark < 0 ||
    _historyMark < 0 ||
    _geographyMark < 0 ||
    _englishMark < 0 ||
    _literatureMark > 10 ||
    _historyMark > 10 ||
    _geographyMark > 10 ||
    _englishMark > 10
  )
    alert("Diem phai nam trong khoang tu 0 den 10, vui long nhap lai");
  else
    alertMark.innerHTML = calcAvgMark(
      _literatureMark,
      _historyMark,
      _geographyMark,
      _englishMark
    );
};
