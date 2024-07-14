const shrek = document.querySelector("#shrek");
shrek.addEventListener('click', function(){
    window.open(`https://clumsy-delicate-polyester.glitch.me `,`_blank`);
})
const santa = document.querySelector("#santa");
santa.addEventListener('click', function(){
    window.open(`https://river-royal-squid.glitch.me`,`_blank`);
})
const lisa = document.querySelector("#lisa");
lisa.addEventListener('click', function(){
    window.open(`https://yielding-eminent-clam.glitch.me`,`_blank`);
})
const meditation = document.querySelector("#meditation");
meditation.addEventListener('click', function(){
    window.open(`https://radial-nifty-stetson.glitch.me`,`_blank`);
})
const weather = document.querySelector("#weather");
weather.addEventListener('click', function(){
    window.open(`https://available-goofy-dogsled.glitch.me `,`_blank`);
})

const met = document.querySelector("#met");
met.addEventListener('click', function(){
    window.open(` https://obsidian-sprout-adjustment.glitch.me`,`_blank`);
})
const pancakes = document.querySelector("#pancakes");
pancakes.addEventListener('click', function(){
    window.open(` https://hammerhead-marble-chasmosaurus.glitch.me
    `,`_blank`);
})

let colors = ["#AEDEFC","#FFDFDF","#F875AA"];
const btn = document.querySelector('#btn > span');
btn.addEventListener(`click`, function(){
    btn.innerHTML =
    (btn.innerHTML === 'Beauty mod?') ? btn.innerHTML = '🌸' : btn.innerHTML = 'Beauty mod?';



    gsap.to("body",{backgroundColor:function(i){
        return colors [1%3]
    }})
    let color = ["#F875AA"]
    gsap.to("p",{color:function(i){
        return color
    }})
    


    let colorr = ["#CDF5FD"]
    gsap.to("#btn",{backgroundColor:function(i){
        return colorr
    }})
    gsap.to("#main",{y: 60, duration:3, ease:"power1.out"})

    gsap.from("#one",{y:-230, duration:4,ease:"elastic.out(1,0.3)"})

    gsap.from("#two", {y:-230, duration:4,ease:"elastic.out(1,0.3)"})

    gsap.from("#three", {y:-230, delay:2,duration:5,ease:"elastic.out(1,0.3)"})

    gsap.from("#four", {y:-250,delay:2, duration:5,ease:"elastic.out(1,0.3)"})

    gsap.from("#five", {y:-250,delay:4, duration:4,ease:"elastic.out(1,0.3)"})
    
    gsap.from("#six", {y:-250,delay:4, duration:4,ease:"elastic.out(1,0.3)"})

    gsap.to("#seven", {y:-250,delay:5, duration:4,ease:"steps(12)"})

    const pe = document.querySelector("p")
    pe.classList.add("peter")

    const btnn = document.querySelector(".btn")
    btnn.classList.add("grad")

})

let text = 'I am a web developer';
let i =0;
let speed = 90;

function type() {
    if (i < text.length) {
        document.querySelector(".promm").textContent += text.charAt(i);
        i++;
        setTimeout(type,speed);
    }
}
type();


