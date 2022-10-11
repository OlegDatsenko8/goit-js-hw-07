import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");
const galleryEl = createGallery(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", galleryEl);

function createGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
            <div class="gallery__item">
                <a class="gallery__item" href="${original}">
                    <img 
                    class="gallery__image" 
                    src="${preview}" 
                    alt="${description}" />
                </a>
            </div>
            `;
    })
    .join("");
}

galleryRef.addEventListener("click", onGallery);

function onGallery(event) {
  event.preventDefault();
  const lightbox = new SimpleLightbox(".gallery a", {
    overlayOpacity: 1,
    animationSpeed: 200,
    fadeSpeed: 200,
    captionsData: "alt",
    captionDelay: 250,
    captionPosition: "bottom",
  });
}
