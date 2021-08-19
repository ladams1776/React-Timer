import { FullModeContext, FullModeActionsContext } from "contexts/FullModeContext";
import { useContext } from "react";

const useFullMode = () => {
    const isFullMode = useContext(FullModeContext);
    const setIsFullMode = useContext(FullModeActionsContext);

    return {isFullMode, setIsFullMode};
};

export default useFullMode;