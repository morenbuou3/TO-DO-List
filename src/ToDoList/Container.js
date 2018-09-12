import ToDoList from "./component/ToDoList";
import {connect} from "react-redux";

const mapStateToProps = ({items}) => ({
    items: items,
});

const mapDispatchProps = (dispatch) => ({
    addItem: (item) => (dispatch({type:'ADD_ITEM', item: item})),
    selectedItem: (itemId) => (dispatch({type:'SELECTED_ITEM', id: itemId})),
    deleteItem: (itemId) => (dispatch({type:'DELETE_ITEM', id: itemId})),
    updateItem: (item) => (dispatch({type:'UPDATE_ITEM', item: item})),
});

export default connect(mapStateToProps, mapDispatchProps)(ToDoList);