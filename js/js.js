function open_mobile_menu(){
	var mobile_menu = document.getElementsByClassName('mobile-menu-icon');
	for (var i = 0; i < mobile_menu.length; i++) {
		mobile_menu[i].classList.add("display-none");
	}
	var mobile_menu_opened = document.getElementsByClassName('mobile-menu-opened');
	for (var i = 0; i < mobile_menu_opened.length; i++) {
		mobile_menu_opened[i].classList.add("top-0");
	}
	document.body.style.overflow = "hidden";
}

function close_mobile_menu(){
	var mobile_menu = document.getElementsByClassName('mobile-menu-icon');
	for (var i = 0; i < mobile_menu.length; i++) {
		mobile_menu[i].classList.remove("display-none");
	}
	var mobile_menu_opened = document.getElementsByClassName('mobile-menu-opened');
	for (var i = 0; i < mobile_menu_opened.length; i++) {
		mobile_menu_opened[i].classList.remove("top-0");
	}
	document.body.style.overflowX = "hidden";
	document.body.style.overflowY = "auto";
}