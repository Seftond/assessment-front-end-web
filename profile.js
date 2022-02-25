let color = document.querySelector("#color");
let place = document.querySelector("#place");
let ritual = document.querySelector("#ritual");

function showColor(event){
    event.preventDefault();

    alert("Blue");
}
function showPlace(event){
    event.preventDefault();

    alert("Yosemite National Park");
}
function showRitual(event){
    event.preventDefault();

    alert("Holiday Celebrations");
}

color.addEventListener('click', showColor);
place.addEventListener('click', showPlace);
ritual.addEventListener('click', showRitual);
