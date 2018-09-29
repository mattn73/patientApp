

$('.hamburger').click(function () {
  $(this).toggleClass('responsive');
});



$(document).ready(function () {
  var link = document.createElement("link");
  link.href = "assets/css/style.css";
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);

});

