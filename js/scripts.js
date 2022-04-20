/*!
* Start Bootstrap - Freelancer v7.0.2 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 
document.querySelector('#submit').addEventListener('click',function(){

    console.log("teste")
     let name = document.querySelector('#name').value;
     let email = document.querySelector('#email').value;
     let phone = document.querySelector('#phone').value;
     let message = document.querySelector('#message').value;
     let exampleFormControlSelect1 = document.querySelector('#exampleFormControlSelect1').value;
     
    let url = "https://api.whatsapp.com/send?phone=5584996300893&text= Bem vindo a Roseame -->> %0A Qual é o seu nome? %0A " + cliente + " %0A Qual o seu sobrenome ?%0A" + 
    sobrenome + "%0A Qual o seu e-mail %0A "+ email +" %0A Qual é o seu telefone ? %0A "+ telefone +" %0A Uma cotação para quantas vidas ? %0A" + exampleFormControlSelect1; 
    window.open(url);
    
    });

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

        // $('.portfolio-item').isotope({
        //  	itemSelector: '.item',
        //  	layoutMode: 'fitRows'
        //  });
        $('.portfolio-menu ul li').click(function(){
            $('.portfolio-menu ul li').removeClass('active');
            $(this).addClass('active');
            
            var selector = $(this).attr('data-filter');
            $('.portfolio-item').isotope({
                filter:selector
            });
            return  false;
        });
        $(document).ready(function() {
        var popup_btn = $('.popup-btn');
        popup_btn.magnificPopup({
        type : 'image',
        gallery : {
            enabled : true
        }
        });
        });
