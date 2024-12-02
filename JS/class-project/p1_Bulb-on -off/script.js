// let toggle = false;

// function handleClick() {
//   toggle = !toggle;

//   const textBtn = document.querySelector(".text");

//   if (toggle) {
//     document.querySelector(".onbulb").style.visibility = "visible";
//     document.querySelector(".offbulb").style.visibility = "hidden";
//     textBtn.innerHTML = "OFF";
//   } else {
//     document.querySelector(".onbulb").style.visibility = "hidden";
//     document.querySelector(".offbulb").style.visibility = "visible";
//     textBtn.innerHTML = "ON";
//   }
// }


let toggle = false;

function handleClick() {
  toggle = !toggle;
  const textBtn = document.querySelector(".text");

  if (toggle) {
    document.querySelector(".bulb").src = "./bulb-on.png";
    textBtn.innerHTML = "OFF";
    let elem = document.querySelector(".btn-on");
    elem.classList.add("btn-off");
  } else {
    document.querySelector(".bulb").src = "./blub-off.png";
    let elem = document.querySelector(".btn-on");
    elem.classList.remove("btn-off");
    textBtn.innerHTML = "ON";
  }
}

