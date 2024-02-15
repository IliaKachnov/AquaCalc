const counterMinus = document.querySelector('.counter__minus');
const counterAmount = document.getElementById('counterAmount');

function decrement() {
  let currentValue = parseInt(counterAmount.textContent);

  if (currentValue > 1) {
    currentValue--;
    counterAmount.textContent = currentValue;

    updateClass();
  }
}

function increment() {
  let currentValue = parseInt(counterAmount.textContent);
  currentValue++;
  counterAmount.textContent = currentValue;

  updateClass();
}

function updateClass() {
  const isActive = parseInt(counterAmount.textContent) > 1;
  counterMinus.classList.toggle('active', isActive);
}

const tabs = document.querySelectorAll('.aquaForm-tab__btn');
const all_content = document.querySelectorAll('.aquaForm__content ');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active');

    let line = document.querySelector('.aquaForm__line');
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px"

    all_content.forEach(content => {content.classList.remove('active')})
    all_content[index].classList.add('active');
  })
  
})


document.addEventListener('DOMContentLoaded', function() {
  const input = document.querySelector('.custom__date');
  const label = document.querySelector('.aquaForm__input');

  input.addEventListener('focus', function() {
      label.classList.add('active');
  });

  input.addEventListener('blur', function() {
      if (!input.value) {
          label.classList.remove('active');
      }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('.aquaForm__input-inner');

  inputs.forEach(function(input) {
      input.addEventListener('focus', function() {
          input.closest('.aquaForm__input').classList.add('active');
      });

      input.addEventListener('blur', function() {
          if (!input.value) {
              input.closest('.aquaForm__input').classList.remove('active');
          }
      });
  });
});





document.addEventListener('load', function() {
  const scrollContainer = document.querySelector('.aquaForm__crumbs');
  scrollContainer.scrollLeft = scrollContainer.scrollWidth;
});