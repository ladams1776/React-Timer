/* eslint-disable no-useless-computed-key */
import React from 'react';
import cn from 'classnames';
import { useSetCurrentLocation } from 'hooks';
import useTaskRefs from './hooks/useTaskRefs';
import TagContextProvider from './TaskForm/contexts/TagContext';
import TimeContextProvider from './TaskForm/contexts/TimeContext';
import EditTaskForm from './TaskForm/form/EditTaskForm';
import TaskListView from './TaskListView/TaskListView';
import ControlButtons from './TaskListView/ControlButtons/ControlButtons';
import useFetchAllTasks from 'pages/tasks/hooks/useFetchAllTasks';
import styles from './TaskPage.module.css';


const TaskPage = ({ match }) => {
  const taskId = match?.params?.id;
  useSetCurrentLocation(`/task/${taskId}`);
  const [tasks, setTasks] = React.useState([]);
  const storageSave = React.useCallback((tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setTasks(tasks)
  }, []);
  useFetchAllTasks(storageSave);
  const refs = useTaskRefs(tasks);

  return (
    <TagContextProvider>
      <TimeContextProvider>
        <div className={styles.container} data-testid="container">
          <div className={cn({ [styles.navBarInnerContainer]: true})}>
            <ControlButtons tasks={tasks} />
          </div>
          <div className={styles.mainInnerContainer}>
            <TaskListView tasks={tasks} setTasks={storageSave} refs={refs}
              className={cn(styles.listView, { [styles.listViewAndTask]: taskId})} />
            {(taskId !== undefined && taskId !== "-1")
              ? <EditTaskForm taskId={taskId} className={styles.form} data-testid="addTaskForm" />
              : <div className={styles.form}></div>}
          </div>
        </div>
      </TimeContextProvider>
    </TagContextProvider>
  );
};

export default TaskPage;
