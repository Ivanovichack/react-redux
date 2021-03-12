const initialState = {
    count: 0
};

function reducer(state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return { count: state.count + action.num};
        default:
            return state;
    }
}

export default reducer;