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
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
            </div>
            `;
    })
    .join("");
}

galleryRef.addEventListener("click", onGallery);

function onGallery(event) {
  event.preventDefault();
  const imgRef = event.target;
  if (imgRef.nodeName !== "IMG") {
    return;
  }

  const modal = basicLightbox.create(`
        <img
        src="${imgRef.dataset.source}"
        width="800" 
        height="600"
    />`);

  modal.show();

  window.addEventListener("keydown", onEscapeClose);

  function onEscapeClose(event) {
    if (event.code === "Escape") {
      modal.close();
    }
  }
}
