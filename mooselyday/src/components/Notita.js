export default function Notita({ unanota, handleDeleteNote, handleEditNote }) {
  const { title, text } = unanota.data;
  const id = unanota.id;

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
