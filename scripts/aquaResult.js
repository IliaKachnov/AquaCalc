const openNameModal = document.getElementById('open__details');
const closeNameModal = document.getElementById('popup__details-cross');
const closeNameModalArrow = document.getElementById('popup__details-arrow');
const modalName = document.querySelector('.popup__details');

document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.querySelector('.aquaResult__call-input.tel')
  const maskOptions = { 
    mask: '+{7}(000)000-00-00'
  }
  IMask(inputElement, maskOptions) 
})


document.addEventListener('DOMContentLoaded', function() {
  const wrappers = document.querySelectorAll('.aquaResult__call-input-wrapper');

  function checkInput(wrapper) {
      const input = wrapper.querySelector('.aquaResult__call-input');
      const required = wrapper.querySelector('.aquaResult__call-required');
      
      if (input.value.trim() !== '') {
          required.classList.add('active')
      } else {
          required.classList.remove('active');
      }
  }

  wrappers.forEach(function(wrapper) {
      const input = wrapper.querySelector('.aquaResult__call-input');

      input.addEventListener('focus', function() {
          wrapper.querySelector('.aquaResult__call-required').classList.add('active');
          input.classList.add('active');
      });

      input.addEventListener('input', function() {
          checkInput(wrapper);
          
      });

      input.addEventListener('blur', function() {
          checkInput(wrapper);
      });
  });
});

const swiper = new Swiper(".mySwiperAqua", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.addEventListener('DOMContentLoaded', function() {
  const aquaHeader = document.querySelector('.popup__details-header');
  const aquaBody = document.querySelector('.popup__details');

  aquaBody.addEventListener('scroll', function() {
      if (aquaBody.scrollTop > 0) {
        aquaHeader.classList.add('active');
      } else {
        aquaHeader.classList.remove('active');
      }
  });
});

openNameModal.addEventListener('click', () => {
  modalName.classList.add('open');
  document.body.style.overflow = 'hidden';
});

closeNameModal.addEventListener('click', () => {
  modalName.classList.remove('open')
  document.body.style.overflow = 'visible';
});

closeNameModalArrow.addEventListener('click', () => {
  modalName.classList.remove('open')
  document.body.style.overflow = 'visible';
});

