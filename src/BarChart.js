class BarChart {
    constructor(model, container, store) {
        this.model = model;
        this.container = container;
        this.store = store;
    }

    render() {
        this.container.innerHTML = `Finished(${this.store.getState().filter(n => n.status === 2).length})\n`
            + `Blocked(${this.store.getState().filter(n => n.status === 3).length})`
            + `To Do(${this.store.getState().filter(n => n.status === 1).length})`;
    }
}

export default BarChart;