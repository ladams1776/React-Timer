import { FLASH_MESSAGE, TOGGLE_DARK_MODE } from "utils/constants";

//@TODO: Add more types
export const darkModeReducer = (state = null, action: any) => {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return { isDarkMode: action.isDarkMode }
        default:
            return state;
    }
};

export default darkModeReducer;