import "../styles/styles.css"
import MobileMenu from "./modules/MobileMenu.js"
import RevealOnScroll from "./modules/RevealOnScroll.js"
import StickyHeader from "./modules/StickyHeader"

let stickyheader = new StickyHeader
let mobilemenu = new MobileMenu()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 65)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 50)

if(module.hot){
    module.hot.accept()
}