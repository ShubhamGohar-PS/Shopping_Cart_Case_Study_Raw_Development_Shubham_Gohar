import Component from "../utility/createComponent";
import { currentSlide, plusSlide} from "../utility/carouselEvent";
import FetchQuery from "../utility/fetchQuery";

class Banner extends Component {
  constructor(renderHookId) {
    super(renderHookId, true);
  }
  
  render() {
    const main = this.createRootElement("main", "main-section");
    const section = this.createRootElement("section", "carousel-section");
    main.append(section)
    const carouselDiv = this.createRootElement("div", "carousel-div");
    section.append(carouselDiv)
    const bannerFetch = new FetchQuery("banners", 'get').fetch();
   
    bannerFetch.then((banners) => {
      
      const carouselDotDiv = this.createRootElement('div', 'carousel-dots')
      for(let i = 0; i < banners.length; i++){
        const carouselItemDiv = this.createRootElement('div', 'carousel-item')
        if(i == 0){
          carouselItemDiv.classList.add('carousel-item-visible')
        }
        carouselDiv.append(carouselItemDiv)

        const carouselImg = this.createRootElement('img', 'carousel-img')
        carouselImg.alt = banners[i].bannerImageAlt
        carouselImg.src = banners[i].bannerImageUrl
        carouselImg.width = '1200'
        carouselImg.height = '300'
        carouselItemDiv.append(carouselImg)

        const carouselDot = this.createRootElement('input', 'dot')
        carouselDot.name ='dot'
        carouselDot.type = 'radio'
        carouselDot.ariaLabel = 'carousel-navigation-dots'
        if(i == 0){
          carouselDot.classList.add('selected-dot')
          carouselDot.setAttribute('checked', true)
        }
        carouselDot.addEventListener('click',()=>{
          currentSlide(i + 1)
        })
        carouselDotDiv.append(carouselDot)
      }
      const carouselActionDiv = this.createRootElement('div','carousel-actions')
      carouselDiv.append(carouselActionDiv)

      const prevButton = this.createRootElement('button','carousel-button-prev')
      prevButton.textContent = 'PREV'
      prevButton.setAttribute('aria-label','Previous')
      prevButton.addEventListener('click',()=>{
        plusSlide(-1)
      })
      carouselActionDiv.append(prevButton)

      const nextButton = this.createRootElement('button', 'carousel-button-next')
      nextButton.textContent = 'NEXT'
      nextButton.setAttribute('aria-label', 'Next')
      nextButton.addEventListener('click',()=>{
        plusSlide(1)
      })
      carouselActionDiv.append(nextButton)
      carouselDiv.append(carouselDotDiv)
    });
  }
}
export default Banner;
