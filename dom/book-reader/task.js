let font_size = document.getElementsByClassName('font_size');
let book = document.getElementById('book');
let j = 1;
for (let i = 0; i < font_size.length; i++){
	font_size[i].onclick = () =>{
		//let j = font_size.indexOf('font_size_active'); Чет не работает
		remove_active(j);
		remove_size(j);
		font_size[i].classList.add('font_size_active');
		font_size[i].dataset.size != null ? book.classList.add(`book_fs-${font_size[i].dataset.size}`) : 0; 
		j = i;
		return false;
	}
}

let remove_size = (index) => {
	book.classList.remove(`book_fs-${font_size[index].dataset.size}`); 
}  

let remove_color = (index) => {
	book.classList.remove(`book_color-${color[index].dataset.textColor}`); 
}  

let remove_bc = (index) => {
	book.classList.remove(`book_bg-${color[index].dataset.bgColor}`); 
}  

let remove_active = (index) =>{
	font_size[index].classList.remove('font_size_active');
}

let remove_active_2 = (index) =>{
	color[index].classList.remove('color_active');
}

let cl = 0;
let bc = 2;
let color = document.getElementsByClassName('color');
for (let i = 0; i < color.length; i++){
	color[i].onclick = () =>{
		color[i].dataset.textColor != null ? remove_active_2(cl) : 0;
		color[i].dataset.bgColor != null ? remove_active_2(bc) : 0;
		color[i].classList.add('color_active'); 


		color[i].dataset.textColor != null ? remove_color(cl) : 0;
		color[i].dataset.bgColor != null ? remove_bc(bc) : 0;
		book.classList.add(`book_color-${color[i].dataset.textColor}`);
		book.classList.add(`book_bg-${color[i].dataset.bgColor}`);
		cl = i;
		bc = i;
		return false;
	}
}
