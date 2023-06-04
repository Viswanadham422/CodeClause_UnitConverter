// Weight Converter
document.getElementById('gram').addEventListener('input', function () {
  var gram = parseFloat(document.getElementById('gram').value);
  document.getElementById('weight-result').textContent = "Result: " + gram / 1000 + " Kilogram(s) and " + gram / 453.592 + " Pound(s)";
});

document.getElementById('kilogram').addEventListener('input', function () {
  var kilogram = parseFloat(document.getElementById('kilogram').value);
  document.getElementById('weight-result').textContent = "Result: " + kilogram * 1000 + " Gram(s) and " + kilogram * 2.20462 + " Pound(s)";
});

document.getElementById('pound').addEventListener('input', function () {
  var pound = parseFloat(document.getElementById('pound').value);
  document.getElementById('weight-result').textContent = "Result: " + pound * 453.592 + " Gram(s) and " + pound / 2.20462 + " Kilogram(s)";
});


// Length Converter
document.getElementById('mm').addEventListener('input', function () {
  var mm = parseFloat(document.getElementById('mm').value);
  document.getElementById('length-result').textContent = "Result: " + mm / 10 + " Centimeter(s) and " + mm / 1000 + " Meter(s)";
});

document.getElementById('cm').addEventListener('input', function () {
  var cm = parseFloat(document.getElementById('cm').value);
  document.getElementById('length-result').textContent = "Result: " + cm * 10 + " Millimeter(s) and " + cm / 100 + " Meter(s)";
});

document.getElementById('m').addEventListener('input', function () {
  var m = parseFloat(document.getElementById('m').value);
  document.getElementById('length-result').textContent = "Result: " + m * 1000 + " Millimeter(s) and " + m * 100 + " Centimeter(s)";
});


// Temperature Converter
document.getElementById('celsius').addEventListener('input', function () {
  var celsius = parseFloat(document.getElementById('celsius').value);
  document.getElementById('temperature-result').textContent = "Result: " + ((celsius * 9/5) + 32) + " Fahrenheit and " + (celsius + 273.15) + " Kelvin";
});

document.getElementById('fahrenheit').addEventListener('input', function () {
  var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
  document.getElementById('temperature-result').textContent = "Result: " + ((fahrenheit - 32) * 5/9) + " Celsius and " + (((fahrenheit - 32) * 5/9) + 273.15) + " Kelvin";
});

document.getElementById('kelvin').addEventListener('input', function () {
  var kelvin = parseFloat(document.getElementById('kelvin').value);
  document.getElementById('temperature-result').textContent = "Result: " + (kelvin - 273.15) + " Celsius and " + ((kelvin - 273.15) * 9/5 + 32) + " Fahrenheit";
});


// Time Converter
document.getElementById('second').addEventListener('input', function () {
  var second = parseFloat(document.getElementById('second').value);
  document.getElementById('time-result').textContent = "Result: " + second / 60 + " Minute(s) and " + second / 3600 + " Hour(s)";
});

document.getElementById('minute').addEventListener('input', function () {
  var minute = parseFloat(document.getElementById('minute').value);
  document.getElementById('time-result').textContent = "Result: " + minute * 60 + " Second(s) and " + minute / 60 + " Hour(s)";
});

document.getElementById('hour').addEventListener('input', function () {
  var hour = parseFloat(document.getElementById('hour').value);
  document.getElementById('time-result').textContent = "Result: " + hour * 3600 + " Second(s) and " + hour * 60 + " Minute(s)";
});
