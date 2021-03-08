import React, { useState } from "react";

function CreateArea(props) {
  const [inputNote, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputNote.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={inputNote.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(e) => {
            props.onAdd(inputNote);
            e.preventDefault();
            setNote((prevNote) => {
              return {
                title: "",
                content: ""
              };
            });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
