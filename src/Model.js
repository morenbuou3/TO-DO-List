class Model {
    constructor() {
        this.data = [
            {name: "test1", status: 1},
            {name: "test2", status: 2},
            {name: "test3", status: 3},
            {name: "test4", status: 1},
            {name: "test5", status: 2}
        ];

        this.handlers = {};
    }

    getData() {
        return this.data;
    }

    addHandler(type, handler) {
        if (typeof this.handlers[type] === "undefined") {
            this.handlers[type] = [];
        }
        this.handlers[type].push(handler);
    }

    handle(type) {
        if (this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                handlers[i]();
            }
        }
    }

    removeHandler(type, handler) {
        if (this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            for (var i = 0, len = handlers.length; i < len; i++) {
                if (handlers[i] === handler) {
                    break;
                }
            }
            handlers.splice(i, 1);
        }
    }

}

export default Model;