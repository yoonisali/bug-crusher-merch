import React from "react";

function Header() {
  return (
    <div id="header">
      {/* <div id="add-item-btn">
          <button type="submit">Add Item</button>
        </div> */}
      <div id="title">
        <h1>Bug Crusher Merch</h1>
      </div>
      <div id="checkout">
        <button type="submit">Checkout</button>
        <p>Cart: 0</p>

          {/* Placeholder */}
          

      </div>
    </div>
  );
}

export default Header;