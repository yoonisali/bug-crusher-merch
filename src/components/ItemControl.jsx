import React from "react";
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";

class ItemControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainItemList: []
    };
  }

  handleAddItem = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewItemToList = (newItem) => {
    const newMainItemList = this.state.mainItemList.concat(newItem);
    this.setState({
      mainItemList: newMainItemList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisableState = null;
    let buttonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisableState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList}/>;
      buttonText = "Return to Items List"; 
    } else {
      currentlyVisableState = <ItemList itemList={this.state.mainItemList}/>;
      buttonText = "Add Item";
    }
    return (
      <React.Fragment>
        <button onClick={this.handleAddItem}>{buttonText}</button>
        {currentlyVisableState}
      </React.Fragment>
    )

  }
}

export default ItemControl;