import { useSelector } from "react-redux";

const initialState = {
    flash: {
        message: '',
        status: 'success'
    }
}
export const useFlashMessageSelectors = () => {
    return useSelector((state = initialState) => {
        return state?.flash || initialState
    });
};
