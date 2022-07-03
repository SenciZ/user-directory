import React from "react";
import { useState } from "react";

function EditModal(props) {
  const itemId = document.getElementById("itemId");
  //   console.log(itemId.innerText);
  //Fake line of code
  //new line
  let itemToEdit = props.data;
  console.log(itemToEdit);
  const [input, setInput] = useState({
    id: itemToEdit.id,
    name: { first: itemToEdit.name.first, last: itemToEdit.name.last },
    city: itemToEdit.city,
    country: itemToEdit.country,
    employer: itemToEdit.employer,
    title: itemToEdit.title,
    favoriteMovies: [
      itemToEdit.favoriteMovies[0],
      itemToEdit.favoriteMovies[1],
      itemToEdit.favoriteMovies[2],
    ],
  });
  console.log(input);
  const editHandler = (e) => {
    e.preventDefault();
    props.editDataItem(input);
    e.target.parentNode.classList.add("modalControl");
    itemToEdit = props.currentItem + 1;
  };

  return (
    <div id="modal" className="editModal modalControl">
      <label>
        First Name:
        <input
          type="text"
          onChange={(e) => {
            setInput({
              ...input,
              name: { ...input.name, first: e.target.value },
            });
          }}
          value={input.name.first}
        ></input>
      </label>
      <label>
        Last Name:
        <input
          type="text"
          onChange={(e) => {
            setInput({
              ...input,
              name: { ...input.name, last: e.target.value },
            });
          }}
          value={input.name.last}
        ></input>
      </label>
      <label>
        City:
        <input
          type="text"
          onChange={(e) => {
            setInput({
              ...input,
              city: e.target.value,
            });
          }}
          value={input.city}
        ></input>
      </label>
      <label>
        Country:
        <input
          type="text"
          onChange={(e) => {
            setInput({
              ...input,
              country: e.target.value,
            });
          }}
          value={input.country}
        ></input>
      </label>
      <label>
        Employer:
        <input
          type="text"
          onChange={(e) => {
            setInput({
              ...input,
              employer: e.target.value,
            });
          }}
          value={input.employer}
        ></input>
      </label>
      <button onClick={editHandler}>EDIT</button>
    </div>
  );
}

export default EditModal;
