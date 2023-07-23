var menuIcon = document.querySelector(".menuIcon");
var sidebar = document.querySelector(".sideBar");
var container = document.querySelector(".container");

menuIcon.onclick =  function(){
	sidebar.classList.toggle("small_sidebar");
	container.classList.toggle("large-container");
}