import React from "react";
import PropTypes from "prop-types";

function ItemDetail(props) {
  const { item, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div id="item-details">
        <h3>Item Name: {item.name}</h3>
        <h3>Item Description: {item.description}</h3>
        <h3>Item Quantity: {item.quantity}</h3>
      </div>
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <button onClick={ () => onClickingDelete(item.id) }>Delete Item</button>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
}

export default ItemDetail;