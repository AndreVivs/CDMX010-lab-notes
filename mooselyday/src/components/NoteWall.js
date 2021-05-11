import React, { useState, useEffect } from "react";
import { db } from "../firebase";

import Notita from "./Notita";

function NoteWall() {
  const [notes, setNotes] = useState();

  const handleGetNote = () => {
    db.collection("myDailyNote").onSnapshot((resultado) => {
      const docs = [];
      resultado.forEach((doc) => docs.push({ id: doc.id, data: doc.data() }));
      setNotes(docs);
    });
  };
  // estudiar la lista de dependencias que se ejecutan con los []
  useEffect(() => {
    handleGetNote();
  }, []);

  // ayuda; invetigar && y la relacion que tiene con el renderizado
  return (
    <div className="noteContainer">
      {notes &&
        notes.map((unanota) => <Notita unanota={unanota} key={unanota.id} />)}
    </div>
  );
}

export default NoteWall;
