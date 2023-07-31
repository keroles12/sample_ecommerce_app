
const form = document.getElementById('registrationForm');
var btn=document.getElementById("btn");
const users = getExistingUsers();
form.addEventListener('submit', e => {

  const username = form.elements.username.value;
  const password = form.elements.password.value;
  const email = form.elements.email.value;
  console.log(validateInputs())
 if(validateInputs()==true){
  const user = { username, password, email };
  users.push(user);
  setUsersCookie(users);
  window.location.href = 'login.html';
 }
e.preventDefault();
 
});

const setError = (element, message) => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');

errorDisplay.innerText = message;
inputControl.classList.add('error');
inputControl.classList.remove('success')
}

const setSuccess = element => {
const inputControl = element.parentElement;
const errorDisplay = inputControl.querySelector('.error');

errorDisplay.innerText = '';
inputControl.classList.add('success');
inputControl.classList.remove('error');
};

const isValidEmail = email => {
const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
const usernameValue = username.value;
const emailValue = email.value;
const passwordValue = password.value;
if(usernameValue === '') {
  setError(form.elements.username, 'Username is required');
} else {
  setSuccess(form.elements.username);
}

if(emailValue === '') {
  setError(form.elements.email, 'Email is required');
} else if (!isValidEmail(emailValue)) {
  setError(form.elements.email, 'Provide a valid email address');
} else {
  setSuccess(form.elements.email);
}

if(passwordValue === '') {
  setError(form.elements.password, 'Password is required');
} else if (passwordValue.length < 8 ) {
  setError(form.elements.password, 'Password must be at least 8 character.')
} else {
  setSuccess(form.elements.password);
}


if(usernameValue===""||emailValue===""||passwordValue===""||passwordValue.length<8)
 {
  return false
 }
 else
 {
 
   return true
 }
}




function getExistingUsers() {
  const usersCookie = getCookie('users');
  return usersCookie ? JSON.parse(usersCookie) : [];
}

function setUsersCookie(users) {
  document.cookie = `users=${JSON.stringify(users)};expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}

function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return cookie.substring(name.length + 1);
    }
  }
  return '';
}
