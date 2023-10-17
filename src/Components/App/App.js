import "./App.css";
import { Map } from "../Map/Map";

function App() {
  return (
    <div className="w-full">
      Карта может возвращаться на страницу, с которой была открыта!
      <Map size="small" className="m-auto" />
    </div>
  );
}

export default App;
