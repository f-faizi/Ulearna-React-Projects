import { useEffect, useState } from "react";
import axios from "axios";
function UseEffectHook() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetch("http://192.168.137.184:8000/api/items")
      .then((res) => res.json())
      .then((res) => setData(res.data));
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (value) {
      axios
        .post("http://192.168.137.184:8000/api/items", { name: value })
        .then(async (res) => {
          setData(res.data.data);
        });
    }
  }
  function handelSearch(e) {
    e.preventDefault();
    fetch(`http://192.168.137.184:8000/api/search-items?query=${search}`)
      .then((res) => res.json())
      .then((res) => setData(res));
    console.log(data);
  }

  return (
    <div className="">
      <form action="" onSubmit={handelSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Item name"
            onChange={(e) => setValue(e.target.value)}
            style={{ display: "block" }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffectHook;
