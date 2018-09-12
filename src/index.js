import ActionButtons from './ActionButtons';
import BarChart from './BarChart';
import ToDoList from './ToDoList';
import Model from './Model';
import { createStore } from 'redux'

const startup = () => {
    const reducer = (state = [
        {id: 1, name: "test1", status: 1},
        {id: 2, name: "test2", status: 2},
        {id: 3, name: "test3", status: 3},
        {id: 4, name: "test4", status: 1},
        {id: 5, name: "test5", status: 2}
    ], action) => {
        switch (action.type) {
            case 'addRow':
                return [ ...state, action.item ];
            case 'deleteRow':
                return state.filter(n => n.id !== action.id);
            case 'updateItem':
                return state.map(n => n.id !== action.item.id ? n : action.item);
            default:
                return state;
        }
    };
    const store = createStore(reducer);

    const toDoListModel = new Model();
    const actionButtons = new ActionButtons(toDoListModel, document.getElementById('action-buttons'), store);
    const toDoList = new ToDoList(toDoListModel, document.getElementById('to-do-list'), actionButtons, store);
    const barCharts = new BarChart(toDoListModel, document.getElementById('bar-chart'), store);


    store.subscribe(() => {
        actionButtons.render();
        toDoList.render();
        barCharts.render();
    });

    store.dispatch({type:''});

    toDoListModel.addHandler("actionButtons", actionButtons.render.bind(actionButtons));
    toDoListModel.addHandler("toDoList", toDoList.render.bind(toDoList));
    toDoListModel.addHandler("barCharts", barCharts.render.bind(barCharts));
};

startup();