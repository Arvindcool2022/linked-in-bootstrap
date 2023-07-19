// placeholder in sign in page
var elementEmail = document.getElementById("email");
var elementPassword = document.getElementById("password");

function changer(el) {
  el.onchange = function() {
    if (el.value !== el.defaultValue) {
      el.classList.add('filled');
    } else if (el.value === '') {
      el.classList.remove('filled');
    }
  };
}

changer(elementEmail);
changer(elementPassword);
console.log (elementEmail,elementPassword);