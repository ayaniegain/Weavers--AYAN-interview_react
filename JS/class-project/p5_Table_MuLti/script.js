const handleClick = () => {
  let getValue = document.getElementById("input").value;

  getValue = +Math.round(Math.abs(getValue));

  console.log(getValue);
  if (isNaN(getValue) || getValue === "" || getValue <= 0) {
    document.getElementById("table").innerHTML = "Give proper Input";
    document.getElementById("table").style.fontSize = "30px";
    document.getElementById("heading").innerHTML = ``;

    return;
  }

  document.getElementById("table").innerHTML = "";

  for (let i = 0; i <= 10; i++) {
    document.getElementById("heading").innerHTML = `Table of ${getValue}`;

    let result = getValue * i;

    let node = document.createElement("li");
    let textNode = document.createTextNode(`${getValue} x ${i} =${result}`);
    node.appendChild(textNode);

    document.getElementById("table").appendChild(node);

    // document.getElementById("table").innerHTML+=` ${getValue} x ${i} =${result} <br>`
  }

  document.getElementById("input").value = "";
};

// Practice-----

// let pTag=document.createElement('p')
// let pText=document.createTextNode('this is p tag')

// pTag.appendChild(pText)
// // pTag.createAttribute('.col')

// document.getElementById('aside').appendChild(pTag)
// document.getElementById('aside').style.color='red'
