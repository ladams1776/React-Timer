import { FullModeContext, FullModeActionsContext } from "contexts/FullModeContext";
import { useContext } from "react";

interface FullReturnType {
    isFullMode: boolean;
    setIsFullMode: (isFullMode:boolean) => void;
}
const useFullMode = (): FullReturnType => {
    const isFullMode = useContext(FullModeContext);
    const setIsFullMode = useContext(FullModeActionsContext);

    return {isFullMode, setIsFullMode};
};

export default useFullMode;