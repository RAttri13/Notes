import { useState } from "react";
import "./form.css";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItems = { description, quantity, packed: false, id: Date.now() };
    // console.log(newItems);
    onAddItems(newItems);
    setDescription("");

    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <div className="inputContainer">
        <select
          className="numberList"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="itemInput"
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <button className="buttonAdd">Add</button>
    </form>
  );
}
