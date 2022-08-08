// document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
function myFunction() {
    var x = document.getElementById("myTopnav");
    console.log("iu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


    $("#Threat_Hunting").off('click').on('click', function(){
      console.log("working");
    });
  

