let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status == 200) {
        showPoll(xhr.responseText);
    }
});


function showPoll(base) {
    const coins = JSON.parse(base).data;
    document.getElementById('poll__title').append(coins.title);
	for(let i = 0; i < coins.answers.length; i++){
		document.getElementById('poll__answers').innerHTML += 
		`<button class="poll__answer">${coins.answers[i]}</button>`
	}
	let button = document.getElementsByTagName('button');
	for (let j = 0; j<button.length; j++){
		button[j].onclick = () => {
			alert('Спасибо, ваш голос засчитан!')
		}
	}
}
