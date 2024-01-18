import "../App.css";
import TekstBoks from "./TekstBoks";

function App() {
  return (
    <div className=" h-screen bg-slate-800">
      <h1 className=" text-white">Hello </h1>
      <p className="text-white">Dette er en paragraf</p>
      <TekstBoks />
    </div>
  );
}

export default App;
