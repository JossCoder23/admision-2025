window.addEventListener("load", () => {
    let container1 = document.getElementById('bloque1');
    // let containerTop = document.querySelector('.bloque1Container__left');
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
            // container1.classList.add('backgroundRepeat');
            container1.classList.add('bloque7GridGroupOther');
            // containerTop.classList.add('backgroundRepeat');
            container2.classList.add('backgroundRepeat');
            button1.classList.add('backgroundRepeat');
            container4.classList.add('backgroundRepeat');
        } else {
            container1.classList.remove('bloque7GridGroupOther');
            // container1.classList.remove('backgroundRepeat');
            // containerTop.classList.remove('backgroundRepeat');
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
                slidesPerView: 1,
                slidesPerColumn: 1
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
        loop: true,
        breakpoints: {
            760: {
                slidesPerView: 2,
                slidesPerColumn: 1
            },
            999: {
                slidesPerView: 3,
                slidesPerColumn: 3
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
        loop: true,
        breakpoints: {
            760: {
                slidesPerView: 2,
                slidesPerColumn: 1
            },
            999: {
                slidesPerView: 3,
                slidesPerColumn: 3
            },
        }
    });

    let slides = document.querySelectorAll('.slider__item');

    // if( window.screen.width > 1019 ) {
    //     alert("ya me pase")
    // }

    let boton = document.querySelector('.bloqueFloat');

   window.addEventListener("scroll", (e) => {


        if( screen.width >= 320 && screen.width <= 1019 ) {
            if( window.scrollY >= 650 && window.scrollY <= 2600 ) {
                boton.classList.add('bloqueFloatActive')
            }else {
                boton.classList.remove('bloqueFloatActive')
            }
        }
       
        if( screen.width >= 1020 && screen.width <= 1280 ) {
            // console.log(window.scrollY);
            if( window.scrollY >= 350 && window.scrollY <= 3700 ) {
                boton.classList.add('bloqueFloatActive')
            }else {
                boton.classList.remove('bloqueFloatActive')
            }
        }

        if( screen.width >= 1360 && screen.width <= 2600 ) {
            if( window.scrollY >= 450 && window.scrollY <= 4000 ) {
                boton.classList.add('bloqueFloatActive')
            }else {
                boton.classList.remove('bloqueFloatActive')
            }
        }

   })



    function getUTMParams() {
        var params = {};
        var queryString = window.location.search;
        queryString = queryString.substring(1);
        var pairs = queryString.split("&");
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split("=");
            params[pair[0]] = pair[1];
        }
        return params;
    }

    var utmParams = getUTMParams();
    var utmSource = utmParams["utm_source"];
    var utmMedium = utmParams["utm_medium"];
    var utmCampaign = utmParams["utm_campaign"];
    var utmTerm = utmParams["utm_term"];
    var utmContent = utmParams["utm_content"];
    var utmId = utmParams["utm_id"];

    let adm = document.querySelector('.administracion');
    let adm_salud = document.querySelector('.administracionEnSalud');
    let medicina = document.querySelector('.medicina');
    let enfermeria = document.querySelector('.enfermeria');
    let estomatologia = document.querySelector('.estomatologia');
    let psicologia = document.querySelector('.psicologia');
    let veterinaria = document.querySelector('.veterinaria');
    let tfr = document.querySelector('.tfr');
    let to = document.querySelector('.to');
    let tavl = document.querySelector('.tavl');
    let radiologia = document.querySelector('.radiologia');
    let laboratorio = document.querySelector('.laboratorio');
    let industrial = document.querySelector('.industrial');
    let ambiental = document.querySelector('.ambiental');
    let informatica = document.querySelector('.informatica');
    let biomedica = document.querySelector('.biomedica');
    let edu = document.querySelector('.educacion');
    let biologia = document.querySelector('.biologia');
    let nutricion = document.querySelector('.nutricion');
    let farmacia = document.querySelector('.farmacia');

    if( !utmCampaign ) {
        adm.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/administracion/`, '_blank')")
        adm_salud.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/administracion-en-salud`, '_blank')")
        medicina.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/medicina/`, '_blank')")
        enfermeria.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/enfermeria/`, '_blank')")
        estomatologia.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/estomatologia/`, '_blank')")
        psicologia.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/psicologia/`, '_blank')")
        veterinaria.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/medicina-veterinaria-y-zootecnia/`, '_blank')")
        tfr.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/terapia-fisica-y-rehabilitacion`, '_blank')")
        to.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/terapia-ocupacional/`, '_blank')")
        tavl.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/terapia-de-audicion-voz-y-lenguaje`, '_blank')")
        radiologia.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/radiologia/`, '_blank')")
        laboratorio.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/laboratorio-clinico/`, '_blank')")
        industrial.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/ingenieria-industrial/`, '_blank')")
        ambiental.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/ingenieria-ambiental/`, '_blank')")
        informatica.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/ingenieria-informatica/`, '_blank')")
        biomedica.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/ingenieria-biomedica/`, '_blank')")
        edu.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/educacion/`, '_blank')")
        biologia.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/biologia/`, '_blank')")
        nutricion.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/nutricion/`, '_blank')")
        farmacia.setAttribute("onclick", "window.open(`https://lp.cayetano.edu.pe/farmacia-y-bioquimica/`, '_blank')")
    }else {
        adm.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/administracion/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        adm_salud.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/administracion-en-salud/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        medicina.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/medicina/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        enfermeria.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/enfermeria/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        estomatologia.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/estomatologia/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        psicologia.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/psicologia/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        veterinaria.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/medicina-veterinaria-y-zootecnia/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        tfr.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/terapia-fisica-y-rehabilitacion/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        to.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/terapia-ocupacional/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        tavl.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/terapia-de-audicion-voz-y-lenguaje/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        radiologia.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/radiologia/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        laboratorio.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/laboratorio-clinico/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        industrial.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/ingenieria-industrial/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        ambiental.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/ingenieria-ambiental/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        informatica.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/ingenieria-informatica/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        biomedica.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/ingenieria-biomedica/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        edu.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/educacion/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        biologia.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/biologia/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        nutricion.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/nutricion/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
        farmacia.setAttribute("onclick", `window.open('https://lp.cayetano.edu.pe/farmacia-y-bioquimica/?utm_source=${utmSource}&utm_medium=${utmMedium}&utm_campaign=${utmCampaign}&utm_term=${utmTerm}&utm_content=${utmContent}&utm_id=${utmId}', '_blank')`)
    }

})


