const followersSelect = document.querySelector("#followers-select");
const followingSelect = document.querySelector("#following-select");
const followersView = document.querySelector("#followers");
const followingView = document.querySelector("#following");

followersSelect.addEventListener("click", () => {
  followingSelect.classList.remove("underline");
  followersSelect.classList.add("underline");
  followingView.classList.add("hidden");
  followingView.classList.remove("flex");
  followersView.classList.add("flex");
  followersView.classList.remove("hidden");
});

followingSelect.addEventListener("click", () => {
  followersSelect.classList.remove("underline");
  followingSelect.classList.add("underline");
  followersView.classList.remove("flex");
  followersView.classList.add("hidden");
  followingView.classList.add("flex");
  followingView.classList.remove("hidden");
});
