const scrollContainer = document.querySelector(".item-tag ul");

if(scrollContainer){
    scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });
}

document.querySelector('[data-bs-toggle="modal"]').onclick = () => document.querySelector('.navbar-collapse').classList.remove("show");
