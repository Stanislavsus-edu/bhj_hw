const items = document.getElementById('items');
const loader = document.getElementById('loader');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status == 200) {

        showTable(xhr.responseText);

        loader.classList.remove('loader_active'); 
    }
});


function showTable(base) {
    const coins = JSON.parse(base).response.Valute;
    for (let item in coins) {
        items.innerHTML += `<div class="item">
            <div class="item__code">${coins[item].CharCode}</div>
            <div class="item__value">${coins[item].Value}</div>
            <div class="item__currency">руб.</div>
        </div>`;
    }
}