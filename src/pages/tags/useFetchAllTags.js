import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllTags } from 'redux/actionCreators/actions';

const useFetchAllTags = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTags());
  }, []);
  // const fetchApiData = useFlashMessageFetchApiData('tags', {}, setTags, '', 'Failed to get Tags');
  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  // return useEffect(() => fetchApiData(), []);
};
export default useFetchAllTags;
