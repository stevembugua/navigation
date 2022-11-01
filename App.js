console.log('loaded')
function sayMessage(){
   // var emailVal = document.getElementsByClassName("emailfield");
    const emailVal = document.getElementById("emailfield")

   console.log(emailVal.value)
   document.getElementById("sub").classList.add('sub-error');
   var x = document.getElementById("errorMessage");

   if (x.style.display === "none") {
    x.style.display = "block";
    x.style.color = "red";
  } else {
    x.style.display = "none";
  }
}

const PIE = 3.14;

const getAreaTriangle = (b,h)=>{
            return (0.5*b)*h;
}

const getAreaOfCircle=(Radius)=>{
    return PIE * (Radius*Radius);
}

alert(getAreaOfCircle(14))