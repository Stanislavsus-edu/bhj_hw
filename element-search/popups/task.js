const popup = document.getElementById("modal_main");
popup.className = "modal modal_active";



const close = document.getElementsByClassName("modal__close")
for (let i = 0; i < close.length; i++) {
    close.item(i).onclick = () => {
        popup.className = "modal";
        success.className = "modal";
    };
}



const success = document.getElementById("modal_success");
const show = document.getElementsByClassName("show-success")
show[0].onclick = function () {
	success.className = "modal modal_active";
	popup.className = "modal";
}