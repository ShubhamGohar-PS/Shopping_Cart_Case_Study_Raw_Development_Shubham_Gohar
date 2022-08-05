import '../../styles/main.scss'

import Navigation from '../components/navigation'
import Footer from '../components/footer';
import Cart from '../components/cart';
import RegisterForm from '../components/registerForm';

class App{
    static init(){
        const body = document.querySelector('body')
        body.id = 'registerBody'
        const backdrop = document.createElement('div')
        backdrop.className = 'backdrop'
        body.append(backdrop)
        new Navigation('registerBody')
        new Cart('mini-cart')
        new RegisterForm('registerBody')
        new Footer('registerBody')
    }
    
}

App.init()