const menu = document.querySelector("#header .menu");

window.addEventListener("scroll", scroll);

function scroll(){
	if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
		menu.classList.add("menu-scroll");
	}else{
		menu.classList.remove("menu-scroll");
	}
}

scroll();
