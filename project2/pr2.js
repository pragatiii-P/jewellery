gsap.registerPlugin(ScrollTrigger);

function locomotiveScroll(){
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        smartphone: { smooth: true },
        getDirection: true
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
}

locomotiveScroll();

var dot = document.querySelector("#main");

dot.addEventListener("mousemove",function(dets){
    document.querySelector("#circle").style.top=`${dets.y}px`;
    document.querySelector("#circle").style.left=`${dets.x}px`;

})
        
var flag = 0;

document.querySelector("#sign").addEventListener("click", function(){
    if(flag===0){
        document.querySelector("#overlay").style.top = "0%";
        flag=1;
    }
    else{
        document.querySelector("#overlay").style.top= "-100%";
        flag= 0;
    }
})

function sec1(){
gsap.from('#section1',{
    scrollTrigger:{
        scroller:"#section1",
        trigger:"#part1",
    },
    y:1000,
    width:0,
    duration: 2,
    opacity: 0,
    ease:Expo.easeInOut
})

gsap.from('#part1>h1',{
    y:100,
    duration: 3,
    delay:1,
    opacity: 0,
    ease:Expo.easeInOut
})
gsap.from('#summer',{
    x:20,
    duration: 2,
    delay:1,
    opacity: 0,
    ease:Expo.easeInOut
})
}
sec1();

function sec3(){
    gsap.from('#section3',{
        scrollTrigger:{
            scroller:"#section3",
            trigger:"#section3>h1",
            // markers:true,
            // start:"top 60%",
            // end:"top 20%"
        },
        x:10,
        duration:4,
        delay:2,
        opacity:0,
        ease:Expo.easeInOut
    })
}
sec3();

function sec5(){
    gsap.from('#section5',{
        scrollTrigger:{
            scroller:"#section>span",
            trigger:"#span",
            // markers:true,
            
        },
        y:10,
        // duration:1,  
        // delay:2,
        opacity:0,
        ease:Expo.easeInOut
    })
}
sec5();

// gsap.from('#section5',{
//     scrollTrigger:{
//         scroller:"#section5",
//         trigger:"#gol",
//         // markers:true,
//         start:"top 10%",
//         end:"top 80%"
//     },
//     y:100,
//     // duration:,
//     delay:2,
//     opacity:0,
//     ease:Expo.easeInOut
// })



