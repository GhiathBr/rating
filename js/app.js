

function one(){
document.getElementById("one").style.backgroundColor="orange";
document.getElementById("two").style.backgroundColor="hsl(216, 12%, 54%)";
document.getElementById("three").style.backgroundColor="hsl(216, 12%, 54%)";
document.getElementById("four").style.backgroundColor="hsl(216, 12%, 54%)";
document.getElementById("five").style.backgroundColor="hsl(216, 12%, 54%)";
document.getElementById("one").style.color="white";

var number=1;

localStorage.setItem("rate",number);
return number;
}
function two(){
    document.getElementById("one").style.backgroundColor="orange";
    document.getElementById("two").style.backgroundColor="orange";
    document.getElementById("three").style.backgroundColor="hsl(216, 12%, 54%)";
    document.getElementById("four").style.backgroundColor="hsl(216, 12%, 54%)";
    document.getElementById("five").style.backgroundColor="hsl(216, 12%, 54%)"; 
    document.getElementById("one").style.color="white";
    document.getElementById("two").style.color="white";

      var number=2;
      localStorage.setItem("rate",number);
      return number;

}
function three(){
    document.getElementById("one").style.backgroundColor="orange";
    document.getElementById("two").style.backgroundColor="orange"
    document.getElementById("three").style.backgroundColor="orange";
    document.getElementById("four").style.backgroundColor="hsl(216, 12%, 54%)";
    document.getElementById("five").style.backgroundColor="hsl(216, 12%, 54%)"; 
    document.getElementById("one").style.color="white";
    document.getElementById("two").style.color="white";
    document.getElementById("three").style.color="white";
      var number=3;
      localStorage.setItem("rate",number);
      return number;

}
function four(){
    document.getElementById("one").style.backgroundColor="orange";
    document.getElementById("two").style.backgroundColor="orange";
    document.getElementById("three").style.backgroundColor="orange";
    document.getElementById("four").style.backgroundColor="orange";
    document.getElementById("five").style.backgroundColor="hsl(216, 12%, 54%)";   
    document.getElementById("one").style.color="white";
    document.getElementById("two").style.color="white";
    document.getElementById("three").style.color="white";
    document.getElementById("four").style.color="white";
    var number=4;
    localStorage.setItem("rate",number);
    return number;

}
function five(){
    document.getElementById("one").style.backgroundColor="orange";
    document.getElementById("two").style.backgroundColor="orange";
    document.getElementById("three").style.backgroundColor="orange";
    document.getElementById("four").style.backgroundColor="orange";
    document.getElementById("five").style.backgroundColor="orange";
    document.getElementById("one").style.color="white";
    document.getElementById("two").style.color="white";
    document.getElementById("three").style.color="white";
    document.getElementById("four").style.color="white";
    document.getElementById("five").style.color="white";
   
    var number=5;
    localStorage.setItem("rate",number);
    return number;
    

}
function thanks(){
    location.href="thankyou.html";

}

