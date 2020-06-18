let writeus = document.querySelector(".writeus-link");
let writeus_popup = document.querySelector(".writeus");

if (writeus && writeus_popup){
	let writeus_close = writeus_popup.querySelector(".writeus-close");
	let writeus_name = writeus_popup.querySelector("#writeus-name");
	let writeus_email = writeus_popup.querySelector("#writeus-email");
	let writeus_letter = writeus_popup.querySelector("#writeus-letter");
	let writeus_submit = writeus_popup.querySelector(".writeus-submit");
	let writeus_form = writeus_popup.querySelector("form");

	let is_storage_support = true;
	let storage_name = "";
	let storage_email = "";

	try{
		storage_name = localStorage.getItem("name");
		storage_email = localStorage.getItem("email");
	}
	catch{
		is_storage_support = false;
	}

	function action_submit(evt){
		if (!writeus_name.value || !writeus_email.value || !writeus_letter.value){
			evt.preventDefault();
			writeus_popup.classList.remove("modal-error");
			writeus_popup.offsetWidth = writeus_popup.offsetWidth;
			writeus_popup.classList.add("modal-error");
		}
		else if (is_storage_support){
			localStorage.setItem("name",writeus_name.value);
			localStorage.setItem("email",writeus_email.value);
		}
	}

	writeus.addEventListener("click", function(evt){
		evt.preventDefault();
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
	writeus_close.addEventListener("click", function(evt){
		evt.preventDefault();
		writeus_popup.classList.remove("writeus-show");
		writeus_popup.classList.remove("modal-error");
	})
	writeus_submit.addEventListener("click", action_submit);
	writeus_submit.addEventListener("submit", action_submit);
}

let map = document.querySelector(".map");
let map_popup = document.querySelector(".popup-map");

if (map_popup){
	let map_close = map_popup.querySelector(".map-close");
	map.addEventListener("click", function(evt){
		evt.preventDefault();
		map_popup.classList.add("map-show");
	})

	map_close.addEventListener("click", function(evt){
		evt.preventDefault();
		map_popup.classList.remove("map-show");
	})
}

let add_link = document.querySelectorAll(".buy");
let add_popup = document.querySelector(".add-to-cart");

if (add_popup){
	let add_close = add_popup.querySelector(".add-to-cart-close");
	let add_continue = add_popup.querySelector(".continue-shopping");

	add_link.forEach(element => 
		element.addEventListener("click", function(evt){
			evt.preventDefault();
			add_popup.classList.add("add-show");
		})
	);

	add_close.addEventListener("click", function(evt){
		evt.preventDefault();
		add_popup.classList.remove("add-show");
	})

	add_continue.addEventListener("click", function(evt){
		evt.preventDefault();
		add_popup.classList.remove("add-show");
	})
}

let service_control_list = document.querySelectorAll(".services-control .control");
let service_item_list = document.querySelectorAll(".services-items li");

service_control_list.forEach(element => 
	element.addEventListener("click", function(evt){
		evt.preventDefault();
		service_control_list.forEach(element => element.classList.remove("active"));
		service_item_list.forEach(element => element.classList.remove("active"));
		element.classList.add("active");
		document.querySelector("." + element.value).classList.add("active");
	})
);

window.addEventListener("keydown", function(evt){
	if (evt.keyCode === 27){
		if (writeus_popup && writeus_popup.classList.contains("writeus-show")){
			evt.preventDefault();
			writeus_popup.classList.remove("writeus-show");
		}

		if (writeus_popup && map_popup.classList.contains("map-show")){
			evt.preventDefault();
			map_popup.classList.remove("map-show");
		}

		if (add_popup && add_popup.classList.contains("add-show")){
			evt.preventDefault();
			add_popup.classList.remove("add-show");
		}
	}
})

let slider = document.querySelector(".slider");

if (slider){

	let slider_next = slider.querySelector(".slider-next");
	let slider_prev = slider.querySelector(".slider-prev");
	let slider_items = slider.querySelectorAll(".slider li");
	let slider_buttons = slider.querySelectorAll(".slider-buttons button");
	let activeSlide = 1;

	function changeSlide(index){
		slider_buttons[activeSlide].classList.remove("active");
		slider_items[activeSlide].classList.remove("active");
		activeSlide = index;
		slider_buttons[activeSlide].classList.add("active");
		slider_items[activeSlide].classList.add("active");
	}

	slider_buttons.forEach((element, i) => 
		element.addEventListener("click", function(evt){
			evt.preventDefault();
		    if (element.classList.contains("active")){
		      return;
			}
		    changeSlide(i);
		})
	)

	slider_next.addEventListener("click", function(evt){
		evt.preventDefault();
		let nextSlideIndex;
		if (activeSlide + 1 >= slider_buttons.length){
		  nextSlideIndex = 0;
		}
		else{
		  nextSlideIndex = activeSlide + 1;
		}
		changeSlide(nextSlideIndex);
	})

	slider_prev.addEventListener("click", function(evt){
		evt.preventDefault();
		let prevSlideIndex;
		if (activeSlide == 0){
		  prevSlideIndex = slider_buttons.length - 1;
		}
		else{
		  prevSlideIndex = activeSlide - 1;
		}
		changeSlide(prevSlideIndex);
	})
}