let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour, monde !';

console.log(multiply(4,7));

document.querySelector('html').addEventListener('click', function() {
    alert('Attaque de zombies !!!');
});
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }