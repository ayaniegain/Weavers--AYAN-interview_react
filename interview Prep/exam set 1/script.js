const handlePallindrome = () => {
  let text = document.querySelector("#inputval").value;
  let newText = text.split("").reverse().join("");

  if (!text) {
    document.querySelector("#palen").innerHTML = `text should not blank`;
    return;
  }
  if (text.length <= 2) {
    document.querySelector("#palen").innerHTML = `text should be long String`;
    return;
  }

  if (text === newText) {
    document.querySelector(
      "#palen"
    ).innerHTML = `${text}  is a Pallindrome no `;
  } else {
    document.querySelector(
      "#palen"
    ).innerHTML = `${text}  is NOT A pallindrome no `;
  }
};
