const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'SELECTED_ITEM':
            return action.id;
        default:
            return state;
    }
};

export default reducer;