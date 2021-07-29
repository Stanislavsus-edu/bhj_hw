const link = document.getElementsByClassName("menu__link");
const menu__item = document.getElementsByClassName('menu__item');
for (let i = 0; i < link.length; i++) {
    link.item(i).onclick = () => {
    	if ( menu__item.item(i).querySelector('ul').classList.contains('menu_active') == true){
        	menu__item.item(i).querySelector('ul').classList.remove('menu_active');
        }
        else {
        	for (let j = 0; j < document.querySelectorAll('ul.menu_active').length; j++) {
            	document.querySelectorAll('ul.menu_active').item(j).classList.remove('menu_active');
        	}
        	menu__item.item(i).querySelector('ul').classList.add('menu_active');  
        }
        return false;
    };
}