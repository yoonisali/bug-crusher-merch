import React from "react";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import EditItemForm from "./EditItemForm";

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: [],
      cartList: [],
      selectedItem: null,
      editing: false
    };
  }

  // handleClick() on help-queue
  handleAddItem = () => {
    if (this.state.selectedItem !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      mainItemList: newMainItemList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.mainItemList.filter(item => item.id === id)[0];
    this.setState({ selectedItem: selectedItem });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingItemInList = (itemToEdit) => {
    const editedMainItemList = this.state.mainItemList
          .filter(item => item.id !== this.state.selectedItem.id)
          .concat(itemToEdit);
          this.setState({
            mainItemList: editedMainItemList,
            editing: false,
            selectedItem: null
          })
  }

  handleDeletingItem = (id) => {
    const newMainItemList = this.state.mainItemList.filter(item => item.id !== id);
    this.setState({
      mainItemList: newMainItemList,
      selectedItem: null
    });
  }

  handleAddToCart = (id) => {
    const newItem = {...this.state.mainItemList.filter(item => item.id === id)[0]};
    newItem.quantity = (parseInt(newItem.quantity) - 1).toString();
    
    const editedMainItemList = this.state.mainItemList
      .filter(item => item.id !== id)
      .concat(newItem);
    this.setState({
      mainItemList: editedMainItemList
    });
      
    let cartItem = {...this.state.cartList.filter(item => item.id === id)[0]};
    if (cartItem === undefined) {
      cartItem = {...this.state.mainItemList.filter(item => item.id === id)[0]};
      cartItem.quantity = "1";
    } else {
      cartItem.quantity = (parseInt(cartItem.quantity) + 1).toString();
    }

    // const cartItem = this.state.mainItemList.filter(item => item.id === id)[0];
    // cartItem.quantity = "1";
    
    const editedMainCartList = this.state.cartList
      .filter(item => item.id !== id)
      .concat(cartItem);

    this.setState({
      cartList: editedMainCartList
    });
  }

  handleQuantityDisplay = (id) => {
    let totalQuantity = 0;
    // let cartItem = this.state.cartList.filter(item => item.id === id)[0];
    const cartList = this.state.cartList;
    for (let i = 0; i < cartList.length; i++) {
      totalQuantity += parseInt(cartList[i].quantity);
    }
    return totalQuantity;
  }

  render() {
    let currentlyVisableState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisableState = 
        <EditItemForm 
          item={this.state.selectedItem}
          onEditItem={this.handleEditingItemInList} />
          buttonText = "Return to Items List";
    } else if (this.state.selectedItem !== null) {
      currentlyVisableState = 
        <ItemDetail
          item={this.state.selectedItem}
          onClickingEdit={this.handleEditClick}
          onClickingDelete={this.handleDeletingItem} />
          buttonText = "Return to Items List"; 
    } else if (this.state.formVisibleOnPage) {
      currentlyVisableState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/>;
      buttonText = "Return to Items List"; 
    } else {
      currentlyVisableState = <ItemList itemList={this.state.mainItemList} onItemSelection={this.handleChangingSelectedItem} onAddToCart={this.handleAddToCart}/>;
      buttonText = "Add Item";
    }

    return (
      <React.Fragment>
        <p>{this.handleQuantityDisplay()}</p>
        <button onClick={this.handleAddItem}>{buttonText}</button>
        {currentlyVisableState}
      </React.Fragment>
    )

  }
}

export default ItemControl;