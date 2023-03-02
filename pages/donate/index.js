const burger = document.querySelector('.header-burger');
const windowClose = document.querySelector('.window-close');
const navList = document.querySelector('.nav-list');
const navItem = document.querySelectorAll('.nav-item_burger');
const nav = document.querySelector('.nav_burger');

burger.addEventListener('click', (e) => {
    nav.classList.add('nav_burger-active');
});
windowClose.addEventListener('click', (e) => {
    nav.classList.remove('nav_burger-active');
});
for(let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', () => {
        nav.classList.remove('nav_burger-active');
    });
}
document.addEventListener('click', event => {
    let e = nav;
    let burg = burger;
    if (!e.contains(event.target) && !burg.contains(event.target)) {
        nav.classList.remove('nav_burger-active');
    };
  });

//   Pick and feed a friend 

const form = document.querySelector('.progress-bar_form');
const inputs = document.querySelectorAll('.progress-bar_radio');
const priceList = document.querySelector('.prise-list');
const priceItem = document.querySelectorAll('.prise-item');
const anotherAmount = document.getElementById('number');
const label = document.querySelectorAll('.label');

function limit() {
    let val = anotherAmount.value;
    if (val.length >= 5){
        val = val.slice (0,4);
    };
}

for(let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', (e) => {
        inputs[i].checked = true;
        label.forEach(item => item.classList.remove('label_checked'))
        label[i].classList.add('label_checked');

        priceItem.forEach(item => item.classList.remove('prise-item_active'));
        priceItem[i].classList.add('prise-item_active');

        let newPrice = inputs[i].value;
        anotherAmount.setAttribute('value', newPrice);
    });
}
anotherAmount.addEventListener('input', function() {
    let val = anotherAmount.value;   
    for (let i = 0; i < priceItem.length; i++) {
        let price = priceItem[i].textContent;
        if(price.includes(val)) {            
            priceItem.forEach(item => item.classList.remove('prise-item_active'));
            priceItem[i].classList.add('prise-item_active');  
            label.forEach(item => item.classList.remove('label_checked'));
            label[i].classList.add('label_checked');         
        }else {
            priceItem[i].classList.remove('prise-item_active');
            label[i].classList.remove('label_checked'); 
        }
        if(!val) {
            console.log('null');
            priceItem.forEach(item => item.classList.remove('prise-item_active'));
            label.forEach(item => item.classList.remove('label_checked'));
        } 
    }
    this.value = this.value.substr(0, 4);
});
function media() {
    if (document.documentElement.clientWidth < 855) {
        priceItem[5].classList.add('prise-item_active'); 
        label[5].classList.add('label_checked');
        anotherAmount.setAttribute('value', 100);
    }
}
media();


