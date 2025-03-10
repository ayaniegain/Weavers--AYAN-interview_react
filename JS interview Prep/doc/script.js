
function handleClick() {

    let text=document.getElementById("input").value

    if (text =="" ) {
        document.getElementById("text").innerText="invalid"
        return;
    }
    // document.getElementById("text").style.color="red"
    
    let xc= document.getElementById("text").classList[0]
    document.querySelector(`.${xc}`).style.color="green"
    document.getElementById("text").innerHTML=text


   console.log(xc)

    
}