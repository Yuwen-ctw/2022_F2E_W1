import './scss/index.scss'

gsap.registerPlugin(ScrollTrigger, TextPlugin, CustomEase)
// banner section
gsap.to('.marquee__words', {x:-628, duration: 6.28, repeat: -1, ease: 'none'})

// propose section
function proposeCardTrigger(selector, direction) {
  function bounce () {
    gsap.from(selector, {
      ease: CustomEase.create("custom", "M0,0 C0.215,0.61 0.355,1 1,1 "),
      keyframes: [
        {x: 3000 * direction, duration: 0.1, scaleX: 3, opacity: 1},
        {x: -25 * direction, duration: 1.2, scaleX: 1},
        {x: 10 * direction, duration: 0.15, scaleX: 0.98},
        {x: -5 * direction, duration: 0.15, scaleX: 0.995},
        {x:0, duration:0.15, scaleX: 1}
      ]
    })
  }

  ScrollTrigger.create({
    trigger: selector,
    onEnter: bounce,
  })
}
const proposeCards = document.querySelectorAll('.propose__card')
proposeCards.forEach((card, index) => {
  const direction = index % 2 === 0 ? 1 : -1
  proposeCardTrigger(card, direction)
})

// schedule section
function scheduleTrigger(selector, direction) {
  function flow() {
    gsap.fromTo(
      selector,
      { opacity: 0, xPercent: -100 * direction},
      { opacity: 1, xPercent: 0 , duration: 1})
  }

  ScrollTrigger.create({
    trigger: selector,
    onEnter: flow,
  })
}

const scheduleFlows = document.querySelectorAll('.schedule__flow')
scheduleFlows.forEach( (flow, index) => {
  const direction = index % 2 === 0 ? 1 : -1
  scheduleTrigger(flow, direction)
})