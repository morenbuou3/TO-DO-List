import {connect} from "react-redux";
import ActionButtons from "./component/ActionButtons";

const mapStateToProps = ({items, selectedItem}) => ({
    items: items,
    selectedItem: selectedItem,
});

const mapDispatchProps = (dispatch) => ({
    addItem: (item) => (dispatch({type:'ADD_ITEM', item: item})),
    deleteItem: (itemId) => (dispatch({type:'DELETE_ITEM', id: itemId})),
    updateItem: (item) => (dispatch({type:'UPDATE_ITEM', item: item})),
});

export default connect(mapStateToProps, mapDispatchProps)(ActionButtons);