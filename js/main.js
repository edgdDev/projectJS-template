$(document).ready(() => {
    
    //Slider
    if(window.location.href.indexOf('index') > -1) {
        $('.slider').bxSlider({
            mode: "fade",
            auto: true,
            speed: 1000,
            captions: true,
            slideWidth: 1200,
            adaptiveHeight: true 
        });
    }
    //Posts
    if(window.location.href.indexOf('index') > -1) {
        let posts = [
            {
                tittle: "Prueba 1",
                date:  `${moment().date()} de ${moment().format("MMMM")} del ${moment().format("YYYY")}`,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec ullamcorper arcu. Sed egestas tortor lorem, vitae congue felis maximus eu. Proin finibs, justo ac rhoncus lacinia, ex risus mattis libero, non hendrerit tortor turpis ac purus.Nullam convallis velit vel massa pretium, nec interdum libero pharetra. Nullam malesuada tortor semper blandit vehicula. Cras sed vestibulum sem. Suspendisse potenti. Phasellus cursus, mi a congue blandit, lorem velit maximus erat, eget congue massa turpis sit amet lectus. Phasellus nec sodales tellus, at tincidunt felis. Integer cursus lobortis dui, ut aliquet d"
            },
            {
                tittle: "Prueba 2",
                date:  `${moment().date()} de ${moment().format("MMMM")} del ${moment().format("YYYY")}`,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec ullamcorper arcu. Sed egestas tortor lorem, vitae congue felis maximus eu. Proin finibs, justo ac rhoncus lacinia, ex risus mattis libero, non hendrerit tortor turpis ac purus.Nullam convallis velit vel massa pretium, nec interdum libero pharetra. Nullam malesuada tortor semper blandit vehicula. Cras sed vestibulum sem. Suspendisse potenti. Phasellus cursus, mi a congue blandit, lorem velit maximus erat, eget congue massa turpis sit amet lectus. Phasellus nec sodales tellus, at tincidunt felis. Integer cursus lobortis dui, ut aliquet d"
            },
            {
                tittle: "Prueba 3",
                date:  `${moment().date()} de ${moment().format("MMMM")} del ${moment().format("YYYY")}`,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec ullamcorper arcu. Sed egestas tortor lorem, vitae congue felis maximus eu. Proin finibs, justo ac rhoncus lacinia, ex risus mattis libero, non hendrerit tortor turpis ac purus.Nullam convallis velit vel massa pretium, nec interdum libero pharetra. Nullam malesuada tortor semper blandit vehicula. Cras sed vestibulum sem. Suspendisse potenti. Phasellus cursus, mi a congue blandit, lorem velit maximus erat, eget congue massa turpis sit amet lectus. Phasellus nec sodales tellus, at tincidunt felis. Integer cursus lobortis dui, ut aliquet d"
            },
            {
                tittle: "Prueba 4",
                date:  `${moment().date()} de ${moment().format("MMMM")} del ${moment().format("YYYY")}`,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec ullamcorper arcu. Sed egestas tortor lorem, vitae congue felis maximus eu. Proin finibs, justo ac rhoncus lacinia, ex risus mattis libero, non hendrerit tortor turpis ac purus.Nullam convallis velit vel massa pretium, nec interdum libero pharetra. Nullam malesuada tortor semper blandit vehicula. Cras sed vestibulum sem. Suspendisse potenti. Phasellus cursus, mi a congue blandit, lorem velit maximus erat, eget congue massa turpis sit amet lectus. Phasellus nec sodales tellus, at tincidunt felis. Integer cursus lobortis dui, ut aliquet d"
            },
            {
                tittle: "Prueba 5",
                date:  `${moment().date()} de ${moment().format("MMMM")} del ${moment().format("YYYY")}`,
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec ullamcorper arcu. Sed egestas tortor lorem, vitae congue felis maximus eu. Proin finibs, justo ac rhoncus lacinia, ex risus mattis libero, non hendrerit tortor turpis ac purus.Nullam convallis velit vel massa pretium, nec interdum libero pharetra. Nullam malesuada tortor semper blandit vehicula. Cras sed vestibulum sem. Suspendisse potenti. Phasellus cursus, mi a congue blandit, lorem velit maximus erat, eget congue massa turpis sit amet lectus. Phasellus nec sodales tellus, at tincidunt felis. Integer cursus lobortis dui, ut aliquet d"
            }
        ];

        posts.forEach(item => {
            
            post = `
                <article class="post">
                    <h2>${item.tittle}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="#" class="button-more">Leer más</a>
            `
            $("#posts").append(post);
        })
    }
    //Selector de tema
    let theme = $("#theme");

    $("#to-green").click(() => {
        
        theme.attr("href", "style/green.css");

    })

    $("#to-red").click(() => {
        
        theme.attr("href", "style/red.css");

    })

    $("#to-blue").click(() => {
        
        theme.attr("href", "style/blue.css");

    })

    //Scroll arriba de la web
    $(".subir").click((e) => {

        e.preventDefault()
        $("html, body").animate({
            scrollTop: 0
        }, 500);

        return false;

    });
    
    //Login Falso
    $("#login form").submit(() => {

        // e.preventDefault();
        let form_name = $("#form_name").val(); 
        localStorage.setItem("usuario", form_name);
        
    });
        
    let usuario = localStorage.getItem("usuario");
    
    if((usuario != null)  &&  (usuario != "undefined")) {
        
        $("#about p").html(`<strong>Bienvenido ${usuario}</strong>`);
        $("#about p").append(`<a href="#" id="logout">Cerrar Sesión</a>`);
        $("#login").hide();
                    
    }

    $("#logout").click(() => {

        localStorage.clear();
        location.reload();

    });
    $("#logout").css("text-decoration", "none")
                .css("color", "red")
                .css("font-weight", "bold");

    //Acordeon
    if(window.location.href.indexOf('about') > -1) {

        $("#acordeon").accordion();

    }

    //Reloj
    if(window.location.href.indexOf('reloj') > -1) {

      setInterval(() => {

        let reloj = moment().format("hh:mm:ss");
        $("#reloj").html(reloj);

      }, 1000);      

    }

    //Validación
    if(window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker({
            dateFormat: "dd-mm-yy"
        })
        $.validate({
            lang: "es"
        });

    }
    
});