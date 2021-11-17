// HAMBURGER MENU //
const navMenuIcon1 = $("#bars-link"); //triple bar menu icon
const navMenuIcon2 = $(".fa-glass-martini-alt"); //double bar menu icon
const pageLinkMenu = $("#nav-links"); //menu links (i.e. Menu, Contact, Home)

//function attached to 'click' event listener for mobile menu dropdown (click event applied in html)
function mobileMenuClick1() {
    navMenuIcon2.slideDown(); //appear double line menu icon
    navMenuIcon1.css("display", "none");//hide triple line menu icon
    pageLinkMenu.slideDown();//slide down menu links from navabr
};
function mobileMenuClick2() {
  navMenuIcon2.css("display", "none");//hide double line menu icon
  navMenuIcon1.slideDown();//appear triple line menu icon
  pageLinkMenu.slideUp();//hide menu links dropdown
};
//function for mouseover event listener for menu icons
function mobileMenuMouseover() {
$(".fa-bars").css("color","#BBA484");
$(".fa-glass-martini-alt").css("color","#BBA484");
};

function mobileMenuMouseleave() {
$(".fa-bars").css("color","#fff");
$(".fa-glass-martini-alt").css("color","#fff");
};
