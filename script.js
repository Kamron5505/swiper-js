
let body = document.querySelector('body');
let btn1 = document.querySelector('#prev')
let btn2 = document.querySelector('#prev2')
let colors = ['linear-gradient(124deg, #f4a764 0%, #ffdec2 100%)', 'linear-gradient(124deg, #adb0b0 0%, #e1e1e1 100%)', 'linear-gradient(124deg, #30a357 0%, #75e39a 100%)', ' linear-gradient(124deg, #f24f4f 0%, #ffa895 100%)']




let currentColorIndex = 0;
btn1.addEventListener('click', () => {
    body.style.background = colors[currentColorIndex];

    +currentColorIndex

    if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }
});

btn2.addEventListener("click", () => {
    body.style.background = colors[currentColorIndex];

    ++currentColorIndex

    if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }
})


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
});


