import { useEffect } from 'react';
import { fetchApiData } from 'utils';
import { useLoadinSpinnerContext } from 'hooks';

const useFetchAllTags = setTags => {
  const { setIsLoadin } = useLoadinSpinnerContext();

  return useEffect(() => {
    setIsLoadin(true);
    fetchApiData('tags', {}, (data) => {
      console.log('fetchApiData', data)
      setTags(data.items)
    });
    setIsLoadin(false);
  }, [setTags, setIsLoadin]);
  // const fetchApiData = useFlashMessageFetchApiData('tags', {}, setTags, '', 'Failed to get Tags');
  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  // return useEffect(() => fetchApiData(), []);
};
export default useFetchAllTags;
