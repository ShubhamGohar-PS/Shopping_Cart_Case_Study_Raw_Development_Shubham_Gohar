import '../../styles/main.scss'
import Navigation from '../components/navigation'
import Footer from '../components/footer';
import ProductListing from '../components/productListing';
import Cart from '../components/cart';

class App{
  static init(){
    const body = document.querySelector('body')
    body.id = 'productRoot'
    const backdrop = document.createElement('div')
    backdrop.className = 'backdrop'
    body.append(backdrop)
    new Navigation('productRoot')
    const main = document.createElement("main");
    main.className = 'product-main-container'
    body.append(main)
    
    new ProductListing('productRoot')
    new Cart('mini-cart')

    new Footer('productRoot')
  }
}
App.init()
