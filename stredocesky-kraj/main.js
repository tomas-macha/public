const slides = document.querySelectorAll(".slide");
let slide = 0;

const showSlide = async s => {
	let od = slides[slide];
	slide = s;
	let nw = slides[slide];
	nw.style.opacity = 0;
	od.style.zIndex = 10;
	nw.style.zIndex = 20;
	nw.style.display = "block";
	for(let i = 0; i <= 100; i++){
		nw.style.opacity = i/100;
		await new Promise(r=>setTimeout(r, 2));
	}
	od.style.display = "none";
	nw.style.display = "block";
	loadData(slide);
	loadData(slide+1);
	loadData(slide+2);
	loadData(slide+3);
}

function loadData(idx){
	const ifr = slides[idx].getElementsByTagName("IFRAME");
	for(const i of ifr){
		if(i.hasAttribute("lazy-src")){
			const val = i.getAttribute("lazy-src");
			if(i.src != val)i.src = val;
		}
	}
	const img = slides[idx].getElementsByClassName("bgimg");
	for(const i of img){
		const val = `url(${i.getAttribute("src")})`;
		if(i.style.backgroundImage != val)i.style.backgroundImage = val;
	}
}

const init = ()=>{
	slides.forEach(s => {
		s.addEventListener("click", e => {
			showSlide(slide+1);
		});
	});
	document.addEventListener("keydown", e => {
		switch(e.key){
			case "ArrowLeft":
				showSlide(slide-1);
				break;
			case "ArrowRight":
				showSlide(slide+1);
				break;
		}
	});
	document.querySelectorAll(".bgimg").forEach(e => {
		//e.style.backgroundImage = `url(${e.getAttribute("src")})`;
	});
	start();
};

const start = ()=>{
	showSlide(0);
};
init();
