
class ActionButtons {
    constructor(model, container) {
        this.model = model;
        this.container = container;
    }

    render() {
        this.container.innerHTML = `<button id="addBttn">Add</button> <button id = "deleteBttn" style = 'display: inline-block'>Delete</button>`;
        document.getElementById('addBttn').onclick = this.addRow.bind(this);
        document.getElementById('deleteBttn').onclick = this.deleteRow.bind(this);
    }

    addRow() {
        let id = this.model.data.reduce((a, b) => a.id > b.id ? a : b).id + 1;
        this.model.data.push({id: id, name:'', status: 1});
        this.refresh();
    }

    deleteRow() {
        if (this.selectedElement) {
            for (var i = 0, len = this.model.data.length; i < len; i++) {
                if (this.model.data[i].id === this.selectedElement) {
                    break;
                }
            }
            this.model.data.splice(i, 1);
        }
        this.refresh();
    }

    refresh() {
        this.model.handle("toDoList");
        this.model.handle("barCharts");
    }

}

export default ActionButtons;