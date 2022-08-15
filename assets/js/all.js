"use strict";

var scrollContainer = document.querySelector(".item-tag ul");

if (scrollContainer) {
  scrollContainer.addEventListener("wheel", function (evt) {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
  });
}

document.querySelector('[data-bs-toggle="modal"]').onclick = function () {
  return document.querySelector('.navbar-collapse').classList.remove("show");
};
//# sourceMappingURL=all.js.map
