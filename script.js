Shery.imageEffect("#back", {
    style: 5,
    config: {
        "a":{"value":2.75,"range":[0,30]},
        "b":{"value":-0.97,"range":[-1,1]},
        "zindex":{"value":-9996999,"range":[-9999999,9999999]},
        "aspect":{"value":1.972020725388601},
        "ignoreShapeAspect":{"value":true},
        "shapePosition":{"value":{"x":0,"y":0}},
        "shapeScale":{"value":{"x":0.5,"y":0.5}},
        "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
        "shapeRadius":{"value":0,"range":[0,2]},
        "currentScroll":{"value":0},
        "scrollLerp":{"value":0.07},
        "gooey":{"value":true},
        "infiniteGooey":{"value":true},
        "growSize":{"value":4,"range":[1,15]},
        "durationOut":{"value":1,"range":[0.1,5]},
        "durationIn":{"value":1,"range":[0.1,5]},
        "displaceAmount":{"value":0.5},
        "masker":{"value":true},
        "maskVal":{"value":1.15,"range":[1,5]},
        "scrollType":{"value":0},
        "geoVertex":{"range":[1,64],"value":1},
        "noEffectGooey":{"value":false},
        "onMouse":{"value":1},
        "noise_speed":{"value":0.15,"range":[0,10]},
        "metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},
        "discard_threshold":{"value":0.68,"range":[0,1]},
        "antialias_threshold":{"value":0,"range":[0,0.1]},
        "noise_height":{"value":0.5,"range":[0,2]},
        "noise_scale":{"value":8.4,"range":[0,100]}
        }, 
        gooey: true
    });

var aTags = document.querySelectorAll('a');
var socialImages = document.querySelectorAll('.footer-socials img');
    
var allElements = [...aTags, ...socialImages];
    
allElements.forEach(function(element){
    element.addEventListener("click", function(event){
        event.stopPropagation();
    });
});


var elems = document.querySelectorAll(".elem");


elems.forEach(function(elem){
    var h1s = elem.querySelectorAll("h1");
    var index = 0;
    var animating = false;

    document.querySelector("#main")
    .addEventListener("click", function(){
        if(!animating){
            animating = true;
            gsap.to(h1s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function(){
                    gsap.set(this._targets[0], {top: "100%"});
                    animating = false;
                }
            });
    
            index === h1s.length - 1 ? (index = 0) :  index++;
    
            gsap.to(h1s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
            });
        }
    });
});  


var div1s = document.querySelectorAll(".div1");


div1s.forEach(function(div1){
    var p1s = div1.querySelectorAll(".p1");
    var index = 0;
    var animating = false;

    document.querySelector("#main")
    .addEventListener("click", function(){
        if(!animating){
            animating = true;
            gsap.to(p1s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function(){
                    gsap.set(this._targets[0], {top: "100%"});
                    animating = false;
                }
            });
    
            index === p1s.length - 1 ? (index = 0) :  index++;
    
            gsap.to(p1s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
            });
        }
    });
});


var div2s = document.querySelectorAll(".div2");

div2s.forEach(function(div2){
    var p2s = div2.querySelectorAll(".p2");
    var index = 0;
    var animating = false;

    document.querySelector("#main")
    .addEventListener("click", function(){
        if(!animating){
            animating = true;
            gsap.to(p2s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function(){
                    gsap.set(this._targets[0], {top: "100%"});
                    animating = false;
                }
            });
    
            index === p2s.length - 1 ? (index = 0) :  index++;
    
            gsap.to(p2s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
            });
        }
    });
});


var div3s = document.querySelectorAll(".div3");

div3s.forEach(function(div3){
    var p3s = div3.querySelectorAll(".p3");
    var index = 0;
    var animating = false;

    document.querySelector("#main")
    .addEventListener("click", function(){
        if(!animating){
            animating = true;
            gsap.to(p3s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function(){
                    gsap.set(this._targets[0], {top: "100%"});
                    animating = false;
                }
            });
    
            index === p3s.length - 1 ? (index = 0) :  index++;
    
            gsap.to(p3s[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
            });
        }
    });
});


var imgs = document.querySelectorAll(".imgdiv");

imgs.forEach(function(imgdiv){
    var images = imgdiv.querySelectorAll(".imgs");
    var index = 0;
    var animating = false;

    document.querySelector("#main")
    .addEventListener("click", function(){
        if(!animating){
            animating = true;
            gsap.to(images[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function(){
                    gsap.set(this._targets[0], {top: "100%"});
                    animating = false;
                }
            });
    
            index === images.length - 1 ? (index = 0) :  index++;
    
            gsap.to(images[index], {
                top: '-=100%',
                ease: Expo.easeInOut,
                duration: 1,
            });
        }
    });
});

document.querySelectorAll('.gmail-div').forEach(div => {
    div.addEventListener('click', () => {
        const copyText = 'Aryansrivastava9d@gmail.com';
        navigator.clipboard.writeText(copyText);
        alert('Gmail is successfully copied');
    });
});