class ToDoList {
    constructor(model, container, actionButtons) {
        this.list = model.getData();
        this.container = container;
        this.actionButtons = actionButtons;
    }

    render() {
        let rows = this.list.map(item => `<tr id=${item.id}>
                                              <td>${item.name}</td>
                                              <td>
                                                <select id="pet-select">
                                                    <option value="1" ${item.status === 1 ? 'selected' : ''} >Do To</option>
                                                    <option value="2" ${item.status === 2 ? 'selected' : ''}>Finished</option>
                                                    <option value="3" ${item.status === 3 ? 'selected' : ''}>Blocked</option>
                                                </select>
                                              </td>
                                          </tr>`);
        this.container.innerHTML = `<table id = 'info'>${rows}</table>`;
        this.list.map(n => document.getElementById(`${n.id}`).onclick = this.TrOnClick.bind(this));
    }

    TrOnClick(event) {
        let tbl = document.getElementById("info");
        let trs = tbl.getElementsByTagName("tr");
        for (let i = 0; i < trs.length; i++) {
            if (trs[i] === event.currentTarget) {
                trs[i].style.background = "yellow";
                this.actionButtons.selectedElement = parseInt(event.currentTarget.getAttribute("id"));
            }
            else {
                trs[i].style.background = "white";
            }
        }
    }
}

export default ToDoList;