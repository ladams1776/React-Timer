import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllTags } from 'redux/actionCreators/actions';

const useFetchAllTags = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTags());
  }, [dispatch]);
};
export default useFetchAllTags;
