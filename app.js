// Get Elements
const container = document.querySelector('#container');
let dynamic = [];

for (let i = 0; i <= 255; i++) {
  dynamic[i] = document.createElement('div');
  dynamic[i].setAttribute('class', `div${i}`);
  container.appendChild(dynamic[i]);
}

function hover(element, className) {
  element.addEventListener('mouseenter', (e) =>
    element.classList.add(className)
  );
  element.addEventListener('mouseleave', (e) =>
    element.classList.remove(className)
  );
}

dynamic.forEach((ele) => {
  const classTest = `.${ele.className}`;
  hover(document.querySelector(classTest), 'div-hover');
});
