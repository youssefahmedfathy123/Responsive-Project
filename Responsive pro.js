// change navbar styles on scroll 
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 10)
})

// show/hide faq answer

const  faqs = document.querySelectorAll('.faq');

faqs.forEach( x => {
    x.addEventListener('click', () => {
        x.classList.toggle('open');
    

/// change icon
    const icon = x.querySelector('.faq__icon i');
    if(icon.className === "fa-solid fa-plus"){
    icon.className = "fa-solid fa-minus";

    } else{
        icon.className = "fa-solid fa-plus";
    }
    })
})

const menu = document.querySelector(".nav__menue");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click',closeNav);


