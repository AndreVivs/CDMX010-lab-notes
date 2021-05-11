import React, { useEffect } from "react";
import { db } from "../firebase";

const NoteWall = () => {
  alert("im Note Wall");
  // mandar a traer la data de la nota de firebase
  // necesito el ID de la nota titulo y texto
  // crear un contenedor donde esa data se ponga.
  const getNoteData = () => {
    db.collection("myDailyNote")
      .get()
      .onSnapshot((note) => {
        const noteData = {
          title: note.title,
          text: note.text,
          id: note.id,
        };
        console.log(noteData);
      });
  };

  return console.log("esta es mi funcion", getNoteData());
};

export default NoteWall;
