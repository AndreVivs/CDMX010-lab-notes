// import React, { useEffect, useState } from "react";
import { db } from "../firebase";

export default function Notita({ unanota }) {
  const { title, text } = unanota.data;
  const id = unanota.id;

  const handleEditNote = (id) => {
    console.log(id);
    alert("Do you really want to edit?");
    const getNoteEdit = db
      .collection("myDailyNote")
      .doc(id)
      .get()
      .then(function () {
        console.log(getNoteEdit);
      });
  };

  const handleDeleteNote = async (id) => {
    console.log(id);
    if (window.confirm("Do you really want to delete it?")) {
      await db
        .collection("myDailyNotes")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Note deleted");
        })
        .catch((error) => {
          console.error("Error: ", error);
        });
    }
  };

  return (
    <div>
      <strong>{title}</strong>
      <p>{text}</p>
      <button
        type="button"
        className="editButton"
        onClick={() => {
          handleEditNote(id);
        }}
      >
        Edit
      </button>
      <button
        type="button"
        className="editButton"
        onClick={() => {
          handleDeleteNote(id);
        }}
      >
        delete
      </button>
    </div>
  );
}
