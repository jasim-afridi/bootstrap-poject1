const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    if(window.scrollY > 500){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
})