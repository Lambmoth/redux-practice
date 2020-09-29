import { bindActionCreators } from "redux";

export const increment = (factor) => {
    
    return {
        type: 'INCREMENT',
        payload: factor
    };
};

export const decrement = (factor) => {
    return {
        type: 'DECREMENT',
        payload: factor
    };
};