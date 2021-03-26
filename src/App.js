// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import { CardListComponent } from "./components/Card.list/CardListComponent";

function App() {
  const [state, setState] = useState({ monsters: [] });
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users) => setState({ monsters: users.data }));
  });

  return (
    <div className="App">
      <CardListComponent name="Aaron">
        {state.monsters.map((monster) => (
          <h1 key={monster.key}>{monster.name}</h1>
        ))}
      </CardListComponent>
    </div>
  );
}

export default App;
