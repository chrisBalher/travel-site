import "../styles/styles.css"
import MobileMenu from "./modules/MobileMenu.js"
import RevealOnScroll from "./modules/RevealOnScroll.js"
import StickyHeader from "./modules/StickyHeader"
//import Modal from "./modules/Modal"

//new Modal()
let modal
let stickyheader = new StickyHeader
let mobilemenu = new MobileMenu()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 65)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 50)

document.querySelectorAll(".open-modal").forEach(el=>{
    el.addEventListener('click', e=>{
        e.preventDefault()
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */ "./modules/Modal").then( x => {
                modal=new x.default()
                setTimeout(()=>modal.openTheModal(), 20)
            } ).catch( ()=>console.log("ocurrio un problema") )
        }else{
            modal.openTheModal()
        }
    })
})

if(module.hot){
    module.hot.accept()
}