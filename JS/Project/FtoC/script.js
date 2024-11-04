const checkFartoCel = () => {
  let farTemp = document.getElementById("input").value;

  let celTemp = ((+farTemp - 32) * (5 / 9)).toFixed(2);

  console.log(celTemp);

  document.getElementById("result").innerHTML = `${farTemp}°F  as  ${celTemp}°C`;
  document.getElementById("input").value = "";
};

checkCeltoFar = () => {
  let celTemp = document.getElementById("input").value;

  let farTemp = (+celTemp * (9 / 5) + 32).toFixed(2);

  console.log(farTemp);

  document.getElementById("result").innerHTML = `${celTemp}°C as ${farTemp} °F`;
  document.getElementById("input").value = "";
};

