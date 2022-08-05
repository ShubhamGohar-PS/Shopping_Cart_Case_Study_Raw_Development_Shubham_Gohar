import Component from "../utility/createComponent";
import { checkConfirmPass, signUp } from "../utility/loginRegisterEvent";

class RegisterForm extends Component{
    constructor(renderHookId){
        super(renderHookId, true)
    }
    render(){
        const main = this.createRootElement('main', 'register-main')
        
        const section = this.createRootElement('section', 'form-section')
        main.append(section)

        const leftDiv = this.createRootElement('div', 'form-left-container')
        section.append(leftDiv)

        const signupHeading = this.createRootElement('h2', 'register-head')
        signupHeading.textContent = 'Signup' 
        leftDiv.append(signupHeading)

        const signupDescription = this.createRootElement('p', 'register-desc')
        signupDescription.textContent = 'We do not share your personal details with anyone'
        leftDiv.append(signupDescription)

        const rightDiv = this.createRootElement('div', 'form-right-div')
        section.append(rightDiv)

        const form = this.createRootElement('form', 'register-form')
        form.addEventListener('submit',()=>{
            signUp(event)
        })
        rightDiv.append(form)

        const formGroupFirstName = this.createRootElement('div', 'form-group')
        form.append(formGroupFirstName)

        const firstNameInput = this.createRootElement('input', 'register-input')
        firstNameInput.type = 'text'
        firstNameInput.id = 'firstName'
        firstNameInput.required = true
        formGroupFirstName.append(firstNameInput)

        const firstNameLabel = this.createRootElement('label', 'register-label')
        firstNameLabel.textContent = 'First Name'
        firstNameLabel.setAttribute('for','firstName')
        formGroupFirstName.append(firstNameLabel)

        const formGroupLastName = this.createRootElement('div', 'form-group')
        form.append(formGroupLastName)

        const lastNameInput = this.createRootElement('input', 'register-input')
        lastNameInput.type = 'text'
        lastNameInput.id = 'lastName'
        lastNameInput.required = true
        formGroupLastName.append(lastNameInput)

        const lastNameLabel = this.createRootElement('label', 'register-label')
        lastNameLabel.textContent = 'Last Name'
        lastNameLabel.setAttribute('for','lastName')
        formGroupLastName.append(lastNameLabel)

        const formGroupEmail = this.createRootElement('div', 'form-group')
        form.append(formGroupEmail)

        const emailInput = this.createRootElement('input', 'register-input')
        emailInput.type = 'email'
        emailInput.id = 'email'
        emailInput.required = true
        formGroupEmail.append(emailInput)

        const emailLabel = this.createRootElement('label', 'register-label')
        emailLabel.textContent = 'Email'
        emailLabel.setAttribute('for','email')
        formGroupEmail.append(emailLabel)

        const formGroupPassword = this.createRootElement('div', 'form-group')
        form.append(formGroupPassword)

        const passwordInput = this.createRootElement('input', 'register-input')
        passwordInput.type = 'password'
        passwordInput.id = 'password'
        passwordInput.required = true
        passwordInput.pattern = "(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,})"
        passwordInput.title = 'Min 6 chars, at least 1 number and alphabet, no spaces'
        formGroupPassword.append(passwordInput)

        const passwordLabel = this.createRootElement('label', 'register-label')
        passwordLabel.textContent = 'Password'
        passwordLabel.setAttribute('for', 'password')
        formGroupPassword.append(passwordLabel)

        const formGroupConfirmPassword = this.createRootElement('div', 'form-group')
        form.append(formGroupConfirmPassword)

        const confirmPasswordInput = this.createRootElement('input', 'register-input')
        confirmPasswordInput.type = 'password'
        confirmPasswordInput.id = 'confirmPassword'
        confirmPasswordInput.required = true
        confirmPasswordInput.addEventListener('keyup',()=>{
            checkConfirmPass()
        })
        formGroupConfirmPassword.append(confirmPasswordInput)

        const confirmPasswordLabel = this.createRootElement('label', 'register-label')
        confirmPasswordLabel.textContent = 'Confirm Password'
        confirmPasswordLabel.setAttribute('for', 'confirmPassword')
        confirmPasswordLabel.style.display = 'flex'
        confirmPasswordLabel.style.justifyContent = 'space-between'
        formGroupConfirmPassword.append(confirmPasswordLabel)

        const confirmPasswordSpan = this.createRootElement('span', 'message')
        confirmPasswordLabel.append(confirmPasswordSpan)

        const registerBtnDiv = this.createRootElement('div', 'register-btn-div')
        form.append(registerBtnDiv)

        const signupBtn = this.createRootElement('button', 'register-btn')
        signupBtn.type = 'submit'
        signupBtn.textContent = 'Signup'
        
        registerBtnDiv.append(signupBtn)
    }
}

export default RegisterForm