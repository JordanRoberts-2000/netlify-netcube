const header = document.querySelector('header')
const navList = document.querySelector('#nav__container--wrapper')
const headerTitle = document.querySelector('#header__logo--title')
const checkHeaderStyles = () => {
    if(window.scrollY !== 0 && !navList.classList.contains('navContainerScrolled')){
        header.style.transitionDuration = '500ms'
        header.style.backgroundColor = '#edf0f1'
        navList.classList.add("navContainerScrolled")
        headerTitle.style.color = 'rgba(0, 0, 0, 0.9)'
        setTimeout(() => {
            header.style.transitionDuration = '0ms'
        },500)
   }
   if(window.scrollY === 0 && header.style.backgroundColor !== 'rgba(0, 0, 0, 0.2)'){
        header.style.transitionDuration = '500ms'
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
        navList.classList.remove("navContainerScrolled")
        headerTitle.style.color = 'white'
        setTimeout(() => {
            header.style.transitionDuration = '0ms'
        },500)
   }
}
document.addEventListener("scroll", () => {
    checkHeaderStyles()
})

checkHeaderStyles()

const hamburgerMenu = document.querySelector("#header__hamburgerMenu--container")

hamburgerMenu.addEventListener("click", () => {
    if(hamburgerMenu.classList.contains('active')){
        hamburgerMenu.classList.remove("active")
        hamburgerMenu.children[0].style.transform = 'rotate(0deg) translateY(0px)'
        hamburgerMenu.children[1].style.opacity = '1'
        hamburgerMenu.children[2].style.transform = 'rotate(0deg) translateY(0px)'
    }else{
        hamburgerMenu.classList.add("active")
        hamburgerMenu.children[0].style.transform = 'rotate(45deg) translateY(10px)'
        hamburgerMenu.children[1].style.opacity = '0'
        hamburgerMenu.children[2].style.transform = 'rotate(-45deg) translateY(-10px)'
    }
})