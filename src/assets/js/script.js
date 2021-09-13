import 'regenerator-runtime/runtime';
import 'core-js/stable';

const btnSave = document.querySelector('.btns__save');
const btnCopy = document.querySelector('.btns__copy');

const updateHtml = function (data = document.querySelector('.raw').value) {
  document.querySelector('.edited').innerHTML = marked(data);
};

document.addEventListener('keyup', () => {
  updateHtml();
});

btnSave.addEventListener('click', function () {
  localStorage.setItem('data', document.querySelector('.raw').value);
});

btnCopy.addEventListener('click', function () {
  const text = document.querySelector('.raw').value;
  navigator.clipboard.writeText(text);
});

window.addEventListener('load', function () {
  const data = localStorage.getItem('data');
  if (!data) return;

  document.querySelector('.raw').value = data;
  updateHtml();
});
