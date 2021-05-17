import React, { useState, useEffect } from "react";
import { db } from "../firebase";

import Notita from "./Notita";

function NoteWall() {
  const [notes, setNotes] = useState();
  // const [editNote, setEditNote] = useState(null);

  const handleGetNote = () => {
    db.collection("myDailyNote").onSnapshot((resultado) => {
      const docs = [];
      resultado.forEach((doc) => docs.push({ id: doc.id, data: doc.data() }));
      setNotes(docs);
    });
  };

  const handleDeleteNote = async (id) => {
    console.log(id, "soyId");
    if (window.confirm("Do you really want to delete it?")) {
      try {
        await db.collection("myDailyNote").doc(id).delete();
      } catch (e) {
        console.log(e);
      }
    }
  };

  // const handleEditNote = async (id) => {
  //   try {
  //     const note = await db.collection("myDailyNote").doc(id).get();
  //     const { title, text } = note.data();

  //     setEditNote(true);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    handleGetNote();
  }, []);

  return (
    <div className="noteContainer">
      {notes &&
        notes.map((unanota) => (
          <Notita
            unanota={unanota}
            handleDeleteNote={handleDeleteNote}
            // handleEditNote={handleEditNote}
            key={unanota.id}
          />
        ))}
    </div>
  );
}

export default NoteWall;
