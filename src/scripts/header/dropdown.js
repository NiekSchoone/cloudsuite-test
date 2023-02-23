function createDropdownEffect(button) {
  const drop = (e) => {
    let listItem = e.target.parentElement;
    listItem.classList.toggle("show");
  };

  button.onClick = drop;
}

export default createDropdownEffect;
