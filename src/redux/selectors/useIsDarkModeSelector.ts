import { useSelector } from "react-redux";

interface IsDarkModeProp {
    isDarkMode: boolean
}

const initialState: IsDarkModeProp = {
    isDarkMode: false,
}

export const useIsDarkModeSelector = (): boolean => {
    return useSelector<IsDarkModeProp, boolean>((state = initialState) => {
        return state.isDarkMode;
    });
};
