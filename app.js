let circle = $('.rotating-circle')

TweenLite.set(circle, { x: 0, y: 0 });

let tl = new TimelineMax({ repeatDelay: 1 });
tl.to(circle, 1, { rotation: 90, ease: Linear.easeNone }, 0)
tl.to($(".card"), 1, { rotation: "-=90", ease: Linear.easeNone }, 0)

tl.to(circle, 1, { rotation: "+=90", ease: Linear.easeNone, delay: 4 }, 1)
tl.to($(".card"), 1, { rotation: "-=90", ease: Linear.easeNone, delay: 4 }, 1)

tl.to(circle, 1, { rotation: "+=0", ease: Linear.easeNone, delay: 4 }, 2)
tl.to($(".card"), 1, { rotation: "-=0", ease: Linear.easeNone, delay: 4 }, 2)

tl.to(circle, 1, { rotation: "+=90", ease: Linear.easeNone, delay: 4 }, 3)
tl.to($(".card"), 1, { rotation: "-=90", ease: Linear.easeNone, delay: 4 }, 3)

tl.to(circle, 1, { rotation: "+=0", ease: Linear.easeNone, delay: 4 }, 4)
tl.to($(".card"), 1, { rotation: "-=0", ease: Linear.easeNone, delay: 4 }, 4)

tl.to(circle, 1, { rotation: "+=90", ease: Linear.easeNone, delay: 4 }, 5)
tl.to($(".card"), 1, { rotation: "-=90", ease: Linear.easeNone, delay: 4 }, 5)

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
        triggerElement: '.features-section',
        duration: 500,
        triggerHook: 0.09,
    })
    .setTween(tl)
    .setPin('.features-section')
    .addIndicators()
    .addTo(controller);


document.querySelector(".header-green-tag").style.resize = "both";