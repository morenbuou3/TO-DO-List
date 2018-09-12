import React from "react";
import ActionButtons from './ActionButtons/index';
import BarChart from './BarChart/index';
import ToDoList from './ToDoList/index'

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ActionButtons/>
                <ToDoList/>
                <BarChart/>
            </div>
        );
    }
}

export default App;