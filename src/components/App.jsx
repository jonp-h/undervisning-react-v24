import "../App.css";
import Card from "./Card";
import TekstBoks from "./TekstBoks";

function App() {
  return (
    <div className=" grid grid-cols-3 pt-5 h-screen bg-slate-800">
      {/* <h1 className=" text-white">Hello </h1>
      <p className="text-white">Dette er en paragraf</p>
      <h2 className=" text-blue-400">Dette er en test</h2> */}
      {/* <TekstBoks /> */}
      <Card name="Benjamin Button" text="Lorem ipsum.." online="true" />
      <Card name="Shroud" text="Veldig flink på dataspill." online="true" />
      <Card name="Ninja" text="Ikke spesielt populær lengre." online="true" />
    </div>
  );
}

export default App;
