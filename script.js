window.addEventListener("DOMContentLoaded", () => {

    let splitedH1 = SplitText.create("#title", {
        type: "words"
    });

    let splitedP = SplitText.create("#text", {
        type: "words",
        wordsClass: "word++"
    });

    let loaderText = SplitText.create("#loaderText", {
        type: "words",
        mask: "words"
    });

    let tl = gsap.timeline();

    tl.from(loaderText.words, {
        duration: 1,
        y: 100,
        stagger: 0.5,
        onComplete: () => loaderText.revert()
    })
    .to("#loaderText", {
        duration: 2,
        ease: "power4.out",
        yoyo: true,
        scale: 11

    })
    .to("#loader", {
        duration: 3,
        y: "-400%",
        yoyo: true
    }, "-=0.8")
    .from(splitedH1.words, {
        duration: 4,
        y: -100,
        opacity: 0,
        stagger: 0.5,
        ease: "power4.inOut",
        onComplete: () => splitedH1.revert()
    }, "-=3.2")
    .from(splitedP.words, {
        duration: 5,
        y: 100,
        opacity: 0,
        stagger: 0.05,
        ease: "power4.inOut",
        onComplete: () => splitedP.revert()
    }, "-=3.5")
})