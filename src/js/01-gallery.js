import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';



const refs = {
  listEl: document.querySelector('.gallery'),
};

refs.listEl.insertAdjacentHTML('beforeend', createAllImgItemList(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: `alt`,
});

function createAllImgItemList(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>
        `;
    })
    .join('');
}
