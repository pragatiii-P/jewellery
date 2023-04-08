// gsap.registerPlugin(ScrollTrigger);

// function locomotiveScroll(){
//     const locoScroll = new LocomotiveScroll({
//         el: document.querySelector("#main"),
//         smooth: true,
//         smartphone: { smooth: true },
//         getDirection: true
//     });
    
//     locoScroll.on("scroll", ScrollTrigger.update);
    
//     ScrollTrigger.scrollerProxy("#main", {
//         scrollTop(value) {
//             return arguments.length
//                 ? locoScroll.scrollTo(value, 0, 0)
//                 : locoScroll.scroll.instance.scroll.y;
//         },
//         getBoundingClientRect() {
//             return {
//                 top: 0,
//                 left: 0,
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             };
//         },
//         pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
//     });
    
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
//     ScrollTrigger.refresh();

let flag = 0;

function controller(x){
    flag = flag + x;
    slideshow(flag);
}

slideshow(flag);

function slideshow(num){
    let slides = document.getElementsByClassName('img3');

    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    if(num < 0){
        flag = slides.length-1;
        num = slides.length-1;
    }
    for(let y of slides){
        y.style.display = "none";
    }
    slides[num].style.display = "block";
}