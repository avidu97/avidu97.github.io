window.onload = function() {
    var tl = new TimelineLite({ delay: 0.1 }),
        background1 = document.querySelectorAll('.heading-background1'),
        background2 = document.querySelectorAll('.heading-background2'),
        background3 = document.querySelectorAll('.heading-background3'),
        text = document.querySelectorAll('.heading-text');
    heropara = document.querySelectorAll('.hero-para'),
        herobtn = document.querySelectorAll('.hero-btn'),

        tl
        .to(background1, .5, { scaleX: 1 })
        .to(background2, .5, { scaleX: 1 })
        .to(background3, .5, { scaleX: 1 })
        .to(text, 0.1, { opacity: 1 }, "-=0.1")
        .to(background1, 1, { scaleX: 0 })
        .to(background2, 1, { scaleX: 0 })
        .to(background3, 1, { scaleX: 0 })
    gsap.from(heropara, { opacity: 0, duration: 1, delay: 4.5, y: 10 });
    gsap.from(herobtn, { opacity: 0, duration: 1, delay: 5 });







    var textHl = gsap.utils.toArray('.providers-title');

    textHl.forEach(el => {

        var textHider = el.querySelector('.text-hider-fg');
        var textBg = el.querySelector(".text-highlight-bg");

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top bottom",
                markers: false,
            }
        });

        tl
            .to(textBg, 1, { ease: "expo.out", scaleX: 1, delay: 5 })
            .set(textHider, { autoAlpha: 0, })
            .to(textBg, 1, { ease: "expo.out", scaleX: 0, })
    });
}

// ----------------------providers header-----------------------