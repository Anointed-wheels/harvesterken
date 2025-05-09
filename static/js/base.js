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

const links = document.querySelector('.links')

links.addEventListener("click", () => {
    if(links.hrefList.contains("{% url 'hom' %}")){
        links.hrefList.remove("{% url 'hom' %}")
        links.hrefList.add("#")
    }
    else{
        links.hrefList.remove("#")
        links.hrefList.add("{% url 'hom' %}")
    }
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


// const tumbs = () => {
//     var tumbItems = document.querySelectorAll('.tumbs');

//     for (var i = 0; i < tumbItems.length; i++) {
//         var windowheight = window.innerHeight;
//         var tumbtop = tumbItems[i].getBoundingClientRect().top;
//         var revealpoint = 50;

//         if (tumbtop < windowheight - revealpoint) {
//             tumbItems[i].classList.add('showAnim');
//         } else {
//             tumbItems[i].classList.remove('showAnim');
//         }
//     }
// };

const left_reveal = () => {
    var tumbItems = document.querySelectorAll('.tumbs');

    for (var i = 0; i < tumbItems.length; i++) {
        var windowheight = window.innerHeight;
        var tumbtop = tumbItems[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if (tumbtop < windowheight - revealpoint) {
            tumbItems[i].classList.add('showAnim');
        } else {
            tumbItems[i].classList.remove('showAnim');
        }
    }
};

window.addEventListener('scroll', () => {
    reveal();
    tumbs(); // call both on scroll
});

const url = form.getAttribute('data-url');


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const responseBox = document.getElementById('form-response');
    const url = form.getAttribute('data-url');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');  // Get the name from the form

        fetch(url, {
            method: 'POST',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-CSRFToken': formData.get('csrfmiddlewaretoken'),
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            responseBox.innerHTML = `<p class="${data.status}">${data.message}</p>`;

            if (data.status === 'success') {
                alert(`Message sent successfully. Thank you, ${name}!`);
                form.reset();
            }
        })
        .catch(error => {
            responseBox.innerHTML = `<p class="error">Something went wrong.</p>`;
            console.error(error);
        });
    });
});
