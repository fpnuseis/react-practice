import { RECV_VALUE, LOGIN } from '../actions';

const initialState_counter = {
    value: -1
};

const counterReducer = (state = initialState_counter, action) => {
    switch(action.type) {
        case RECV_VALUE:
            return Object.assign({}, state, {
                value: action.value
            });
        default:
            return state;
    }
};

export default counterReducer;