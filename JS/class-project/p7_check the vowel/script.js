// const handleClick = () => {
//   let getText = document.getElementById("input").value;

//   // let vowel = {"a":0, "e":0, "i":0, "o":0, "u":0}

//   if (!getText && getText === "") {
//     document.getElementById("show").innerHTML = "shoul't blank ";
//     return;
//   }
//   let vowel = ["a", "e", "i", "o", "u"];

//   let a = 0;
//   let e = 0;
//   let i = 0;
//   let o = 0;
//   let u = 0;

//   let textArry = getText.toLowerCase().split("");

//   textArry.map((item) => {
//     for (const vo of vowel) {
//       if (item.toLowerCase() == vo.toLowerCase()) {
//         if (item == "a") {
//           a++;
//         }

//         if (item == "e") {
//           e++;
//         }

//         if (item == "i") {
//           i++;
//         }

//         if (item == "o") {
//           o++;
//         }

//         if (item == "u") {
//           u++;
//         }
//       }
//     }
//   });
//   document.getElementById("show").innerHTML = `

//   Given Text is-- "${getText}" <br>
//   Occurrences of Vowel present:<br>
//   ${a > 0 ? `a: ${a}<br>` : ""}
//   ${e > 0 ? `e: ${e}<br>` : ""}
//   ${i > 0 ? `i: ${i}<br>` : ""}
//   ${o > 0 ? `o: ${o}<br>` : ""}
//   ${u > 0 ? `u: ${u}<br>` : ""}
// `;

//   // a>0?console.log( `a: ${a}`):"";
//   // e>0?console.log( `e: ${e}`):"";
//   // i>0?console.log( `i: ${i}`):"";
//   // o>0?console.log( `o: ${o}`):"";
//   // u>0?console.log( `u: ${u}`):"";
//   document.getElementById("input").value = "";
// };

const handleClick = () => {
  let vowel = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  let getText = document.getElementById("input").value;
  
  if (!getText && getText === "") {
    document.getElementById("show").innerHTML = "shoul't blank ";
    return;
  }

  let textArry = getText.toLowerCase().split("");

  for (const key in vowel) {
    for (const text of textArry) {
      if (text == key) {
        vowel[key]++;
      }
    }
  }

  document.getElementById("show").innerHTML = `
  Given Text is-- "${getText}" <br>
  Occurrences of Vowel present:<br>
  ${vowel['a'] > 0 ? `a: ${vowel['a']} <br>` : ''}
  ${vowel['e'] > 0 ? `e: ${vowel['e']} <br>` : ''}
  ${vowel['i'] > 0 ? `i: ${vowel['i']} <br>` : ''}
  ${vowel['o'] > 0 ? `o: ${vowel['o']} <br>` : ''}
  ${vowel['u'] > 0 ? `u: ${vowel['u']} <br>` : ''}
`;

}
