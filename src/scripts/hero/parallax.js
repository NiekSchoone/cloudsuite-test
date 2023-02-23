function createParallaxScroll(elementSelector, multiplier) {
  window.addEventListener("scroll", (e) => {
    const distance = window.scrollY;

    document.querySelector(elementSelector).style.transform = `translateY(${
      distance * multiplier
    }px)`;
  })
}

export default createParallaxScroll;