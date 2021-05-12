import React, { Fragment, useState } from "react";
import { db } from "../firebase";

const CreateNote = () => {
  const [note, setNote] = useState({ title: "", text: "" });

  const handleChangeNoteTitle = (title) => {
    setNote({ ...note, title: title.target.value });
  };

  const handleChangeNoteText = (text) => {
    setNote({ ...note, text: text.target.value });
  };

  const handleSubmitNoteFirebase = (dataNote, title, text) => {
    // usa un if == ""
    db.collection("myDailyNote")
      .add(dataNote)
      .then(function () {
        setNote({ title: "", text: "" });
      })
      .catch((err) => {
        alert("Error : ", err);
        console.error(err);
      });
  };

  return (
    <Fragment>
      <div className="note">
        <input
          value={note.title}
          onChange={handleChangeNoteTitle}
          className="myNoteUntitle"
          type="text"
          name="title"
          placeholder="Pon el titulo"
        />
      </div>
      <div>
        <input
          value={note.text}
          onChange={handleChangeNoteText}
          className="myNoteText"
          type="text"
          name="text"
          placeholder="Escribe..."
        />
      </div>
      <button
        type="button"
        className="buttonSave"
        onClick={() => {
          handleSubmitNoteFirebase(note);
        }}
      >
        SAVE
      </button>
    </Fragment>
  );
};

export default CreateNote;
