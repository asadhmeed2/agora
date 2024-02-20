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
    return (
      <div>
        <input type="text" onChange={onChange} />
        <button onClick={addItem}>add</button>
        <br />
        <div className="items">
          {props.inventoryStore.items.map((item) => (
            <Fragment key={item.id}>
              <div>{item.name}</div>
              <div className="">
                <button onClick={props.inventoryStore.bay(item.id)}>bay</button>
                {`${item.isPerched}`}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    );
  })
);
