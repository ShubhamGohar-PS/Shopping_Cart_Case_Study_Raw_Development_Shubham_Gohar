//Banner Slides
let slidePosition = 1

export const plusSlide = (n) =>{
  slideShow(slidePosition += n )
}

export const currentSlide = (n) =>{
  slideShow(slidePosition = n)
}
const slideShow =(n)=>{
  const slides = document.querySelectorAll('.carousel-item')
  const circles = document.querySelectorAll('.dot')
  if(n > slides.length){
    slidePosition = 1
  }
  if(n < 1){
    slidePosition = slides.length
  }
  for(let i = 0; i<slides.length; i++){
    slides[i].style.display = 'none'
  }

  slides[slidePosition -1 ].style.display = 'block'
  slides[slidePosition -1 ].classList.add('carousel-item-visible')
  circles[slidePosition -1].classList.add('selected-dot')
  circles[slidePosition -1].checked = true
}