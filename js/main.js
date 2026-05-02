// Mobile menu
const burgerButton = document.querySelector("#burgerButton");
const mainNav = document.querySelector("#mainNav");

if (burgerButton && mainNav) {
  burgerButton.addEventListener("click", () => {
    const isOpen = burgerButton.classList.toggle("is-open");
    mainNav.classList.toggle("is-open", isOpen);
    burgerButton.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      burgerButton.classList.remove("is-open");
      mainNav.classList.remove("is-open");
      burgerButton.setAttribute("aria-expanded", "false");
    });
  });
}

// Drag-to-scroll for reviews on desktop.
const reviewsSlider = document.querySelector("#reviewsSlider");

if (reviewsSlider) {
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  reviewsSlider.addEventListener("pointerdown", (event) => {
    isDown = true;
    startX = event.clientX;
    scrollLeft = reviewsSlider.scrollLeft;
    reviewsSlider.classList.add("is-dragging");
    reviewsSlider.setPointerCapture(event.pointerId);
  });

  reviewsSlider.addEventListener("pointermove", (event) => {
    if (!isDown) return;
    const distance = event.clientX - startX;
    reviewsSlider.scrollLeft = scrollLeft - distance;
  });

  function stopDrag(event) {
    isDown = false;
    reviewsSlider.classList.remove("is-dragging");

    if (event && reviewsSlider.hasPointerCapture(event.pointerId)) {
      reviewsSlider.releasePointerCapture(event.pointerId);
    }
  }

  reviewsSlider.addEventListener("pointerup", stopDrag);
  reviewsSlider.addEventListener("pointercancel", stopDrag);
  reviewsSlider.addEventListener("pointerleave", stopDrag);
  reviewsSlider.addEventListener("dragstart", (event) => event.preventDefault());
}
