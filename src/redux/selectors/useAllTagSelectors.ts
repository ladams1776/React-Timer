import { useSelector } from "react-redux";

interface State {
    tags: {
        allTags: []
    }
}

interface ReturnedState {}
const useAllTagSelectors = () => useSelector((state: State): ReturnedState => state.tags.allTags);

export default useAllTagSelectors;

