import { FLASH_MESSAGE } from "redux/types";

//@TODO: Add more types
export const flashReducer = (state = null, action: any) => {
    switch (action.type) {
        case FLASH_MESSAGE:
            return { status: action.status, message: action.message }
        default:
            return state;
    }
};

export default flashReducer;