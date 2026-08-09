/*==================================================
              PAGE LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";

            setTimeout(()=>{

                loader.style.display="none";

            },500);

        },1000);

    }

});


/*==================================================
              MOBILE MENU
==================================================*/

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

        menuBtn.classList.toggle("open");

    });

}


// Close menu after clicking link

document.querySelectorAll(".nav-links a").forEach(link=>{


    link.addEventListener("click",()=>{

        if(navLinks){

            navLinks.classList.remove("active");

        }

    });


});


/*==================================================
              NAVBAR SCROLL EFFECT
==================================================*/

window.addEventListener("scroll",()=>{


    const navbar=document.querySelector(".navbar");


    if(window.scrollY > 50){

        navbar.style.background="rgba(0,0,0,.9)";

        navbar.style.padding="15px 8%";

    }

    else{

        navbar.style.background="rgba(0,0,0,.55)";

        navbar.style.padding="20px 8%";

    }


});



/*==================================================
              BACK TO TOP BUTTON
==================================================*/

const topBtn=document.getElementById("topBtn");


window.addEventListener("scroll",()=>{


    if(topBtn){

        if(window.scrollY > 400){

            topBtn.style.display="block";

        }

        else{

            topBtn.style.display="none";

        }

    }


});


if(topBtn){

    topBtn.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });

}



/*==================================================
              SCROLL REVEAL ANIMATION
==================================================*/


const revealElements=document.querySelectorAll(

".stat-box, .power-card, .path-card, .quote-card, .timeline-item, .about-image, .about-text"

);



const revealOnScroll=()=>{


    revealElements.forEach(element=>{


        const position=element.getBoundingClientRect().top;


        const screenHeight=window.innerHeight;


        if(position < screenHeight - 100){


            element.style.opacity="1";

            element.style.transform="translateY(0)";


        }


    });


};



revealElements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform="translateY(50px)";

    element.style.transition="all .8s ease";


});



window.addEventListener("scroll",revealOnScroll);


revealOnScroll();




/*==================================================
              ACTIVE NAVIGATION
==================================================*/


const sections=document.querySelectorAll("section");

const navItems=document.querySelectorAll(".nav-links a");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop=section.offsetTop - 150;


        if(scrollY >= sectionTop){

            current=section.getAttribute("id");

        }


    });



    navItems.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#"+current){


            link.classList.add("active");


        }


    });


});




/*==================================================
              IMAGE LIGHT EFFECT
==================================================*/


const images=document.querySelectorAll(".gallery-grid img");



images.forEach(image=>{


    image.addEventListener("click",()=>{


        const overlay=document.createElement("div");


        overlay.className="image-popup";


        overlay.innerHTML=`

        <img src="${image.src}">

        `;


        document.body.appendChild(overlay);



        overlay.addEventListener("click",()=>{


            overlay.remove();


        });


    });


});



/*==================================================
              TYPING EFFECT
==================================================*/


const heroText=document.querySelector(".hero h2");


if(heroText){


    const text=heroText.innerText;


    heroText.innerText="";


    let index=0;



    function typing(){


        if(index < text.length){


            heroText.innerHTML += text.charAt(index);


            index++;


            setTimeout(typing,80);


        }


    }


    setTimeout(typing,1500);


}




/*==================================================
              BUTTON RIPPLE EFFECT
==================================================*/


document.querySelectorAll(".btn").forEach(button=>{


    button.addEventListener("click",function(e){


        let ripple=document.createElement("span");


        ripple.className="ripple";


        this.appendChild(ripple);



        setTimeout(()=>{


            ripple.remove();


        },600);



    });


});