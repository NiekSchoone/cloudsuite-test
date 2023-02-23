function createDropdownEffect(button) {
  const drop = (e) => {
    let listItem = e.target.parentElement;
    listItem.classList.toggle("show");
  };

  button.onclick = drop;
}

export default createDropdownEffect;
