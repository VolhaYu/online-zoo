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

//   карусель Pets

const wrapCards = document.querySelector('.wrap-cards');
let cards = document.querySelectorAll('.card');
const arrowNext = document.querySelector('.arrow-next');
const arrowPrev = document.querySelector('.arrow-prev');
let isEnabled = true;
let currentItem = 0;

const shuffle = (deck) => { 
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
    return deck;
};

function creatCard() {
    let frag = document.createDocumentFragment();
    let a = shuffle(wrapCards.children);
    console.log(a);
    frag.appendChild(a[0]);
    wrapCards.appendChild(frag);
}

function changeCurrentItem(n) {
    currentItem = (n + wrapCards.length) % wrapCards.length;
}
function hideCards(direction) {
    isEnabled = false;
    wrapCards.classList.add(direction);
    wrapCards.addEventListener('animationend', function() {
        this.classList.remove(direction);
    });
}
function showCards(direction) {
    wrapCards.classList.add(direction);
    wrapCards.addEventListener('animationend', function() {
        this.classList.remove(direction);
    });
        isEnabled = true;
}
function prevItem(n) {
    hideCards('to-right');
    changeCurrentItem(currentItem - 1);
    showCards('from-left');

}
function nextItem(n) {
    hideCards('to-left');
    changeCurrentItem(currentItem + 1);
    showCards('from-right');
}
arrowNext.addEventListener('click', () => {
  if(isEnabled) {
        nextItem(currentItem);
        creatCard();
    }    
});
arrowPrev.addEventListener('click', () => {
    if(isEnabled) {
        prevItem(currentItem);
        creatCard();
    }    
})

// Карусель в блоке Testimonials

const testimonials = document.querySelectorAll('.testimonial');
const scrolRange = document.querySelector('.scrol-range');

function showNext() {
  testimonials.forEach(test => {
    test.style.transform=`translate(-296px)`;
  });
}

function showPrev() {
  testimonials.forEach(test => {
    test.style.transform=`translate(0px)`;
  });
}

function showTestimonials() {
  scrolRange.addEventListener('input', () => { 
      let value = scrolRange.value;
      if (value++) {
          showNext();
      }else {
          showPrev();
      }
  });
}
showTestimonials();

// pop-up
const popUp = document.querySelector('.pop-up');
const popUpContent = document.querySelector('.pop-up-content');
const popUpClose = document.querySelector('.pop-up-close');
const popUpOverlay = document.querySelector('.pop-up_overlay');
let testimonialPopup = document.querySelector('.testimonial_pop-up');

let textPopup = document.querySelector('.text-testimonial_pop-up');
const r = document.querySelector('.text-testimonial-t');

if(window.innerWidth <= 640) {
  for (let i = 0; i < testimonials.length; i++) {
      testimonials[i].addEventListener('click', () => {
          popUp.classList.add('pop-up-active');
      });
  }
  popUpClose.addEventListener('click', () => {
      popUp.classList.remove('pop-up-active');
  });
  
  popUp.addEventListener('click', () => {
      popUp.classList.remove('pop-up-active');
  });
}


