import { DateTimeInterface } from 'interfaces/pages/tasks/Task';
import { useSelector } from 'react-redux';

const useTaskByIdSelector = (taskId: string = ''): ReturnedTaskState => {
  const task = window.localStorage.getItem(taskId);
  const d = task !== null  ? JSON.parse(task)
    : {
        id: '',
        _id: '',
        description: '',
        contractId: '',
        project: '',
        dateTimes: [],
        time: 0,
      };

  return useSelector((state: State): ReturnedTaskState => {
    if (d.id !== '') {
      return d;
    }

    return {
      ...state.tasks.taskById,
      id: state?.tasks?.taskById?._id,
      project: state?.tasks?.taskById?.contractId,
    };
  });
};

export default useTaskByIdSelector;

interface State {
  tasks: {
    taskById: ReturnedTaskState;
  };
}

interface ReturnedTaskState {
  id: string;
  _id: string;
  description: string;
  contractId: string;
  project: string;
  dateTimes: DateTimeInterface[];
  time: number;
}
