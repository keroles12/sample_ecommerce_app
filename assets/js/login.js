const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = form.elements.username.value;
  const password = form.elements.password.value;

  const users = getUsersFromCookie();
  const user = users.find((u) => u.username === username && u.password === password);
  setUsersCookie(user);
  if (user) {
    document.location.href="shop.html"
  } else {
    alert('Invalid username or password.');
  }
});

function getUsersFromCookie() {
  const usersCookie = getCookie('users');
  return usersCookie ? JSON.parse(usersCookie) : [];
}
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
       //console.log( cookie.substring(name.length + 1))
      return cookie.substring(name.length + 1);
    }
  }
  return '';
}
function setUsersCookie(user) {
  document.cookie = `user=${JSON.stringify(user)};expires=Fri, 31 Dec 9999 23:59:59 GMT`;
}