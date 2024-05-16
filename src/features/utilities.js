export function smoothScrollToTop() {
  window.scrollTo({
    behavior: "smooth",
    top: 0,
  });
}

export function snapToTop() {
  window.scrollTo({
    behavior: "auto",
    top: 0,
  });
}
