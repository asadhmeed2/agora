import React, { Fragment, useState } from "react";
import { observer, inject } from "mobx-react";

export const Inventory = inject("inventoryStore")(
  observer((props) => {
    const [name, setName] = useState("");

    const onChange = (e) => {
      setName(e.target.value);
    };

    const addItem = () => {
      props.inventoryStore.add(name, 0);
    };

    const onBay = (item) => {
      props.inventoryStore.bay(item.id);
    };

    const onChangePrice = (item) => {
      props.inventoryStore.changePrice(10, item.id);
    };
    return (
      <div>
        <input type="text" onChange={onChange} />
        <button onClick={addItem}>add</button>
        <br />
        <div className="items">
          {props.inventoryStore.items.map((item) => (
            <Fragment key={item.id}>
              <div>{item.name}</div>
              <div>{item.price}</div>
              <div className="">
                <button onClick={() => onBay(item)}>bay</button>
                {`${item.isPerched ? "perched" : ""}`}
                <button onClick={() => onChangePrice(item)}>changePrice</button>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    );
  })
);
