//Открытие красного бэйджа
const widget = document.getElementsByClassName('chat-widget')[0];
widget.onclick = () => {
	widget.classList.add('chat-widget_active');
	check_Downtime();
}

//Событие нажатия enter
const enter = () => event.key == "Enter" && input.value.trim() != '' ? add() :0; 
document.addEventListener('keyup', enter)


//вспомогательные функции
const input = document.getElementById('chat-widget__input');
const getTime = () => {
	const date = new Date();
	return date.getHours() + ':' + date.getMinutes();
}

const scrollDown = () => {
    const messagesContainer = document.querySelector(".chat-widget__messages-container");
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

const check_Downtime = () => setTimeout(downtime, 30000);

const remove_Downtime = () => {
	clearTimeout(check_Dowtime);
}


input.addEventListener('keyup',  remove_Downtime);
input.removeEventListener('keyup', remove_Downtime)


//Отправка сообщений
const messages = document.querySelector( '.chat-widget__messages' );
const add = () =>{
	const date = new Date();
	messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${getTime()}</div>
    <div class="message__text">
      ${input.value}
    </div>
  </div>
`	
	input.value = '';
	scrollDown();
	answer();
}

const answer = () =>{
	messages.innerHTML += `
  <div class="message">
    <div class="message__time">${getTime()}</div>
    <div class="message__text">
      Позвоните через 10 лет
    </div>
  </div>
`
	scrollDown();
}

const downtime = () =>{
	messages.innerHTML += `
  <div class="message">
    <div class="message__time">${getTime()}</div>
    <div class="message__text">
      Когда вы уже уйдёте?
    </div>
  </div>
`
	scrollDown();
}