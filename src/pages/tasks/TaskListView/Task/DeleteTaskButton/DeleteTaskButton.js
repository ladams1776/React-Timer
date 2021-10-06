import React from "react";
import cn from 'classnames';
import { fetchApiData } from 'utils';
import { useBrowserHistory, useLoadinSpinnerContext } from 'hooks';
import useDispatch from './useDispatch';
import { Button } from "components";
import useFetchAllTasks from "pages/tasks/hooks/useFetchAllTasks";
import styles from './DeleteTaskButton.module.css';

const DeleteTaskButton = ({ taskId, isSelected, setTasks }) => {
  const { push } = useBrowserHistory();
  const dispatch = useDispatch(taskId);
  const { setIsLoadin } = useLoadinSpinnerContext();

  const _deleteClick = async e => {
    const isDeleting = window.confirm("Are you sure you want to delete task?");
    const reload = data => {
      dispatch(data);
      //@TODO: Fetch the list of notes now
      setIsLoadin(true);
      fetchApiData('tasks', {}, setTasks);
      setIsLoadin(false);
    };

    if (isDeleting) {
      e.preventDefault();
      fetchApiData(`task/${taskId}`, { method: 'DELETE' }, reload);
    }
  };

  return (
    <Button
      onClick={_deleteClick}
      className={cn(styles.deleteBtn, "glyphicon glyphicon-trash", { [styles.selected]: isSelected })}
      data-test-id="delete-task-button"
    />
  );
};

export default DeleteTaskButton;
