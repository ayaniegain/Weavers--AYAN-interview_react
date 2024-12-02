function handleClick() {
  let newstring = document.getElementById("text").value;

  if (!newstring && newstring === "") {
    document.getElementById("show").innerText = "should't empty input";
    return;
  }

  let hiiPresentasStr = newstring.slice(0, 4);

  if (hiiPresentasStr == "hii!") {
    document.getElementById("show").innerText = newstring;

    return;
  }

  let strArry = newstring.toLowerCase().split(" ");

  if (strArry[0] == "hii!") {
    newstring.replace("hii!", newstring); 
    document.getElementById("show").innerText = newstring;

    console.log(newstring);
  } else {
    strArry.unshift("hii!");
    console.log(strArry.join(" "));
    document.getElementById("show").innerText = strArry.join(" ");
  }
}

// let strArry= newstring.toLowerCase().split(" ")
// strArry[0]=="hii!" ? strArry.join(" ") : strArry.unshift("hii!")
// console.log(strArry.join(" "))
