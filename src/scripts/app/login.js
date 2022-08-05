import '../../styles/main.scss'
import Navigation from '../components/navigation'
import Footer from '../components/footer';
import Cart from '../components/cart';
import LoginForm from '../components/loginForm';

class App{
    static init(){
        const body = document.querySelector('body')
        body.id = 'loginBody'
        const backdrop = document.createElement('div')
        backdrop.className = 'backdrop'
        body.append(backdrop)
        new Navigation('loginBody')
        new Cart('mini-cart')
        new LoginForm('loginBody')
        new Footer('loginBody')
    }
}
App.init()