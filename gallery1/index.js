document.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;

    gsap.to('.row01 .el', {
        x: e.clientX * 40 / 100 - window.innerWidth / 2
    })
    gsap.to('.row02 .el', {
        x: -e.clientX * 40 / 100 + window.innerWidth / 2
    })

})


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
    content: "#content",
    smooth: 3,
    effects: true
});

smoother.effects("img", { speed: "auto" });
