class ToDoList {
    constructor(model, container, actionButtons) {
        this.list = model;
        this.container = container;
        this.actionButtons = actionButtons;
    }

    render() {
        let rows = this.list.data.map(item => `<tr id=${item.id}>
                                              <td>${item.name}</td>
                                              <td>
                                                <select id="mySelect">
                                                    <option value="1" ${item.status === 1 ? 'selected' : ''} >Do To</option>
                                                    <option value="2" ${item.status === 2 ? 'selected' : ''}>Finished</option>
                                                    <option value="3" ${item.status === 3 ? 'selected' : ''}>Blocked</option>
                                                </select>
                                              </td>
                                          </tr>`);
        this.container.innerHTML = `<table id = 'info'>${rows}</table>`;
        this.list.data.map(n => document.getElementById(`${n.id}`).onclick = this.TrOnClick.bind(this));
        let selects = document.getElementsByTagName('select')
        for (let i = 0; i < selects.length; i++) {
            selects[i].onchange = this.onChange.bind(this);
        }
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

    onChange(event) {
        let selector = event.target;
        let tr = selector.parentElement.parentElement;
        let id = parseInt(tr.getAttribute("id"));
        let selectedIndex = selector.selectedIndex;
        let value = parseInt(selector.options[selectedIndex].value);
        this.list.data.find(n => n.id === id).status = value;

        console.log(this.list.data);
        this.refresh();
    }

    refresh() {
        this.model.handle("toDoList");
        this.model.handle("barCharts");
    }
}

export default ToDoList;