import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
let largeItemUrl;

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
  largeItemUrl = event.target.dataset.source;
});
