import React from "react";

class BarChart extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <span>Finished({this.props.items.filter(n => n.status === 2).length})</span>
                <span>Blocked({this.props.items.filter(n => n.status === 3).length})</span>
                <span>To Do({this.props.items.filter(n => n.status === 1).length})</span>
            </div>
        );
    }
}

export default BarChart;