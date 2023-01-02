import { useSelector } from "react-redux";

interface ReturnedState {
    _id: string;
    description: string;
    name: string;
};

interface State {
    tags: {
        allTags: ReturnedState[]
    }
};

const useAllTagSelectors = () => useSelector((state: State): ReturnedState[] => state.tags.allTags);

export default useAllTagSelectors;

