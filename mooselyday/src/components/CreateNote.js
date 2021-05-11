import React, { Fragment, useState } from "react";
import { db } from "../firebase";
import NoteWall from "./NoteWall";

const CreateNote = () => {
  const [note, setNote] = useState({ title: "", text: "" });

  const handleChangeNoteTitle = (title) => {
    setNote({ ...note, title: title.target.value });
  };

  const handleChangeNoteText = (text) => {
    setNote({ ...note, text: text.target.value });
  };

  const handleSubmitNoteFirebase = (dataNote, title, text) => {
    db.collection("myDailyNote")
      .add(dataNote)
      .then(function () {
        NoteWall();
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
          onChange={handleChangeNoteTitle}
          className="myNoteUntitle"
          type="text"
          name="title"
          placeholder="Pon el titulo"
        />
      </div>
      <div>
        <input
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
      <div className="noteContainer" />
    </Fragment>
  );
};

export default CreateNote;
