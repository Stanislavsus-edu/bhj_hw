let isInViewport = function(){
	const viewportHeight = window.innerHeight;
	let reveal = Array.from(document.getElementsByClassName('reveal')).forEach(item =>{
		item.getBoundingClientRect().top < viewportHeight ? item.classList.add('reveal_active') : item.classList.remove('reveal_active')});
};
document.addEventListener('scroll', isInViewport());

 