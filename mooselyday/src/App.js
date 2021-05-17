import "./assets/css/App.css";
import cafe from "./assets/img/cafe.jpg";
// Importando componentes
import CreateNote from "./components/CreateNote";
import NoteWall from "./components/NoteWall";
import Notita from "./components/Notita";

function App() {
  return (
    <div className="contenedorGeneral">
      <div className="contenedorSecundario">
        <header>
          <button className="buttonSingUp" id="singup">
            SING UP
          </button>
          <div>
            <img alt="imagen de fondo" className="mainImg" src={cafe} />
          </div>
          <CreateNote />
          <NoteWall />
        </header>
      </div>
    </div>
  );
}

export default App;
