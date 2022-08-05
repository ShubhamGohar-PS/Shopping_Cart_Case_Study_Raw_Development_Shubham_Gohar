import Component from "../utility/createComponent";

class Footer extends Component{
    constructor(renderHookId){
        super(renderHookId, true)
    }
    render(){
        const footer = this.createRootElement('footer', 'footer-div')
        const p = this.createRootElement('p', 'copyright-text')
        p.textContent = 'Copyright © 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd'
        footer.append(p)
    }
}

export default Footer