let dead = document.getElementById('dead');
let lost = document.getElementById('lost');	
function get_hole(index) {
	return document.getElementById(`hole${index}`);
}

for (let i = 1; i < 10; i++){
	get_hole(i).onclick = function(){
		if (get_hole(i).className.includes('hole_has-mole')){
			dead.textContent++;
		}
		else{
			lost.textContent++;	
		}
		if (dead.textContent == 10){
			dead.textContent = 0;
			lost.textContent = 0;
			alert("You win")
		}
		if (lost.textContent == 10){
			dead.textContent = 0;
			lost.textContent = 0;
			alert("You lose")
		}
	}
}

