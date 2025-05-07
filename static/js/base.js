let images = ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg", "f.jpg", "g.jpg", "h.jpg"]
let i = 0

let caller = document.getElementById("hero")

setInterval(() => {
    if (i< images.length-1){
        i++
    }
    else{
        i=0
    }
    caller.src = `/static/assets/${images[i]}`
}, 5000);

let btn = document.querySelector(".btn")
let about = document.querySelector(".about-us")
let here = document.querySelector(".about")
let bar_1 = document.querySelector(".fa-xmark")
let bar_2 = document.querySelector(".fa-bars")
let tint = document.querySelector("#tint")
let claim = document.querySelector("#claim")

btn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
    
})
about.addEventListener('click', () => {
    here.scrollIntoView({ behavior: 'smooth' });
    here.style.display="grid"
    // waiting.classList.add("quality-service")
  });

tint.addEventListener("click", () => {
    if(tint.classList.contains("fa-bars")){
        tint.classList.remove("fa-bars")
        tint.classList.add("fa-xmark")
    }
    else{
        tint.classList.remove("fa-xmark")
        tint.classList.add("fa-bars")
    }
})
const service = document.querySelector(".our-service")
const waiting = document.querySelector("#x-call")

service.addEventListener('click', () => {
     waiting.scrollIntoView({ behavior: 'smooth' });   
})

// service.addEventListener("click", () => {
//     if (waiting.classList.contains("quality-service")){
//         waiting.classList.remove("quality-service")
//         here.style.display="none"
//     }
// })
  
  

// const gallerySlider = document.querySelector('.gallery-slider');
// const image = document.querySelectorAll('.gallery-slider img');
// const sliderWidth = gallerySlider.offsetWidth;
// let currentSlide = 0;

// // Calculate the total width of the slider
// const totalSlides = image.length;
// const totalWidth = sliderWidth * totalSlides;

// // Set the initial slider width
// gallerySlider.style.width = `${totalWidth}px`;

// // Animate the slider
// setInterval(() => {
//   currentSlide++;
//   if (currentSlide >= totalSlides) {
//     currentSlide = 0;   
//   }
//   // else{
//   //   currentSlide = ToggleEvent
//   // }
//   gallerySlider.style.transform = `translateX(-${currentSlide * sliderWidth}px)`;
// }, 3000); // adjust the interval time

const reveal = () => {
    var reveals = document.querySelectorAll('.reveal')
    for (var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight
    var revealtop = reveals[i].getBoundingClientRect().top
    var revealpoint = 50
    if (revealtop < windowheight - revealpoint){
        reveals[i].classList.add('showAnim')
    }
    else{
        reveals[i].classList.remove('showAnim')
    }
    }
}
window.addEventListener('scroll', reveal)
