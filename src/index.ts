import "./styles/index.css";

const searchInput: HTMLInputElement = document.querySelector(
  ".js-search-input"
);
const clearBtn: HTMLElement = document.querySelector(".js-clear-btn");

clearBtn.addEventListener("click", (e: Event): void => {
  e.preventDefault();
  console.log(searchInput);
  searchInput.value = "";
});
