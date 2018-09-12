import ItemReducer from "./ItemReducer";
import SelectedReducer from "./SelectedReducer";
import {combineReducers} from "redux";

export default combineReducers({
    items: ItemReducer,
    selectedItem: SelectedReducer,
});