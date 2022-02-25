console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted.");
}

function complimentAlert(event){
	event.preventDefault();

	alert("Good Boy!");
}


let form = document.querySelector('form#contact');
let image = document.querySelector("img");

image.addEventListener('mouseover', complimentAlert);
form.addEventListener('submit', handleSubmit);