// const title = document.querySelector(".javascript h2")
// window.addEventListener('scroll', ()=> {
//     const size = title.getBoundingClientRect()
//     if(size.top < window.innerHeight/4){
//         title.style.background='red'
//     }
// })

// const img = document.querySelector(".git img")
// const options = {
//     threshold: 0.5,
// }
// const observer = new IntersectionObserver(animate,options)
// function animate(entries){
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             img.style.transition = 'transform .5s ease-in'
//             img.style.transform = 'scale(2)'
//         }
//         else{
//             img.style.transition = 'transform .5s ease-in'
//             img.style.transform = 'scale(1)'
//         }
//     })
// }
// observer.observe(img)

// const controller = new ScrollMagic.Controller()
//
// const scene = new ScrollMagic.Scene({
//     triggerElement: '.git',
//     triggerHook: 0.5,
// })
//     .addIndicators()
//     .setClassToggle('.git', 'active')
//     .addTo(controller)
