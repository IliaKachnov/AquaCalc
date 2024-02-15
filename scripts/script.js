window.addEventListener('DOMContentLoaded', function() {
  const myList = document.querySelector('.tab-list.short ul');
  const lis = myList.getElementsByTagName('li');
  const numberOfItems = lis.length;

  function updateJustifyContent() {
    if (numberOfItems <= 6) {
      myList.style.justifyContent = 'center';
    } else {
      myList.style.justifyContent = 'flex-start';
    }
  }

  updateJustifyContent();

  window.addEventListener('resize', updateJustifyContent);
});