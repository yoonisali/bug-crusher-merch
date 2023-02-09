import React from "react";
import PropTypes from "prop-types";

function EditItemForm (props) {
  const { item } = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({name: event.target.name.value, description: event.target.description.value, quantity: event.target.quantity.value, id: item.id});
  }

  return (
    <React.Fragment>
        <form onSubmit={handleEditItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Item Name' />
        <input
          type='text'
          name='description'
          placeholder='Item Description' />
        <input
          name='quantity'
          placeholder='Item Quantity' />
        <button type='submit'>Update Item</button>
      </form>

    </React.Fragment>
  )
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
}

export default EditItemForm;