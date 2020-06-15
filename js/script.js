var writeus = document.querySelector(".writeus-link");
var writeus_popup = document.querySelector(".writeus");
var writeus_close = document.querySelector(".writeus-close");

var writeus_name = document.querySelector("#writeus-name");
var writeus_email = document.querySelector("#writeus-email");
var writeus_letter = document.querySelector("#writeus-letter");
var writeus_submit = document.querySelector(".writeus-submit");

var is_storage_support = true;
var storage_name = "";
var storage_email = "";

try{
	storage_name = localStorage.getItem("name");
	storage_email = localStorage.getItem("email");
}
catch{
	is_storage_support = false;
}

try{
	writeus.addEventListener("click", function(e){
		e.preventDefault();
		writeus_popup.classList.add("writeus-show");

		if (storage_name && storage_email){
			writeus_name.value = storage_name;
			writeus_email.value = storage_email;
			writeus_letter.focus();
		}
		else if (storage_name){
			writeus_name = storage_name;
			writeus_email.focus();
		}
		else{
			writeus_name.focus();
		}		
	})

	writeus_close.addEventListener("click", function(e){
		e.preventDefault();
		writeus_popup.classList.remove("writeus-show");
		writeus_popup.classList.remove("modal-error");
	})

	writeus_submit.addEventListener("click", function(e){
		if (!writeus_name.value || !writeus_email.value || !writeus_letter.value){
			e.preventDefault();
			writeus_popup.classList.remove("modal-error");
			writeus_popup.offsetWidth = writeus_popup.offsetWidth;
			writeus_popup.classList.add("modal-error");
		}
		else if (is_storage_support){
			localStorage.setItem("name",writeus_name.value);
			localStorage.setItem("email",writeus_email.value);
		}

	})
}catch{}


var map = document.querySelector(".map");
var map_popup = document.querySelector(".popup-map");
var map_close = document.querySelector(".map-close");

try{
	map.addEventListener("click", function(e){
		e.preventDefault();
		map_popup.classList.add("map-show");
	})

	map_close.addEventListener("click", function(e){
		e.preventDefault();
		map_popup.classList.remove("map-show");
	})
}catch{}


var add_link = document.querySelectorAll(".buy");
var add_popup = document.querySelector(".add-to-cart");
var add_close = document.querySelector(".add-to-cart-close");
var add_continue = document.querySelector(".continue-shopping");

try{

	add_link.forEach(element => 
		element.addEventListener("click", function(e){
			e.preventDefault();
			add_popup.classList.add("add-show");
		})
	);

	add_close.addEventListener("click", function(e){
		e.preventDefault();
		add_popup.classList.remove("add-show");
	})

	add_continue.addEventListener("click", function(e){
		e.preventDefault();
		add_popup.classList.remove("add-show");
	})
}catch{}

var service_control_list = document.querySelectorAll(".services-control .control");
var service_item_list = document.querySelectorAll(".services-items li");

service_control_list.forEach(element => 
	element.addEventListener("click", function(e){
		e.preventDefault();
		service_control_list.forEach(element => element.classList.remove("active"));
		service_item_list.forEach(element => element.classList.remove("active"));
		element.classList.add("active");
		document.querySelector("." + element.value).classList.add("active");
	})
);


window.addEventListener("keydown", function(e){
	if (e.keyCode === 27) {
		if (writeus_popup && writeus_popup.classList.contains("writeus-show")) {
			e.preventDefault();
			writeus_popup.classList.remove("writeus-show");
		}

		if (writeus_popup && map_popup.classList.contains("map-show")) {
			e.preventDefault();
			map_popup.classList.remove("map-show");
		}

		if (add_popup && add_popup.classList.contains("add-show")) {
			e.preventDefault();
			add_popup.classList.remove("add-show");
		}
	}
})

var slider_next = document.querySelector(".slider-next");
var slider_prev = document.querySelector(".slider-prev");

var slider_items = document.querySelectorAll(".slider li");
var slider_buttons = document.querySelectorAll(".slider-buttons button");

slider_buttons.forEach(element => 
	element.addEventListener("click", function(e){
		e.preventDefault();

		for (var i = 0; i < slider_items.length; i++) {
			slider_items[i].classList.remove("active");
		}
		for (var i = 0; i < slider_buttons.length; i++) {
			slider_buttons[i].classList.remove("active");
		}

		slider_items[element.value].classList.add("active");
		slider_buttons[element.value].classList.add("active");
	})
)

slider_next.addEventListener("click", function(e) {
	e.preventDefault();
	for (var i = 0; i < slider_items.length; i++) {
		if (slider_items[i].classList.contains("active")){
			slider_items[i].classList.remove("active");
			slider_buttons[i].classList.remove("active");

			if (++i == slider_items.length) i = 0;
			slider_items[i].classList.add("active");
			slider_buttons[i].classList.add("active");
		}
	}
})

slider_prev.addEventListener("click", function(e) {
	e.preventDefault();
	for (var i = 0; i < slider_items.length; i++) {
		if (slider_items[i].classList.contains("active")){
			slider_items[i].classList.remove("active");
			slider_buttons[i].classList.remove("active");

			if (--i < 0) i = slider_items.length - 1;
			slider_items[i].classList.add("active");
			slider_buttons[i].classList.add("active");
		}
	}
})