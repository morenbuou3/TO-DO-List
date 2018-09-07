class ToDoList {
    constructor(model, container) {
        this.list = model.getData();
        this.container = container;
    }

    render() {
        let rows = this.list.map(item => `<tr>
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
    }
}

export default ToDoList;