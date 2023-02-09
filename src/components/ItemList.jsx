import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <div id="item-list">
      {props.itemList.map((item) => 
        <Item 
          whenItemClicked = { props.onItemSelection }
          whenAddToCart = { props.onAddToCart }
          name={item.name}
          description={item.description}
          quantity={item.quantity}
          id={item.id}
          key={item.id} />
      )}
    </div>
  )
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func,
  onAddToCart: PropTypes.func
};

export default ItemList;