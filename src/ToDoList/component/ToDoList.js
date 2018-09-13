import React from "react";

class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            queryName: '',
        }
    }

    render() {
        let itemList = this.state.queryName === '' ? this.props.items : this.props.items.filter(m => m.name.indexOf(this.state.queryName) !== -1);
        return (
            <div className="wrapper">
                <i className="fa fa-search"/>
                <input onChange={this.handleChange.bind(this)}
                       ref={(ref) => this.query = ref}
                       placeholder="Search..."/>
                <table id='info'>
                    <tbody>
                    {
                        itemList.map((n, index) => (
                            <tr key={index} id={n.id} onClick={this.TrOnClick.bind(this)} onBlur={this.blur.bind(this)}>
                                <td><input defaultValue={n.name}/></td>
                                <td>
                                    <select id="mySelect" defaultValue={n.status}>
                                        <option value="1">To Do</option>
                                        <option value="2">Finished</option>
                                        <option value="3">Blocked</option>
                                    </select>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }

    handleChange() {
        this.setState({queryName: this.query.value});
    };

    TrOnClick(event) {
        let tbl = document.getElementById("info");
        let trs = tbl.getElementsByTagName("tr");
        for (let i = 0; i < trs.length; i++) {
            if (trs[i] === event.currentTarget) {
                trs[i].style.background = "yellow";
                this.props.selectedItem(parseInt(event.currentTarget.getAttribute("id")));
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
        let item = this.props.items.find(n => n.id === id);
        this.props.updateItem({id: id, name: item.name, status: status});
    }

    onInputChange(target) {
        let id = parseInt(target.parentElement.parentElement.getAttribute('id'));
        let item = this.props.items.find(n => n.id === id);
        this.props.updateItem({id: item.id, name: target.value, status: item.status});
    }

    save(target) {
        if (target.nodeName === "INPUT") this.onInputChange(target);
        if (target.nodeName === "SELECT") this.onChange(target);
    }

    blur(event) {
        this.save(event.target);
    }
}

export default ToDoList;