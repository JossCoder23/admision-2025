window.addEventListener("load", () => {
    let container1 = document.getElementById('bloque1');
    let containerTop = document.querySelector('.bloque1Container__left');
    let container2 = document.getElementById('bloque2');
    let button1 = document.querySelector('.button__change')
    window.addEventListener("scroll", (e) => {
        // console.log(window.scrollY);
        if(window.scrollY > 350) {
            container1.classList.add('backgroundRepeat');
            containerTop.classList.add('backgroundRepeat');
            container2.classList.add('backgroundRepeat');
            button1.classList.add('backgroundRepeat');
        } else {
            container1.classList.remove('backgroundRepeat');
            containerTop.classList.remove('backgroundRepeat');
            container2.classList.remove('backgroundRepeat');
            button1.classList.remove('backgroundRepeat');
        }
    })

    var slider1 = new Swiper(".mySwiper", {
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
                slidesPerView: 4,
                slidesPerColumn: 1
            },
            1280: {
                slidesPerView: 4,
                slidesPerColumn: 1
            }
        }
    });

})


