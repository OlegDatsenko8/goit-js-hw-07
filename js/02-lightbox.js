import { galleryItems } from "./gallery-items.js";
// Change code below this line
const divGallery = document.querySelector(".gallery");
const markup = makeGallery(galleryItems);

divGallery.insertAdjacentHTML("afterbegin", markup);

function makeGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
                  <a class="gallery__item" href="${original}">
                     <img
                       class="gallery__image"
                       src="${preview}"
                       alt="${description}"   
                       />
                       </a>
                       </li> `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
