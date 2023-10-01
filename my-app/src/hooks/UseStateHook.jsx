import { useState } from "react";
function UseStateHook() {
  // const [counter, setCounter] = useState(0)
  // const [color, setColor] = useState('blue')
  // const [isVisable, setVisable] = useState(false)
  // const increment = () => setCounter(counter + 1)
  // const decrement = () => setCounter(counter - 1)
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  function handleItem() {
    if (value) {
      setItems([...items, value]);
      setValue("");
    }
  }
  function handleDelete(ndx) {
    const newItems = [...items];
    newItems.splice(ndx, 1);
    console.log(newItems);
    setItems(newItems);
  }
  return (
    <div className="">
      <header className="">
        {/* <p style={{backgroundColor: color}}>counter: {counter}</p>
      <button onClick={ () => setColor('red')}>Red</button>
      <button onClick={ () => setColor('green')}>Green</button>
      <div style={{ display: 'flex', gap: '20px'}}>
      <button style={{ padding: '20px'}} onClick={ () => setCounter(counter + 1)}>+</button>
      <button style={{ padding: '20px'}} onClick={ () => setCounter(counter - 1)}>-</button>
      </div>
      <div>
        <p>{ isVisable && 'Open text'}</p>
    <button onClick={ () => setVisable(!isVisable)}>Open Text</button>

      </div> */}
        <div style={{ padding: "10px" }}>
          <input
            placeholder="Name"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button onClick={handleItem}>Add Item</button>
          <div>
            <div>
              {items.length
                ? items.map((item, index) => (
                    <div key={index}>
                      <p> {item}</p>
                      <button onClick={() => handleDelete(index)}>
                        {" "}
                        Delete
                      </button>
                    </div>
                  ))
                : "No Items"}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default UseStateHook;
