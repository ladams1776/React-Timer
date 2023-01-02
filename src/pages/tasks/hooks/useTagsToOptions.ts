import useFetchAllTags from "pages/tags/useFetchAllTags";
import useAllTagSelectors from "redux/selectors/useAllTagSelectors";

const useTagsToOptions = () => {
    useFetchAllTags();
    const tags = useAllTagSelectors();
    return tags.map(tag => ({
        value: tag._id,
        label: tag.name
    }));
};

export default useTagsToOptions;