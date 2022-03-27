import { useEffect } from 'react';
import { fetchApiData } from 'utils';
import { useLoadinSpinnerContext } from 'hooks';
// import { useFlashMessageFetchApiData } from 'utils';

const useFetchAllTags = setTags => {
  const { setIsLoadin } = useLoadinSpinnerContext();
  return useEffect(() => {
    setIsLoadin(true);
    fetchApiData('tags', {}, setTags);
    setIsLoadin(false);
  }, [setTags, setIsLoadin]);
};
export default useFetchAllTags;
