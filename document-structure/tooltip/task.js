const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));

tooltips.forEach(element => {
    element.onclick = () => {
    	if(element.nextSibling.className == 'tooltip tooltip_active'){
    		 tooltip.classList.remove('tooltip_active');
    	}
    	else{
	    	element.insertAdjacentHTML('afterEnd', `<div class = 'tooltip tooltip_active' style = ''> ${element.getAttribute('title')} </div>`);
	        let tooltip = element.nextSibling;
	        let positionTooltip = element.getBoundingClientRect();
	        tooltip.style.left = positionTooltip.left + 'px';
	        tooltip.style.top = positionTooltip.bottom + 'px';
	        return false;
    	}
    };
});