function handelClick() {
  let input = document.getElementById("input").value;

  if (input === "" || input < 0) {
    document.getElementById("result").innerHTML =
      "Please enter a valid positive number";
    return;
  }

  if (+input % 2 == 0) {
    document.getElementById("result").innerHTML = "EVEN";
  } else {
    document.getElementById("result").innerHTML = "ODD";
  }

  document.getElementById("input").value = "";
}
