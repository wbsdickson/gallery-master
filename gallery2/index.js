

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
    content: "#content",
    smooth: 3,
    effects: true
});

smoother.effects("img", { speed: "auto" });
