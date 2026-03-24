import { fetchImages } from "./js/pixabay-api.js";
import { renderGallery, clearGallery } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const input = form.querySelector("input");
const loader = document.querySelector(".loader");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const query = input.value.trim();

  if (!query) {
    iziToast.warning({
      message: "Please enter a search query!",
      position: "topRight",
    });
    return;
  }

  clearGallery(); // 🔥 очищення перед новим пошуком
  showLoader();

  try {
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
      });
      return;
    }

    renderGallery(data.hits);
  } catch (error) {
    iziToast.error({
      message: "Something went wrong!",
      position: "topRight",
    });
  } finally {
    hideLoader(); // 🔥 ховаємо завжди
  }
});

function showLoader() {
  loader.classList.add("active");
}

function hideLoader() {
  loader.classList.remove("active");
}