import React from "react";
import PropTypes from "prop-types";

function Item(props){
  return (
    <React.Fragment>
      <div id="item">
        <div id="card">
          <div id="item-details" onClick={() => props.whenItemClicked(props.id)}>
            <h3>Item Name: {props.name}</h3>
            <h3>Item Description: {props.description}</h3>
            <h3>Item Quantity: {props.quantity}</h3>
          </div>
          <div id="add-to-cart">
            <button onClick={() => props.whenAddToCart(props.id)} id={props.id}>Add to Cart</button>
          </div>
          <div id="restock">
            <button id={props.id}>Restock</button>
          </div>
          {/* <div id="update">
          <button id={props.id}>Update</button>
          </div>
          <div id="delete">
            <button id={props.id}>Delete</button>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func,
  whenAddToCart: PropTypes.func
};

export default Item;