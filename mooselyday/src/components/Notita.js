import React from "react";

export default function Notita({ unanota }) {
  const { title, text } = unanota.data;
  return (
    <div>
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
}
