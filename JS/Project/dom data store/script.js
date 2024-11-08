let storeArray=[] ;
let myObj = {};

function handleClick() {
  let name = document.querySelector("#name").value;
  let age = document.querySelector("#age").value;
  let phone = document.querySelector("#phone").value;
  let course = document.querySelector("#course").value;

  if (name === "" || age === "" || phone === "" || course === "") {
    console.log("error");
    return;
  }

  myObj = { name, age, phone, course };

  storeArray.push(myObj);

}

function showTable(){

    console.log(storeArray)

}

function filterAge(){

  let filterAge=storeArray.filter((item)=>item.age>25)

  console.log(filterAge)

}
