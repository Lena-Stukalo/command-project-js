const refs={openModalLink:document.querySelector("[data-open-modal]"),backdrop:document.querySelector(".backdrop")};function openModal(e){e.preventDefault(),refs.backdrop.classList.remove("is-hidden")}function closeModal(e){e.target.classList.contains("backdrop")&&refs.backdrop.classList.add("is-hidden")}refs.openModalLink.addEventListener("click",openModal),refs.backdrop.addEventListener("click",closeModal);
//# sourceMappingURL=library.553042dd.js.map