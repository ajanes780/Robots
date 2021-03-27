import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { SearchBox } from "./components/searchbox/Searchbox";

import { CardListComponent } from "./components/Card.list/CardListComponent";

function App() {
  //local state object
  const [state, setState] = useState({
    monsters: [],
    search: "This is a test",
  });

  // basic useEffect axios pattern to get data from api spreading state as to not over write it
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((users) =>
        setState((prev) => ({ ...prev, monsters: users.data, search: "" }))
      );
  }, []);

  //destructor state so we can filter data
  const { monsters, search } = state;

  // lets filter the data
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(search.toLowerCase());
  });

  console.log("this");
  return (
    <div className="App">
      <SearchBox
        placeholder="Search Robots"
        handleChange={(e) =>
          setState((prev) => ({ ...prev, search: e.target.value }))
        }
      />
      <CardListComponent monsters={filteredMonsters} />
    </div>
  );
}

export default App;
