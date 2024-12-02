function handleClick() {
  let getValue = document.getElementById("textinp").value;

  if (!getValue && getValue === "") {
    document.getElementById("show").innerHTML = "shoud't blank";
    return;
  }

  if (getValue.length < 3) {
    document.getElementById("show").innerHTML = getValue;
  } else {
    let first = getValue.substring(0, 3);
    let last = getValue.substring(getValue.length, getValue.length - 3);
    let res = first + last;
    console.log(res);
    document.getElementById("show").innerHTML = res;
  }
}
