export const RECV_VALUE = "RECV_VALUE";
export const LOGIN = "LOGIN";

export function receiveValue(value) {
    return {
        type: RECV_VALUE,
        value: value
    };
};