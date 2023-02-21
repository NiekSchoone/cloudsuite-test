import "./style.scss";

window.onload = () => {
  console.log("onload");

  const drop = (e) => {
    let listItem = e.target.parentElement;
    listItem.classList.toggle("show");
  };

  const dropdownButtons = document.getElementsByClassName("dropdown-button");

  for (let i = 0; i < dropdownButtons.length; i++) {
    const element = dropdownButtons[i];
    element.onclick = drop;
  }
};

window.onclick = (e) => {
  if (!e.target.matches(".dropdown-button")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      console.log(openDropdown.parentElement);
      if (openDropdown.parentElement.classList.contains("show")) {
        openDropdown.parentElement.classList.remove("show");
      }
    }
  }
};

const header = document.querySelector("header");

window.onscroll = () => {
  const distance = window.scrollY;

  if (distance > 0) {
    header.classList.add("transparent");
  } else {
    header.classList.remove("transparent");
  }

  document.querySelector(".parallax-img").style.transform = `translateY(${
    distance * 0.4
  }px)`;
};
