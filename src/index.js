import createParallaxScroll from './scripts/hero/parallax';
import createDropdownEffect from './scripts/header/dropdown';

window.onload = () => {

  createParallaxScroll(".parallax-img", 0.4);

  const dropdownButtons = document.getElementsByClassName("dropdown-button");

  for (let i = 0; i < dropdownButtons.length; i++) {
    const element = dropdownButtons[i];
    createDropdownEffect(element);
  }

  const header = document.querySelector("header");
  
  window.onscroll = () => {
    const distance = window.scrollY;
  
    if (distance > 0) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
  };

  window.onclick = (e) => {
    if (!e.target.matches(".dropdown-button")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.parentElement.classList.contains("show")) {
          openDropdown.parentElement.classList.remove("show");
        }
      }
    }
  };

};
