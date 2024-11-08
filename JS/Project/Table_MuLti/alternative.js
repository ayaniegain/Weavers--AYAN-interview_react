const handleClick = () => {
    let getValue = document.getElementById("input").value;
  
    getValue = +Math.round(Math.abs(getValue));
  
    console.log(getValue);
    if (isNaN(getValue) || getValue === "" || getValue <= 0) {
      document.getElementById("table").innerHTML = "give some value";
  
      return;
    }
  
    document.getElementById("table").innerHTML = "";
  
    for (let i = 0; i <= 10; i++) {
      document.getElementById("heading").innerHTML = `Table of ${getValue}`;
  
      let result = getValue * i;
  
     
      
      document.getElementById("table").innerHTML+=` ${getValue} x ${i} =${result} <br>`
    }
  
    document.getElementById("input").value = "";
  };
  