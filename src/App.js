import { useState } from "react";
import Form from "./component/form/form";
import PackingList from "./component/packingList/packingList";
import Stats from "./component/stats/stats";

export default function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => {
      const ret = [...items, item];
      return ret;
    });
    console.log(item);
  };

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  const handleClearItems = (id) => {
    const confirmed = window.confirm("are u sure you want to delete all item");
    if (confirmed) setItems((items) => []);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItems={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
function Logo() {
  return <h3>🌲Far Away🎒 </h3>;
}
