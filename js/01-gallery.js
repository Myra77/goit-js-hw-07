import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link"
        href="${original}">
         <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
         />
        </a>
        </div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);
// const galleryLinks = galleryEl.querySelectorAll(".gallery__link");

function handleImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `<img 
      src="${event.target.dataset.source}"
      />`
  );
  instance.show();

  const closeModalOnEscape = (event) => {
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", closeModalOnEscape);
    }
  };
  document.addEventListener("keydown", closeModalOnEscape);
}

galleryEl.addEventListener("click", handleImgClick);
