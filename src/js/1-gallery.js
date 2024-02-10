import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery");

function createMarkup(array) {
  const imagesList = array.map(({ preview, original, description }) => 
  `
  <li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>
  `).join('');
  gallery.innerHTML = imagesList;
  
}
createMarkup(galleryItems)


new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
  });
  
