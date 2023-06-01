// Header style changes on scroll

const header = document.querySelector('header')
const navList = document.querySelector('#nav__container--wrapper')
const headerTitle = document.querySelector('#header__logo--title')
const logoSVG = document.querySelector('.headerSvg')
const hamburgerMenu = document.querySelector("#header__hamburgerMenu--container")
const checkHeaderStyles = () => {
    if(window.scrollY !== 0 && !navList.classList.contains('navContainerScrolled')){
        header.style.transitionDuration = '500ms'
        header.style.backgroundColor = '#edf0f1'
        navList.classList.add("navContainerScrolled")
        headerTitle.style.color = 'rgba(0, 0, 0, 0.9)'
        logoSVG.classList.add("headerSvgScrolled")
        setTimeout(() => {
            header.style.transitionDuration = '0ms'
        },500)
   }
   if(window.scrollY === 0 && header.style.backgroundColor !== 'rgba(0, 0, 0, 0.2)' &&  (!hamburgerMenu.classList.contains("active"))){
        header.style.transitionDuration = '500ms'
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
        navList.classList.remove("navContainerScrolled")
        headerTitle.style.color = 'white'
        logoSVG.classList.remove("headerSvgScrolled")
        setTimeout(() => {
            header.style.transitionDuration = '0ms'
        },500)
   }
}
document.addEventListener("scroll", () => {
    checkHeaderStyles()
})

checkHeaderStyles()


// mobile menu
const nav = document.querySelector("nav")
hamburgerMenu.addEventListener("click", () => {
    if(hamburgerMenu.classList.contains('active')){
        hamburgerMenu.classList.remove("active")
        hamburgerMenu.children[0].style.transform = 'rotate(0deg) translateY(0px)'
        hamburgerMenu.children[1].style.opacity = '1'
        hamburgerMenu.children[2].style.transform = 'rotate(0deg) translateY(0px)'
        nav.style.top = `-100vh`
        if(window.scrollY === 0){
            header.style.transitionDuration = '500ms'
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
            navList.classList.remove("navContainerScrolled")
            headerTitle.style.color = 'white'
            logoSVG.classList.remove("headerSvgScrolled")
            setTimeout(() => {
                header.style.transitionDuration = '0ms'
            },500)
        }
    
    }else{
        hamburgerMenu.classList.add("active")
        hamburgerMenu.children[0].style.transform = 'rotate(45deg) translateY(10px)'
        hamburgerMenu.children[1].style.opacity = '0'
        hamburgerMenu.children[2].style.transform = 'rotate(-45deg) translateY(-10px)'
        nav.style.top = `${header.getBoundingClientRect().height}px`
        nav.style.backgroundColor = '#edf0f1'
        nav.style.transitionDuration = '500ms'
        header.style.transitionDuration = '500ms'
        header.style.backgroundColor = '#edf0f1'
        navList.classList.add("navContainerScrolled")
        headerTitle.style.color = 'rgba(0, 0, 0, 0.9)'
        logoSVG.classList.add("headerSvgScrolled")
        setTimeout(() => {
            header.style.transitionDuration = '0ms'
        },500)
    }
})

// Header nav items auto-scroll

document.querySelector("#nav_home").addEventListener('click', () =>{
    document.querySelector("#Home").scrollIntoView()
})

document.querySelector("#nav_services").addEventListener('click', () =>{
    document.querySelector("#Services").scrollIntoView()
})

document.querySelector("#nav_products").addEventListener('click', () =>{
    document.querySelector("#Products").scrollIntoView()
})

document.querySelector("#nav_contact").addEventListener('click', () =>{
    document.querySelector("#Contact").scrollIntoView()
})