const initState = [
    {id: 1, name: "test1", status: 1},
    {id: 2, name: "test2", status: 2},
    {id: 3, name: "test3", status: 3},
    {id: 4, name: "test4", status: 1},
    {id: 5, name: "test5", status: 2}
];

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [ ...state, action.item ];
        case 'DELETE_ITEM':
            return state.filter(n => n.id !== action.id);
        case 'UPDATE_ITEM':
            return state.map(n => n.id !== action.item.id ? n : action.item);
        default:
            return state;
    }
};

export default reducer;