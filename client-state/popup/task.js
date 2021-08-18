const popup = document.getElementById("subscribe-modal");

const close = document.querySelector(".modal__close")
close.addEventListener('click', e=>{
	popup.classList.remove("modal_active");
	document.cookie = 'popup=no'
});


window.addEventListener('DOMContentLoaded', () => {
    if (!document.cookie.includes('popup=no')) {
    	popup.classList.add("modal_active");
    }
});