import { useState } from "react";
import "./App.css";
import { Search } from "./components/Search";
import { BasicUserCard } from "./components/BasicUserCard";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  console.log("data:", data);
  let api = `https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`;
  useEffect(() => {
    getData();
  }, []);

  const search = () => {
    let debounce;
    setPage(1);
    if (debounce) {
      clearTimeout(debounce);
    }
    debounce = setTimeout(() => {
      axios
        .get(api)
        .then((res) => setData(res.data.results))
        .catch((err) => console.log(err));
    }, 1000);
  };

  const getData = () => {
    axios
      .get(api)
      .then((res) => setData(data.concat(res.data.results)))
      .catch((err) => console.log(err));
    setPage(page + 1);
  };

  return (
    <div className="App">
      <Search search={search} setQuery={setQuery} />
      <BasicUserCard getData={getData} results={data} />
    </div>
  );
}

export default App;
