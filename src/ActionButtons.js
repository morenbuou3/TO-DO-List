
class ActionButtons {
    constructor(model, container) {
        this.model = model;
        this.container = container;
    }

    render() {
        this.container.innerHTML = `<button id="addBttn">Add</button> <button id = "deleteBttn" style = 'display: inline-block'>Delete</button>`;
        document.getElementById('addBttn').onclick = this.addRow.bind(this);
    }

    addRow() {
        this.model.data.push({name:'', status: 1});
        this.model.handle("toDoList");
        this.model.handle("barCharts");
    }

}

export default ActionButtons;