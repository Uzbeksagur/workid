if (ScrollTrigger.isTouch !== 1) {

	ScrollSmoother.create({
		wrapper: '.parent',
		content: '.wrapper',
		smooth: 1.5,
		effects: true
	})

	let itemsL = gsap.utils.toArray('.galery__left .galery__item')

	itemsL.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: -100 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})

	let itemsR = gsap.utils.toArray('.galery__right .galery__item')

	itemsR.forEach(item => {
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

}