
class ActionButtons {
    constructor(model, container, store) {
        this.model = model;
        this.container = container;
        this.store = store;
    }

    render() {
        this.container.innerHTML = `<button id="addBttn">Add</button> <button id = "deleteBttn" style = 'display: inline-block'>Delete</button>`;
        document.getElementById('addBttn').onclick = this.addRow.bind(this);
        document.getElementById('deleteBttn').onclick = this.deleteRow.bind(this);
    }

    addRow() {
        this.store.dispatch({ type: 'addRow', item: {id: this.store.getState().length + 1, name:'', status: 1} });
        // this.model.data.push({id: id, name:'', status: 1});
        // this.refresh();
    }

    deleteRow() {
        if (this.selectedElement) {
            // for (var i = 0, len = this.store.getState().length; i < len; i++) {
            //     if (this.store.getState()[i].id === this.selectedElement) {
            //         break;
            //     }
            // }
            this.store.dispatch({ type: 'deleteRow', id: this.selectedElement});
            // this.model.data.splice(i, 1);
        }
        this.refresh();
    }

    refresh() {
        this.model.handle("toDoList");
        this.model.handle("barCharts");
    }

}

export default ActionButtons;