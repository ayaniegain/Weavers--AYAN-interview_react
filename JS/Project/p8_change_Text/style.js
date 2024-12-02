// let textinput = document.querySelector("#textval");


function handleClick() {
  let collectText = document.getElementById("text").value;
  
  // // 1
  
  let fixedtext = "Idiot";
  //      let arr = collectText.split(" ")
  //      arr.pop();
  //      let xy=`${arr.join(' ')} ${fixedtext}`;
  //  const words = collectText.trim().split(" ");
  // // 2

  
  let val = collectText.split(" ");
  
  val[val.length - 1] = fixedtext;
  
  let xx = val.join(" ");

  
   let textinput = document.querySelector("#textval");
  textinput.innerHTML = `${xx}`;

}