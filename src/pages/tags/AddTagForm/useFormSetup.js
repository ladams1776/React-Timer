import { useDispatch } from 'react-redux';
import { putTag } from 'redux/actionCreators/actions';

const useFormSetup = () => {
    const dispatch = useDispatch();

    return  (body) => {
        dispatch(putTag(body));
    };
};

export default useFormSetup;