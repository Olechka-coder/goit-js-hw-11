import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

export function clearGallery() {
  document.querySelector(".gallery").innerHTML = "";
}

export function createMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="info">
          <p><b>Likes</b> ${likes}</p>
          <p><b>Views</b> ${views}</p>
          <p><b>Comments</b> ${comments}</p>
          <p><b>Downloads</b> ${downloads}</p>
        </div>
      </li>
    `
    )
    .join("");
}

export function renderGallery(images) {
  const gallery = document.querySelector(".gallery");
  gallery.insertAdjacentHTML("beforeend", createMarkup(images));

  lightbox.refresh(); // 🔥 ОБОВ’ЯЗКОВО
}