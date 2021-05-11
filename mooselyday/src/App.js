import "./assets/css/App.css";
import cafe from "./assets/img/cafe.jpg";
// Importando componentes
import CreateNote from "./components/CreateNote";

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
        </header>

        <div className="dailySheetContainer"></div>
      </div>
    </div>
  );
}

export default App;
