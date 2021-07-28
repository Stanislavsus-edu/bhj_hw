const left = document.getElementsByClassName("slider__arrow_prev");
const right = document.getElementsByClassName("slider__arrow_next");
const active = document.getElementsByClassName("slider__item");
let i = 0;
left[0].onclick = () => {
	active[i].className = "slider__item";
	i == 0 ? i = 5 : i;
	active[i--].className = "slider__item slider__item_active";
	i--;
}
right[0].onclick = () => {
	active[i].className = "slider__item";
	i == 4 ? i = -1 : i;
	active[i++].className = "slider__item slider__item_active";
	i++;
}