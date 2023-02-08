import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <div id="item-list">
      {props.itemList.map((item) => 
        <Item name={item.name}
          description={item.description}
          quantity={item.quantity}
          id={item.id} />
      )}
    </div>
  )
}

ItemList.propTypes = {
  itemList: PropTypes.array
};

export default ItemList;