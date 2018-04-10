window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
	// console.log("rohit");
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
    document.getElementById("2").classList.add("b--0");
  } else {
    header.classList.remove("sticky");
    document.getElementById("2").classList.remove("b--0");

  }
}