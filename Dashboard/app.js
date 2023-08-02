let timeCverview = document.querySelector('.time-overview');
let timeCverviewList = document.querySelector('.time-overview-list');
let ECommerce = document.querySelector('.e-commerce');
let ECommerceList = document.querySelector('.ECommerce-list');

timeCverview.addEventListener('click', function(e) {
    timeCverviewList.classList.toggle("hidden");
})
ECommerce.addEventListener('click', function(e) {
    ECommerceList.classList.toggle("hidden");
})
module.exports = {
  darkMode: 'class',
  // ...
}

function navbar(){
  document.querySelector(".navbar-1100").style.display = "none";
  document.querySelector(".menu").style.display = "block";
  document.querySelector(".menu").style.zIndex = "1000";
  document.querySelector(".close-window").style.display = "block";
}
function closeWindow(){
  document.querySelector(".menu").style.display = "none";
  document.querySelector(".navbar-1100").style.display = "block";

}