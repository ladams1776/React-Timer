import { useDispatch } from 'react-redux';
import { fetchAllTags, putTag } from 'redux/actionCreators/actions';

const useFormSetup = () => {
    const dispatch = useDispatch();

    return async (body) => {
        await dispatch(putTag(body));
        dispatch(fetchAllTags());
    };
};

export default useFormSetup;