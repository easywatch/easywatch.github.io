const input = document.querySelector('input');
const td = document.querySelector('iframe');
const src = td.getAttribute('src');
var url = "https://www.youtube.com/embed/";

input.addEventListener('input', updateValue);

function updateValue(e) {
  src.textContent ="url + e.target.value";
}