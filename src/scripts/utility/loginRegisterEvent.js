import DOMPurify from "dompurify";
//password validation check
export const checkConfirmPass = () => {
    const password = document.getElementById("password").value;
    const confirmPass = document.getElementById("confirmPassword").value;
    const message = document.querySelector(".message");
    if (password === confirmPass) {
      message.style.color = "green";
      message.textContent = "Password Matching";
    } else {
      message.style.color = "red";
      message.textContent = "Password Mismatch";
    }
  };
  
  //signup
  export const signUp = (event) => {
    event.preventDefault();
    let allInputs = document.querySelectorAll(".register-input");
    allInputs = Array.from(allInputs);
    console.log(allInputs);
    const newUser = allInputs.reduce(
      (user, input) => ({ ...user, [input.id]: DOMPurify.sanitize(input.value) }),
      {}
    );
    console.log(newUser);
    if (newUser.password === newUser.confirmPassword) {
      window.location.href = "index.html";
    } else {
      alert("Please check your passwords");
    }
  };
  //login
  export const login = (event) => {
    event.preventDefault();
    window.location.href = "index.html";
  };
  