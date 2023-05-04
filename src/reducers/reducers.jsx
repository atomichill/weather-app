const initialState = {
    modal: true
}

const reducer = (state= initialState , action) => {
    switch(action.type) {
        case 'CLOSE_MODAL':
            return {
                ...state , 
                modal: action.payload
            }
    }
}

export default reducer;