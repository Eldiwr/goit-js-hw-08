// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

const createGallerry = galleryItems.map(({ preview, description, original }) =>
    `<div class="gallery"><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></div>`
).join('');

galleryRef.insertAdjacentHTML('afterbegin', createGallerry);

galleryRef.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  
  event.preventDefault();
  
  if (event.target.nodeName !== 'IMG'){
    return
  }
}

 const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,	
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: 250,
 });
