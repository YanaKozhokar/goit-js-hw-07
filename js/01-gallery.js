import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");

function createGalleryMarkup(array) {
  return array
    .map(
      (item) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            />
        </a>
    </div>`
    )
    .join("");
}

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

galleryRef.addEventListener("click", (event) => {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const largeItemUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
      <img src="${largeItemUrl}" width="800" height="600">
  `);
  instance.show();
});
