const left = document.getElementsByClassName("slider__arrow_prev");
const right = document.getElementsByClassName("slider__arrow_next");
const active = document.getElementsByClassName("slider__item");
let i = 0;
left[0].onclick = () => {
	dot[i].className = "slider__dot";
	active[i].className = "slider__item";
	i == 0 ? i = active.length : i;
	active[--i].className = "slider__item slider__item_active";
	dot[i].className = "slider__dot slider__dot_active";
}
right[0].onclick = () => {
	active[i].className = "slider__item";
	dot[i].className = "slider__dot";
	i == active.length - 1 ? i = -1 : i;
	active[++i].className = "slider__item slider__item_active";
	dot[i].className = "slider__dot slider__dot_active";
}


const dot = document.getElementsByClassName("slider__dot");
for (let j = 0; j < dot.length; j++){
	dot.item(j).onclick = () => {
		dot[i].className = "slider__dot";
		active[i].className = "slider__item";
		dot[j].className = "slider__dot slider__dot_active";
		active[j].className = "slider__item slider__item_active";
		i = j;
		return false;
	}
}

