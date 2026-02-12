const menuOpenBtn = document.querySelector("#menu-open-button");
const menuCloseBtn = document.querySelector("#menu-close-button");

menuOpenBtn.addEventListener("click",() => {
    // toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu")
})
//close navbar menu -1
// menuCloseBtn.addEventListener('click',() => {
//     document.body.classList.remove("show-mobile-menu")
// })
//close navbar menu -2
menuCloseBtn.addEventListener('click',() => menuOpenBtn.click());

//minate 23:54 blur effect