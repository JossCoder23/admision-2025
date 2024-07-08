window.addEventListener("load", () => {
    let container1 = document.getElementById('bloque1');
    let containerTop = document.querySelector('.bloque1Container__left');
    let container2 = document.getElementById('bloque2');
    let container4 = document.querySelector('.bloque4');
    let gestion = document.querySelector('.bloque7ButtonItem1');
    let gestionContenido = document.querySelector('.bloque7GridContainer1');
    let gestionContainer = document.querySelector('.bloque7GridGroup1');
    let ingenieria = document.querySelector('.bloque7ButtonItem2');
    let ingenieriaContenido = document.querySelector('.bloque7GridContainer2');
    let ingenieriaContainer = document.querySelector('.bloque7GridGroup2');
    let educacion = document.querySelector('.bloque7ButtonItem3');
    let educacionContenido = document.querySelector('.bloque7GridContainer3');
    let educacionContainer = document.querySelector('.bloque7GridGroup3');
    let ciencias = document.querySelector('.bloque7ButtonItem4');
    let cienciasContenido = document.querySelector('.bloque7GridContainer2');
    let cienciasContainer = document.querySelector('.bloque7GridGroup4');
    let salud = document.querySelector('.bloque7ButtonItem5');
    let saludContenido = document.querySelector('.bloque7GridContainerSalud');
    let saludContainer = document.querySelector('.bloque7GridGroup5');
    let button1 = document.querySelector('.button__change');

    gestion.addEventListener("click", () => {
        gestionContenido.classList.toggle('bloque7GridGroupActivate');
        gestionContainer.classList.toggle('bloque7GridGroupToggle');
    })
    ingenieria.addEventListener("click", () => {
        ingenieriaContenido.classList.toggle('bloque7GridGroupActivate');
        ingenieriaContainer.classList.toggle('bloque7GridGroupToggle');
    })
    educacion.addEventListener("click", () => {
        educacionContenido.classList.toggle('bloque7GridGroupActivate');
        educacionContainer.classList.toggle('bloque7GridGroupToggle');
    })
    ciencias.addEventListener("click", () => {
        cienciasContenido.classList.toggle('bloque7GridGroupActivate');
        cienciasContainer.classList.toggle('bloque7GridGroupToggle');
    })
    salud.addEventListener("click", () => {
        saludContenido.classList.toggle('bloque7GridGroupActivate');
        saludContainer.classList.toggle('bloque7GridGroupToggle2');
    })

    window.addEventListener("scroll", (e) => {
        // console.log(window.scrollY);
        if(window.scrollY > 350) {
            container1.classList.add('backgroundRepeat');
            containerTop.classList.add('backgroundRepeat');
            container2.classList.add('backgroundRepeat');
            button1.classList.add('backgroundRepeat');
            container4.classList.add('backgroundRepeat');
        } else {
            container1.classList.remove('backgroundRepeat');
            containerTop.classList.remove('backgroundRepeat');
            container2.classList.remove('backgroundRepeat');
            button1.classList.remove('backgroundRepeat');
            container4.classList.remove('backgroundRepeat');
        }
    })

    var slider1 = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        breakpoints: {
            760: {
                slidesPerView: 2,
                slidesPerColumn: 1
            },
            999: {
                slidesPerView: 5,
                slidesPerColumn: 1
            },
            // 1280: {
            //     slidesPerView: 4,
            //     slidesPerColumn: 1
            // }
        }
    });
    
    var slider2 = new Swiper(".mySwiper2", {
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2"
        },
        pagination: {
            el: ".swiper-pagination2",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        breakpoints: {
            760: {
                slidesPerView: 2,
                slidesPerColumn: 1
            },
            999: {
                slidesPerView: 3,
                slidesPerColumn: 2
            },
        }
    });

    var slider3 = new Swiper(".mySwiper3", {
        navigation: {
            nextEl: ".swiper-button-next3",
            prevEl: ".swiper-button-prev3"
        },
        pagination: {
            el: ".swiper-pagination3",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        breakpoints: {
            760: {
                slidesPerView: 2,
                slidesPerColumn: 1
            },
            999: {
                slidesPerView: 3,
                slidesPerColumn: 1
            },
        }
    });

    var slider4 = new Swiper(".mySwiper4", {
        navigation: {
            nextEl: ".swiper-button-next4",
            prevEl: ".swiper-button-prev4"
        },
        pagination: {
            el: ".swiper-pagination4",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="bullet ' + className + '"></span>';
            }
        },
        breakpoints: {
            760: {
                slidesPerView: 2,
                slidesPerColumn: 1
            },
            999: {
                slidesPerView: 3,
                slidesPerColumn: 1
            },
        }
    });

    let slides = document.querySelectorAll('.slider__item');

    // if( window.screen.width > 1019 ) {
    //     alert("ya me pase")
    // }

})


