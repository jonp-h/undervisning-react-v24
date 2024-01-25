import "../App.css";
import CardData from "../lib/CardData";
import Card from "./Card";
import InteractiveCounter from "./InteractiveCounter";
import InteractiveList from "./InteractiveList";

const card = CardData.map((data) => {
  // spread syntax i ES6
  return <Card {...data} />;
});

function App() {
  return (
    <div className=" content-stretch h-screen bg-slate-800">
      {/* <div className="grid grid-cols-4 pt-5 ">{card}</div> */}
      <InteractiveList />
      {/* <InteractiveCounter /> */}
    </div>
  );
}

export default App;
