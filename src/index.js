import ActionButtons from './ActionButtons';
import BarChart from './BarChart';
import ToDoList from './ToDoList';
import Model from './Model';

const startup = () => {
    const toDoListModel = new Model();
    const actionButtons = new ActionButtons(toDoListModel, document.getElementById('action-buttons'));
    const toDoList = new ToDoList(toDoListModel, document.getElementById('to-do-list'));
    const barCharts = new BarChart(toDoListModel, document.getElementById('bar-chart'));
    actionButtons.render(document.getElementById('action-buttons'));
    toDoList.render(document.getElementById('to-do-list'));
    barCharts.render(document.getElementById('bar-chart'));

    toDoListModel.addHandler("actionButtons", actionButtons.render.bind(actionButtons));
    toDoListModel.addHandler("toDoList", toDoList.render.bind(toDoList));
    toDoListModel.addHandler("barCharts", barCharts.render.bind(barCharts));
};

startup();