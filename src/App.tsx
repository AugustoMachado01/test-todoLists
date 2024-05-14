import { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [list, setList] = useState(["Machado", "Mauro", "Felix"]);

  function addToLiat() {
    setTimeout(() => {
      setList((state) => [...state, newItem]);
    }, 500);
  }

  function removeFromList(item: string) {
    setList((state) => state.filter((items) => items !== item));
  }

  return (
    <>
      <input
        placeholder="novo item"
        type="text"
        value={newItem}
        onChange={({ target }) => setNewItem(target.value)}
      />
      <button onClick={addToLiat}>Adicionar</button>

      <ul>
        {list.map((item) => (
          <li key={item}>
            {item}
            <button onClick={() => removeFromList(item)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
