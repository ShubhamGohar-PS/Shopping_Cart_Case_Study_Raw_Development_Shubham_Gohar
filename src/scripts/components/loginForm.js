import Component from "../utility/createComponent";
import { login } from "../utility/loginRegisterEvent";

class LoginForm extends Component{
    constructor(renderHookId){
        super(renderHookId, true)
    }
    render(){
        const main = this.createRootElement('main', 'login-main')
        
        const section = this.createRootElement('section', 'form-section')
        main.append(section)

        const leftDiv = this.createRootElement('div', 'form-left-container')
        section.append(leftDiv)

        const loginHeading = this.createRootElement('h2', 'login-head')
        loginHeading.textContent = 'Login' 
        leftDiv.append(loginHeading)

        const loginDescription = this.createRootElement('p', 'login-desc')
        loginDescription.textContent = 'Get access to your Orders, Wishlist and Recommendations'
        leftDiv.append(loginDescription)

        const rightDiv = this.createRootElement('div', 'form-right-div')
        section.append(rightDiv)

        const form = this.createRootElement('form', 'login-form')
        form.addEventListener('submit',()=>{
            login(event)
        })
        rightDiv.append(form)

        const formGroupEmail = this.createRootElement('div', 'form-group')
        form.append(formGroupEmail)

        const emailInput = this.createRootElement('input', 'login-input')
        emailInput.type = 'email'
        emailInput.id = 'email'
        emailInput.required = true
        formGroupEmail.append(emailInput)

        const emailLabel = this.createRootElement('label', 'login-label')
        emailLabel.textContent = 'Email'
        emailLabel.setAttribute('for','email')
        formGroupEmail.append(emailLabel)

        const formGroupPassword = this.createRootElement('div', 'form-group')
        form.append(formGroupPassword)

        const passwordInput = this.createRootElement('input', 'login-input')
        passwordInput.type = 'password'
        passwordInput.id = 'password'
        passwordInput.pattern = "(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,})"
        passwordInput.title = 'Min 6 chars, at least 1 number and alphabet, no spaces'
        passwordInput.required = true
        formGroupPassword.append(passwordInput)

        const passwordLabel = this.createRootElement('label', 'login-label')
        passwordLabel.textContent = 'Password'
        passwordLabel.setAttribute('for','password')
        formGroupPassword.append(passwordLabel)

        const loginBtnDiv = this.createRootElement('div', 'login-btn-div')
        form.append(loginBtnDiv)

        const loginBtn = this.createRootElement('button', 'login-btn')
        loginBtn.type = 'submit'
        loginBtn.textContent = 'Login'
        
        loginBtnDiv.append(loginBtn)
    }
}
export default LoginForm