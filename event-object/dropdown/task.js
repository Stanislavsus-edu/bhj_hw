const list = document.getElementsByClassName('dropdown__list');
const dropdown = document.getElementsByClassName('dropdown');
const item = document.getElementsByClassName('dropdown__item');
const value = document.getElementsByClassName('dropdown__value');


dropdown[0].addEventListener('click', function () {
	list[0].classList.toggle('dropdown__list_active');
});


for (let i = 0; i<item.length; i++){
	item[i].onclick = () => {
		value[0].textContent = item[i].textContent;
		list.className = 'dropdown__list';
		return false;
	}
}
