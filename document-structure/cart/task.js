const value = document.getElementsByClassName('product__quantity-value');
const plus = document.getElementsByClassName('product__quantity-control_inc');
const minus = document.getElementsByClassName('product__quantity-control_dec');
const cart__products = document.getElementsByClassName('cart__products')[0];
for (let i = 0; i < plus.length; i++){
	plus[i].onclick = () => {
		value[i].textContent++;
	}
	minus[i].onclick = () =>{
		if (value[i].textContent > -1){
			value[i].textContent--;
		}
	}
}

const product__add = document.getElementsByClassName('product__add');
const product = document.getElementsByClassName('product');
const img = document.getElementsByClassName('product__image');
const count = document.getElementsByClassName('cart__product-count');
for (let i = 0; i < product__add.length; i++){
	product__add[i].onclick = () => {
		for (let j = 0; j < cart__products.children.length; j++){
			if(cart__products.children[j].dataset.id == product[i].dataset.id){
				count[j].textContent = Number(value[i].textContent) + Number(count[j].textContent);
				return false;
			} 
		}
		cart__products.innerHTML += 
		`<div class="cart__product" data-id="${product[i].dataset.id}">
         	<img class="cart__product-image" src="${img[i].getAttribute("src")}">
         	<div class="cart__product-count">${value[i].textContent}</div>
         </div>`
	}
}
