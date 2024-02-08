import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', { /* options */ });

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createMarkup(array) {
  const imagesList = array.map(({ preview, original, description }) => 
  `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
  `).join('');
  gallery.innerHTML = imagesList;
  
}
createMarkup(galleryItems)


  const instance = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 100,
  });
  
  function handleClick(event) {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      return;
    }
    instance.open(1)
  }