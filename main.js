window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
	// console.log("rohit");
  if (window.pageYOffset >= sticky) {
  	 document.getElementById("2").classList.add("b--0");
    header.classList.add("sticky");
   
  } else {
  	document.getElementById("2").classList.remove("b--0");
    header.classList.remove("sticky");
    

  }
}