import Component from '../utility/createComponent'
import Logo from '../../static/images/logo.webp'
import { openMiniCart } from '../utility/cartEventsMobileCatEvent'

class Navigation extends Component{
    constructor(renderHookId){
        super(renderHookId, false)
        this.render()
    }
    render(){
        const NavLinks = [
            {link: 'index.html', name: 'Home'},
            {link: 'products.html', name: 'Products'},
            {link: 'login.html', name: 'Signin'},
            {link: 'signup.html', name: 'Register'},
        ]
        const navBar = this.createRootElement('header', 'navbar')
        const logoDiv = this.createRootElement('div', 'logo-div')
        const logo = this.createRootElement('img', 'logo')
        const h1 = this.createRootElement('h1', 'heading')
        h1.textContent = 'Sabka Bazaar'
        h1.hidden = true
        navBar.append(h1)
        logo.alt = 'Sabka Bazaar'
        logo.src = Logo
        logo.addEventListener('click',()=>{
            window.location.href = 'index.html'
        })
        logoDiv.append(logo)
        navBar.append(logoDiv)
        const mainNav = this.createRootElement('nav', 'main-nav')
        for(let i = 0; i< NavLinks.length && i< 2;i++){
            const mainLink = this.createRootElement('a', 'main-links')
            mainLink.href = NavLinks[i].link
            mainLink.textContent = NavLinks[i].name
            mainNav.append(mainLink)
        }
        logoDiv.append(mainNav)
        const otherLinks = this.createRootElement('div', 'other-links')
        const secondaryNav = this.createRootElement('nav', 'secondary-nav')
        for(let i = 2; i<NavLinks.length ;i++){
            console.log('executing')
            const secondaryLink = this.createRootElement('a', 'secondary-links')
            secondaryLink.href = NavLinks[i].link
            secondaryLink.textContent = NavLinks[i].name
            secondaryNav.append(secondaryLink)
        }
        navBar.append(secondaryNav)
        otherLinks.append(secondaryNav)
        const cartDiv = this.createRootElement('div', 'cart-div')
        cartDiv.id = 'mini-cart'
        cartDiv.addEventListener('click',()=>{
            openMiniCart()
        })
        const iconDiv = this.createRootElement('div', 'icon-div')
        iconDiv.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`
        cartDiv.append(iconDiv)
        const totalItem = localStorage.getItem('TOTAL_ITEM')
        const itemDesc = this.createRootElement('p', 'cart-items')
        itemDesc.textContent =  totalItem!=null ?totalItem + ' items' : 0 + ' items'
        cartDiv.append(itemDesc)
        otherLinks.append(cartDiv)
        navBar.append(otherLinks)
    }

}
export default Navigation