const tab = document.getElementsByClassName('tab');
const content = document.getElementsByClassName('tab__content');


let remov = (i) => {
	tab[i].classList.remove('tab_active');
	content[i].classList.remove('tab__content_active');
}
let j = 0;


for (let i =0; i<tab.length; i++){
	tab[i].onclick = () => {
		remov(j);
		tab[i].classList.toggle('tab_active');
		content[i].classList.toggle('tab__content_active');
		j = i;
	}
}
