class BarChart {
    constructor(model, container) {
        this.model = model;
        this.container = container;
    }

    render() {
        this.container.innerHTML = `Finished(${this.model.data.filter(n => n.status === 2).length})\n`
            + `Blocked(${this.model.data.filter(n => n.status === 3).length})`
            + `To Do(${this.model.data.filter(n => n.status === 1).length})`;
    }
}

export default BarChart;