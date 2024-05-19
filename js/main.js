gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
    wrapper: '.parent',
    content: '.wrapper',
    effects: true,
})