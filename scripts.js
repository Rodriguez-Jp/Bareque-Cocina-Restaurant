// Hamburger Menu
const navMenuIcon1 = $("#bars-link");
const navMenuIcon2 = $(".fa-grip-lines");
const pageLinkMenu = $("#nav-links");

function mobileMenuClick1() {
    navMenuIcon2.slideDown();
    navMenuIcon1.css("display", "none");
    pageLinkMenu.slideDown();
};
function mobileMenuClick2() {
  navMenuIcon2.css("display", "none");
  navMenuIcon1.slideDown();
  pageLinkMenu.slideUp();
};

function mobileMenuMouseover() {
$(".fa-bars").css("color","#BBA484");
$(".fa-grip-lines").css("color","#BBA484");
};

function mobileMenuMouseleave() {
$(".fa-bars").css("color","#fff");
$(".fa-grip-lines").css("color","#fff");
};
