function open_mobile_menu(){
	var mobile_menu = document.getElementsByClassName('mobile-menu');
	for (var i = 0; i < mobile_menu.length; i++) {
		mobile_menu[i].classList.add("open-mobile-menu");
	}
}