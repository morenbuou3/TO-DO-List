class ToDoList {
    constructor(model, container, actionButtons, store) {
        this.list = model;
        this.container = container;
        this.actionButtons = actionButtons;
        this.store = store;
    }

    render(data) {
        this.rows = ToDoList.getRows(data ? data : this.store.getState());
        this.container.innerHTML = `<div class="wrapper"><i class="fa fa-search"></i><input id="query" placeholder="Search..."/></div>`;
        this.container.innerHTML += `<table id = 'info'>${this.rows}</table>`;
        document.getElementById('query').onkeypress = this.query.bind(this);
        this.store.getState().map(n => document.getElementById(`${n.id}`).onclick = this.TrOnClick.bind(this));
        this.store.getState().map(n => document.getElementById(`${n.id}`).addEventListener('focusout', this.blur.bind(this)));
    }

    query(event) {
        if(event.keyCode===13) {
            let name = event.target.value;
            if (name) {
                var data = this.list.data.filter(n => n.name.indexOf(name) !== -1);
            }
            this.refresh(data);
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

    onChange(target) {
        let tr = target.parentElement.parentElement;
        let id = parseInt(tr.getAttribute("id"));
        let selectedIndex = target.selectedIndex;
        let status = parseInt(target.options[selectedIndex].value);
        let item = this.store.getState().find(n => n.id === id);
        this.store.dispatch({type: 'updateItem', item: {id: id, name: item.name, status: status}});
    }

    onInputChange(target) {
        let id = parseInt(target.parentElement.parentElement.getAttribute('id'));
        let name = target.value;
        this.store.getState().find(n => n.id === id).name = name;
        let item = this.store.getState().find(n => n.id === id);
        this.store.dispatch({type: 'updateItem', item: {id: id, name: value, status: item.status}});
    }

    save(target) {
        if (target.nodeName === "INPUT") this.onInputChange(target);
        if (target.nodeName === "SELECT") this.onChange(target);
    }

    blur(event) {
        this.save(event.target);
        // this.refresh();
    }

    // refresh(data) {
    //     this.list.handle("toDoList", data);
    //     this.list.handle("barCharts");
    // }

    static getRows(itemList) {
        return itemList.reduce((acc,item) => acc + `<tr id=${item.id}>           
                                              <td><input value=${item.name}></td>
                                              <td>
                                                <select id="mySelect">
                                                    <option value="1" ${item.status === 1 ? 'selected' : ''} >To Do</option>
                                                    <option value="2" ${item.status === 2 ? 'selected' : ''}>Finished</option>
                                                    <option value="3" ${item.status === 3 ? 'selected' : ''}>Blocked</option>
                                                </select>
                                              </td>
                                          </tr>`, ``);
    }
}

export default ToDoList;