const navOpen= document.getElementById("nav-open");
const navMenu= document.getElementById("nav-menu");
const  navClose= document.getElementById("nav-close");
const  Header= document.getElementById("header");
const navItems = document.querySelectorAll('.nav-item');





navOpen.addEventListener("click" , () => {
    navMenu.classList.add("nav-menu-open")
})

navClose.addEventListener("click" , ()=>{
    navMenu.classList.remove("nav-menu-open")
})

window.addEventListener("scroll" , ()=>{
    if (window.scrollY>80) {
        Header.classList.add("header-scroll")
        
    }else{
        Header.classList.remove("header-scroll")
    }

})

navItems.forEach( link =>{
    link.addEventListener("click" ,()=>{
  navMenu.classList.remove("nav-menu-open")
} )
} )