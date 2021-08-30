import { useEffect } from 'react';
import { fetchApiData } from 'utils';
import { useLoadinSpinnerContext } from 'hooks';

//@TODO: Model this after useFetchAllTags
const useFetchAllTasks = setTasks => {
  const { setIsLoadin } = useLoadinSpinnerContext();
const tasks = localStorage.getItem('tasks');
const parsedTasks = tasks ? JSON.parse(tasks): null;

  return useEffect(() => {
    if(parsedTasks) {
      setTasks(parsedTasks);
    } else {
      // setIsLoadin(true);
      fetchApiData('tasks', {}, setTasks);
      // setIsLoadin(false);
    }
  }, [setTasks, setIsLoadin]);
};

export default useFetchAllTasks;
