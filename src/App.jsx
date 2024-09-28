import { nanoid } from "nanoid";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Form from "./Form";
import Items from "./Items";

const App = () => {
    const [items, setItems] = useState([]);

    const addItem = (itemName) => {
        const newItem = {
            name: itemName,
            completed: false,
            id: nanoid(),
        };
        setItems([...items, newItem]);
    };

    const removeItem = (itemId) => {
        const newItems = items.filter((item) => item.id !== itemId);
        setItems(newItems);
        toast.success("item deleted");
    };

    return (
        <section className="section-center">
            <ToastContainer position="top-center" />
            <Form addItem={addItem} />
            <Items removeItem={removeItem} items={items} />
        </section>
    );
};

export default App;
