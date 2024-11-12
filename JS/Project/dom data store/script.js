let storeArray = [];
let currentId = 1;
let showAllButton = false;

let firstname = document.querySelector("#first_name");
let lastname = document.querySelector("#last_name");
let email = document.querySelector("#email");
let age = document.querySelector("#age");
let phone = document.querySelector("#phone");
let school = document.querySelector("#school");
let loadingError = document.getElementById("loading_error");
let tbodyTag = document.querySelector("tbody");
tbodyTag.innerHTML = `<tr><td colspan="8" style="text-align: center;">No data found in table</td></tr>`;

function handleClick() {
  const firstnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const emailValue = email.value.trim();
  const ageValue = age.value.trim();
  const phoneValue = phone.value.trim();
  const schoolValue = school.value;
  const genderValue = document.querySelector(
    'input[name="gender"]:checked'
  )?.value;
  const selectedCheckboxes = document.querySelectorAll(
    '.fourth-div input[type="checkbox"]:checked'
  );
  const course = Array.from(selectedCheckboxes).map(
    (checkbox) => checkbox.value
  );

  loadingError.innerHTML = "";

  let hasError = false;

  if (firstnameValue === "" || firstnameValue.length < 4) {
    loadingError.innerHTML +=
      "* First name should not be blank and must be at least 4 characters.<br>";
    hasError = true;
  }

  if (lastnameValue === "" || lastnameValue.length < 4) {
    loadingError.innerHTML +=
      "* Last name should not be blank and must be at least 4 characters.<br>";
    hasError = true;
  }

  if (emailValue === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
    loadingError.innerHTML += "* Please enter a valid email address.<br>";
    hasError = true;
  }

  if (ageValue === "" || isNaN(ageValue) || ageValue < 18 || ageValue > 100) {
    loadingError.innerHTML +=
      "* Age should be a number between 18 and 100.<br>";
    hasError = true;
  }

  if (phoneValue === "" || !/^\d{10}$/.test(phoneValue)) {
    loadingError.innerHTML += "* Phone number must be 10 digits.<br>";
    hasError = true;
  }

  if (schoolValue === "") {
    loadingError.innerHTML += "* Please select a school.<br>";
    hasError = true;
  }

  if (!genderValue) {
    loadingError.innerHTML += "* Please select your gender.<br>";
    hasError = true;
  }

  if (course.length === 0) {
    loadingError.innerHTML += "* Please select at least one course.<br>";
    hasError = true;
  }

  if (hasError) {
    console.log("Validation failed");
    return;
  }

  let id = currentId;
  currentId++;

  loadingError.innerHTML = "Form submitted successfully!";

  let myObj = {
    id,
    firstname: firstnameValue,
    lastname: lastnameValue,
    email: emailValue,
    age: ageValue,
    phone: phoneValue,
    school: schoolValue,
    gender: genderValue,
    course,
  };

  let duplicateEntry = checkDuplicateEntry(emailValue, phoneValue);

  if (duplicateEntry) {
    loadingError.innerHTML = "Duplicate Email or Phone Present";
    return;
  }

  storeArray.push(myObj);

  disabledBtnFunc();

  //clear form
  firstname.value = "";
  lastname.value = "";
  email.value = "";
  age.value = "";
  phone.value = "";
  school.value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  selectedCheckboxes.forEach((checkbox) => (checkbox.checked = false));

  if (showAllButton) {
    showTable();
  }
}

function checkDuplicateEntry(emailValue, phoneValue) {
  let duplicateEmail = storeArray.some((e) => e.email === emailValue);
  let duplicatePhone = storeArray.some((e) => e.phone === phoneValue);

  return duplicateEmail || duplicatePhone;
}

function showTable(data = storeArray) {
  loadingError.innerHTML = "";
  showAllButton = true;

  disabledBtnFunc();

  if (data.length === 0) {
    tbodyTag.innerHTML = `<tr><td colspan="8" style="text-align: center;">No data found in table</td></tr>`;
    return;
  }

  tbodyTag.innerHTML = "";

  // console.log(data);

  data.forEach((user) => {
    const {
      id,
      firstname,
      lastname,
      email,
      age,
      phone,
      gender,
      school,
      course,
    } = user;

    tbodyTag.innerHTML += `<tr>
      <td>${id}</td>
      <td>${firstname} ${lastname}</td>
      <td>${email}</td>
      <td>${age}</td>
      <td>${phone}</td>
      <td>${gender}</td>
      <td>${school}</td>
      <td>${course.join(", ")}</td>
      </tr>`;
  });
}

function filterAge() {
  let filterAge = storeArray.filter((item) => item.age > 25);
  showTable(filterAge);
}

function sortByAge() {
  let sortByAge = [...storeArray].sort((a, b) => a.age - b.age);
  showTable(sortByAge);
}

function sortByName() {
  const sortedByName = [...storeArray].sort((a, b) =>
    a.fullName.localeCompare(b.fullName)
  );
  showTable(sortedByName);
}

function resetTable() {
  storeArray.length = 0;
  tbodyTag.innerHTML = `<tr><td colspan="8" style="text-align: center;">No data found in table</td></tr>`;
  showAllButton = false;
  disabledBtnFunc();
}

function filterbyName() {
  let inputTextFilter = document
    .getElementById("input-filtered-field")
    .value.toLowerCase();

  const newFilteredList = storeArray.filter(
    (item) =>
      item.firstname.toLowerCase() === inputTextFilter ||
      item.lastname.toLowerCase() === inputTextFilter
  );

  console.log(newFilteredList);

  showTable(newFilteredList);

  document.getElementById("input-filtered-field").value = "";
}

function disabledBtnFunc() {
  let showTable = document.getElementById("show_table");
  let enableBtn1 = document.getElementById("show_btn1");
  let enableBtn2 = document.getElementById("show_btn2");
  let enableBtn3 = document.getElementById("show_btn3");
  let enableBtn4 = document.getElementById("show_btn4");
  let inputFilter = document.getElementById("input-filtered-field");
  let filterBtn = document.getElementById("filter-btn");
  let showBtntn4 = document.getElementById("show_btn4");

  if (storeArray.length >= 1) {
    showTable.disabled = false;
  } else {
    showTable.disabled = true;
  }

  if (showAllButton) {
    enableBtn1.disabled = false;
    enableBtn2.disabled = false;
    enableBtn3.disabled = false;
    enableBtn4.disabled = false;
    inputFilter.disabled = false;
    filterBtn.disabled = false;
    if (showBtntn4) {
      showBtntn4.style.backgroundColor = "red";
      showBtntn4.style.color = "white";
    }
  } else {
    enableBtn1.disabled = true;
    enableBtn2.disabled = true;
    enableBtn3.disabled = true;
    enableBtn4.disabled = true;
    inputFilter.disabled = true;
    filterBtn.disabled = true;
  }
}

let overlay = document.getElementById("backgroundOverlay");
overlay.style.backgroundColor = "black";

overlay.style.opacity = 0;

overlay.style.transition = "opacity 1s ease, background-image 1s ease";

setInterval(() => {
  overlay.style.opacity = 0;

  setTimeout(() => {
    let randomImg = Math.floor(Math.random() * 6) + 1;
    overlay.style.backgroundImage = `url("./img/img${randomImg}.jpg")`;

    overlay.style.opacity = 1;
  }, 1000);
}, 6000);
