/* Checked by ESLint - https://eslint.org/demo */
import * as storage from "./localStorage.js";

let listFavorites = null;

const showAppTitle = () => {
  // grab the app title
  // update the <title> element and the "title" <div>
  const title = storage.getAppTitle();

  document.querySelector("title").textContent = title;
  document.querySelector(".title").textContent = title;
};

const showFavorites = () => {
  // grab the array of favorites from localStorage and 
  // update `listFavorites`
  const favorites = storage.getFavorites();
  listFavorites.innerHTML = `<ol>${favorites.map(w => `<li>${w}</li>`).join("")}</ol>`;
};

const init = () => {
  showAppTitle();
  listFavorites = document.querySelector("#list-favorites");
  showFavorites();

  /* Event Handlers */
  document.querySelector("#btn-clear-favorites").onclick = () => {
    // get this button working
    storage.clearFavorites();
    showFavorites();
  };

  document.querySelector("#btn-app-preferences").onclick = () => {
    // get this button working
    storage.clearLocalStorage();
    showAppTitle();
    showFavorites();
  };


  // https://developer.mozilla.org/en-US/docs/Web/API/Window/focus_event
  // window.onfocus = () => {
  //   showFavorites();
  //   showAppTitle();
  // };

  // even better!
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/storage_event
  window.onstorage = () => {
    showFavorites();
    showAppTitle();
  };

};

init();
