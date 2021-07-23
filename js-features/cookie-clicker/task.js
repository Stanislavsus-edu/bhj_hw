const click = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');
const picture = document.getElementById('cookie');
let count = 0; 		
let start = Date.now();
picture.onclick = function(){
	let end = Date.now();	
	click.textContent++;
	count++;
	speed.textContent = count/((end-start)/1000);

	if (count % 2 != 0){
	picture.width = 400;
	}

	else {
	picture.width = 200;
	}
}
