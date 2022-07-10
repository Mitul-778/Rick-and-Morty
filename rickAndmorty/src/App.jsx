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
  const[next,setNext] = useState(false);
  console.log("data:", data);
  let api = `https://rickandmortyapi.com/api/character/?name=${query}&page=${page}`;
  useEffect(() => {
    setData([])
  }, [query]);

  useEffect(()=>{
    let debounce;
    debounce= setTimeout(()=>{
      getData();
    },1000)
    return ()=>clearTimeout(debounce);
  },[query,page])

  const getData = () => {
    axios
      .get(api)
      .then((res) => {
        setData([...data,...res.data.results]);
        if(res.data.info.next){
          setNext(true);
        }else{
          setNext(false);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <Search setPage={setPage} setQuery={setQuery} />
      <BasicUserCard next={next} getData={getData} results={data} />
    </div>
  );
}

export default App;
