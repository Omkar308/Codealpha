const galleryItems = document.querySelectorAll('.gallery-item');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    popupImg.src = item.src;
    popup.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
