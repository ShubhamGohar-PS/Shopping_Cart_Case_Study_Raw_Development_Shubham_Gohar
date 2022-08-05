import Component from "../utility/createComponent";
import { closeMiniCart } from "../utility/cartEventsMobileCatEvent";

class Cart extends Component{
    constructor(renderHookId){
        super(renderHookId, true)
    }
   
    render(){

        const cartContainer = this.createRootElement('div', 'cart-container ')

        const cartHead = this.createRootElement('div', 'cart-head')
        cartContainer.append(cartHead)

        const totalItem = this.createRootElement('h4', 'total-item')
        totalItem.textContent = 'My Cart (0 item)'
        cartHead.append(totalItem)

        const closeBtn = this.createRootElement('button', 'close-btn')
        closeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        closeBtn.title = 'Close Cart'
        closeBtn.addEventListener('click',(event)=>{
            event.stopPropagation();
            closeMiniCart()
        })
        cartHead.append(closeBtn)

        const contentDiv = this.createRootElement('div', 'content-div')
        cartContainer.append(contentDiv)

        const checkoutDiv = this.createRootElement('div', 'checkout-div')
        cartContainer.append(checkoutDiv)

        const promoDesc = this.createRootElement('p', 'promo-desc')
        promoDesc.textContent = 'Promo code can be applied on payment page'
        checkoutDiv.append(promoDesc)

        const checkoutBtn = this.createRootElement('button', 'checkout-button')
        checkoutBtn.addEventListener('click',(event)=>{
            event.stopPropagation();
            closeMiniCart()
        })
        checkoutDiv.append(checkoutBtn)

        const proceedDescSpan = this.createRootElement('span')
        proceedDescSpan.textContent = 'Proceed to Checkout'
        checkoutBtn.append(proceedDescSpan)

        const cartTotalSpan = this.createRootElement('span', 'cart-total')
        cartTotalSpan.textContent = 'Rs.187 >'
        checkoutBtn.append(cartTotalSpan)
        const startShoppingBtn = this.createRootElement('button','start-shopping')
        startShoppingBtn.addEventListener('click',(event)=>{
            event.stopPropagation()
            closeMiniCart()
        })
        startShoppingBtn.textContent = 'Start Shopping'
        checkoutDiv.append(startShoppingBtn)        
        
    }
}

export default Cart