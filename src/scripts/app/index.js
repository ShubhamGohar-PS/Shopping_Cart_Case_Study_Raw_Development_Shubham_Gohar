import '../../styles/main.scss'
import Navigation from '../components/navigation'
import Banner from '../components/banner';
import Categories from '../components/categories';
import Footer from '../components/footer';
import Cart from '../components/cart';


class App{
  static banner
  static init(){
    const body = document.querySelector('body')
    body.id = 'root'
    const backdrop = document.createElement('div')
    backdrop.className = 'backdrop'
    body.append(backdrop)
    new Navigation('root')
    this.banner = new Banner('root') 
    new Cart('mini-cart')
    new Categories('root')
    new Footer('root')
  }
}
App.init()

export default App