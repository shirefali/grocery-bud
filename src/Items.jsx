import SingleItem from "./SingleItem";

const Items = ({ items, removeItem }) => {
    return (
        <section className="items">
            {items.map((item) => {
                return (
                    <SingleItem
                        key={item.id}
                        item={item}
                        removeItem={removeItem}
                    />
                );
            })}
        </section>
    );
};

export default Items;
