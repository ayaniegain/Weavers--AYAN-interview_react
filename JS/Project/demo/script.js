function handleClick() {
  let mytext = document.getElementById("fname").value;
  let myage = document.getElementById("age").value;
  let myElement = document.getElementById("demo");
  if (validate()) {
    myElement.innerHTML = `<p>${mytext}</p> <br/> <p>${myage}</p>`;
    console.log(mytext);
  } else {
    alert("Age is not a number!!");
  }
}

function validate() {
  let myage = document.getElementById("age").value;
  if (!isNaN(myage)) {
    return true;
  } else {
    return false;
  }
}
