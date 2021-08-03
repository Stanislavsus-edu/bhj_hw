let rotaror = document.getElementsByClassName('rotator__case');
let index = 0;
let item = () => {
	if (index != 0){
		rotaror[index-1].classList.remove('rotator__case_active');
	}
	if (index == rotaror.length){
		index = 0;
	}

	rotaror[index].setAttribute('style', `color: ${rotaror[index].dataset.color}`);


	rotaror[index].classList.add('rotator__case_active');
	index++;
}
setInterval(item, rotaror[index].dataset.speed)