import React from "react";

class ActionButtons extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onClick={this.addRow.bind(this)}>Add</button>
                <button onClick={this.deleteRow.bind(this)} style = {{display: 'inline-block'}}>Delete</button>
            </div>
        );
    }

    addRow() {
        this.props.addItem({id: this.props.items.length + 1, name:'', status: 1});
    }

    deleteRow() {
        if (this.props.selectedItem !== 0) {
            this.props.deleteItem(this.props.selectedItem);
        }
    }
}

export default ActionButtons;