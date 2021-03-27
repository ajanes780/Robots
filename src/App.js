// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

import { CardListComponent } from "./components/Card.list/CardListComponent";

function App() {
  const [state, setState] = useState({ monsters: [], searchField: "" });
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users) => setState({ monsters: users.data }));
  });

  return (
    <div className="App">
      <input
        type="search"
        placeholder="search robots"
        onChange={(e) => setState({ searchField: e.target.value })}
      />
      <CardListComponent monsters={state.monsters} />
    </div>
  );
}

export default App;
